#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { CODE_FENCE_LANG, fenceEmitter, libraryItemLookup } from './snippet-emit.mjs';
import {
    compareOutputTrees, emittableSampleNames, readImpactManifest,
} from './output-impact.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const TOOLING_ROOT = path.resolve(HERE, '..');
const EXAMPLES_ROOT = process.env.XPLAT_EXAMPLES_ROOT
    ? path.resolve(process.env.XPLAT_EXAMPLES_ROOT) : path.resolve(TOOLING_ROOT, '..');
const require = createRequire(import.meta.url);

function fail(message) {
    console.error(`xplat-codegen: ${message}`);
    process.exitCode = 1;
}

function argsOf(argv) {
    const values = { _: [] };
    for (let i = 0; i < argv.length; i++) {
        const arg = argv[i];
        if (!arg.startsWith('--')) { values._.push(arg); continue; }
        const equal = arg.indexOf('=');
        if (equal > 0) { values[arg.slice(2, equal)] = arg.slice(equal + 1); continue; }
        const key = arg.slice(2);
        if (argv[i + 1] && !argv[i + 1].startsWith('--')) values[key] = argv[++i];
        else values[key] = true;
    }
    return values;
}

function loadApi() {
    const built = process.env.XPLAT_CODEGEN_ADAPTER
        ? path.resolve(process.env.XPLAT_CODEGEN_ADAPTER)
        : path.join(TOOLING_ROOT, 'dist', 'codegen-api.cjs');
    if (!fs.existsSync(built)) throw new Error('the product adapter is not built; run npm run build in tooling');
    require('./dom-shim.cjs');
    return require(built);
}

function readJson(file) {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function walk(dir, accepts, out = []) {
    if (!fs.existsSync(dir)) return out;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full, accepts, out);
        else if (accepts(full)) out.push(full);
    }
    return out.sort();
}

function changedSamplePaths(base) {
    const output = execFileSync('git', ['diff', '--name-only', '--diff-filter=ACMRD', `${base}...HEAD`, '--', 'samples'], {
        cwd: EXAMPLES_ROOT, encoding: 'utf8',
    });
    return output.split('\n').filter(name => name.endsWith('.json')).map(name => path.resolve(EXAMPLES_ROOT, name));
}

function changedLibraryItems(base) {
    const output = execFileSync('git', ['diff', '--name-only', '--diff-filter=ACMRD', `${base}...HEAD`, '--', 'code-gen-library'], {
        cwd: EXAMPLES_ROOT, encoding: 'utf8',
    });
    const changed = [...new Set(output.split('\n').filter(Boolean).map(name => name.split('/')[1]).filter(Boolean))]
        // A deleted item should disappear from downstream output; it cannot itself be emitted.
        .filter(name => fs.existsSync(path.join(EXAMPLES_ROOT, 'code-gen-library', name)));
    const changes = changedPaths(base);
    const emitterChanged = changes.some(name => name.startsWith('tooling/src/') ||
        name.startsWith('tooling/library-templates/') || name === '.github/workflows/library-validation.yml');
    if (emitterChanged) changed.push('SalesData', 'PropertyEditorInitAggregationsOnViewInit');
    return [...new Set(changed)].sort();
}

function changedPaths(base) {
    const output = execFileSync('git', ['diff', '--name-only', '--diff-filter=ACMRD', `${base}...HEAD`], {
        cwd: EXAMPLES_ROOT, encoding: 'utf8',
    });
    return output.split('\n').filter(Boolean);
}

function exportSourcesFrom(opts) {
    if (!opts['changed-since']) return sourcesFrom(opts);
    const changes = changedPaths(opts['changed-since']);
    // Sample changes can be exported surgically. Generator, template, exclusion, or library
    // changes can alter output for samples whose JSON did not change, so downstream sync must
    // rebuild the complete sample set to avoid leaving stale generated projects behind.
    const affectsGeneratedOutput = changes.some(name =>
        name === 'config.json' || name.startsWith('code-gen-library/') ||
        name.startsWith('editor-templates/') || name.startsWith('tooling/'));
    return affectsGeneratedOutput
        ? walk(path.join(EXAMPLES_ROOT, 'samples'), file => file.endsWith('.json'))
        : changedSamplePaths(opts['changed-since']).filter(fs.existsSync);
}

function buildSourcesFrom(opts) {
    if (opts['impact-manifest']) {
        if (!opts.platform) throw new Error('--impact-manifest requires --platform');
        return readImpactManifest(path.resolve(String(opts['impact-manifest'])), opts.platform, 'testing')
            .filter(change => change.kind !== 'removed')
            .map(change => path.join(EXAMPLES_ROOT, 'samples', change.sample))
            .filter(fs.existsSync);
    }
    if (!opts['changed-since']) return sourcesFrom(opts);
    const changes = changedPaths(opts['changed-since']);
    // Project templates, platform/exclusion configuration, the generator itself, and the product
    // package suite can change every emitted project even when no sample JSON changed. These are
    // deliberately full-suite changes; sharding is applied after this impact set is calculated.
    const affectsEverySample = changes.some(name => name === 'config.json' ||
        name.startsWith('editor-templates/') || name.startsWith('tooling/src/') ||
        name === 'tooling/package.json' || name === 'tooling/package-lock.json');
    if (affectsEverySample) {
        return walk(path.join(EXAMPLES_ROOT, 'samples'), file => file.endsWith('.json'));
    }
    const direct = changedSamplePaths(opts['changed-since']).filter(fs.existsSync);
    const items = changedLibraryItems(opts['changed-since']);
    const impacted = items.length === 0 ? []
        : walk(path.join(EXAMPLES_ROOT, 'samples'), file => file.endsWith('.json')).filter(file => {
        const text = fs.readFileSync(file, 'utf8');
        return items.some(item => text.includes(`"${item}"`));
    });
    return [...new Set([...direct, ...impacted])].sort();
}

function exportChangesFrom(opts) {
    if (!opts['impact-manifest']) return null;
    if (!opts.platform) throw new Error('--impact-manifest requires --platform');
    return readImpactManifest(path.resolve(String(opts['impact-manifest'])), opts.platform, 'emission');
}

function exportSourcesFromImpact(opts) {
    const changes = exportChangesFrom(opts);
    if (changes === null) return null;
    return changes.filter(change => change.kind !== 'removed')
        .map(change => path.join(EXAMPLES_ROOT, 'samples', change.sample))
        .filter(fs.existsSync);
}

/**
 * Whether a sample uses the separately versioned modern Web* component tier.
 *
 * DataGrid and the non-web controls deliberately remain in the required baseline: their canonical
 * names do not start with Web. The tier can still be exercised explicitly with --include-web-grids.
 */
function usesWebComponentTier(file) {
    let found = false;
    (function visit(node) {
        if (found) return;
        if (Array.isArray(node)) { node.forEach(visit); return; }
        if (!node || typeof node !== 'object') return;
        if (typeof node.type === 'string' && /^Web[A-Z]/.test(node.type)) { found = true; return; }
        Object.values(node).forEach(visit);
    })(readJson(file).descriptions);
    return found;
}

function sourcesFrom(opts, includeDeleted = false) {
    if (opts['changed-since']) {
        const paths = changedSamplePaths(opts['changed-since']);
        return includeDeleted ? paths : paths.filter(fs.existsSync);
    }
    const named = opts.source ? String(opts.source).split(',') : [path.join(EXAMPLES_ROOT, 'samples')];
    return named.flatMap(name => {
        const full = path.resolve(name);
        if (!fs.existsSync(full)) throw new Error(`source does not exist: ${full}`);
        return fs.statSync(full).isDirectory() ? walk(full, file => file.endsWith('.json')) : [full];
    });
}

function shardSources(files, opts) {
    const hasIndex = opts['shard-index'] !== undefined;
    const hasTotal = opts['shard-total'] !== undefined;
    if (!hasIndex && !hasTotal) return files;
    if (!hasIndex || !hasTotal) throw new Error('--shard-index and --shard-total must be used together');
    const index = Number(opts['shard-index']);
    const total = Number(opts['shard-total']);
    if (!Number.isInteger(index) || !Number.isInteger(total) || total < 1 || index < 0 || index >= total) {
        throw new Error(`invalid shard ${opts['shard-index']}/${opts['shard-total']}`);
    }
    return files.filter((_, position) => position % total === index);
}

function sampleRelative(file) {
    const samples = path.join(EXAMPLES_ROOT, 'samples');
    const relative = path.relative(samples, file).replace(/\\/g, '/');
    if (relative.startsWith('../') || path.isAbsolute(relative)) throw new Error(`sample is outside ${samples}: ${file}`);
    return relative.replace(/\.json$/, '');
}

function platformConfig(platform) {
    const config = readJson(path.join(EXAMPLES_ROOT, 'config.json'));
    // Uno currently shares WinUI's component/sample support envelope even though its project shell
    // is different. Keep one exclusion list until the two products diverge explicitly in config.
    const configuredPlatform = platform.toLowerCase() === 'uno' ? 'winui' : platform.toLowerCase();
    return config.platforms.filter(one => one.name === 'All' || one.name.toLowerCase() === configuredPlatform);
}

function excluded(file, platform, { testing = false, includeExcluded = false } = {}) {
    if (includeExcluded) return false;
    const relative = `${sampleRelative(file)}.json`.toLowerCase();
    return platformConfig(platform).some(section => (section.exclusions ?? []).some(rule => {
        const candidate = String(rule.path).replace(/\\/g, '/').replace(/^samples\//, '').toLowerCase();
        const matches = candidate.endsWith('/') ? relative.startsWith(candidate) : relative === candidate;
        return matches && !(testing && rule.test === true);
    }));
}

function exportsTo(parsed, platform) {
    if (parsed.export === false) return false;
    if (!Array.isArray(parsed.export)) return true;
    return parsed.export.some(one => String(one).toLowerCase() === platform.toLowerCase());
}

function outputDirectory(outputRoot, sampleFile) {
    return path.join(path.resolve(outputRoot), sampleRelative(sampleFile));
}

function safelyEmpty(dir, outputRoot) {
    const root = path.resolve(outputRoot) + path.sep;
    const target = path.resolve(dir);
    if (!target.startsWith(root)) throw new Error(`refusing to clean a path outside the output root: ${target}`);
    fs.rmSync(target, { recursive: true, force: true });
}

function writeProject(project, destination, { sourceOverlay = false } = {}) {
    for (const [relative, content] of Object.entries(project.files)) {
        if (sourceOverlay && !isUnoSourceFile(relative)) continue;
        const file = path.resolve(destination, relative);
        const boundary = path.resolve(destination) + path.sep;
        if (!file.startsWith(boundary)) throw new Error(`template tried to write outside its sample: ${relative}`);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        const devToolsRoot = process.env.DEV_TOOLS_ROOT;
        let portable = devToolsRoot
            ? String(content).replace(/c:\\work\\dev-tools/gi, devToolsRoot.replace(/\\/g, '/'))
            : content;
        // TypeScript's isolatedModules rejects an empty generated helper as a global script. It is
        // intentionally empty when a sample binds no data; make that valid module intent explicit.
        if (relative.endsWith('.ts') && String(portable).trim() === '') portable = 'export {};\n';
        fs.writeFileSync(file, portable, 'utf8');
    }
}

function isUnoSourceFile(relative) {
    const portable = relative.replace(/\\/g, '/');
    if (portable === 'Sample.xaml') return true;
    if (portable.includes('/') || !portable.endsWith('.cs')) return false;
    return !new Set(['App.xaml.cs', 'MainWindow.xaml.cs']).has(portable);
}

function prepareSourceOverlay(destination, bootstrapFrom) {
    if (!bootstrapFrom) throw new Error('--source-overlay needs --bootstrap-from');
    const bootstrap = path.resolve(bootstrapFrom);
    if (!fs.existsSync(bootstrap)) throw new Error(`overlay bootstrap does not exist: ${bootstrap}`);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.cpSync(bootstrap, destination, { recursive: true });
    // The bootstrap contributes only the platform project shell. Its sample-specific sources are
    // removed before the newly emitted ones are overlaid.
    for (const entry of fs.readdirSync(destination, { withFileTypes: true })) {
        if (!entry.isFile()) continue;
        if (entry.name === 'Sample.xaml' ||
            (entry.name.endsWith('.cs') && !['App.xaml.cs', 'MainPage.xaml.cs', 'GlobalUsings.cs'].includes(entry.name))) {
            fs.rmSync(path.join(destination, entry.name));
        }
    }
}

function writeLibrary(library, destination) {
    fs.mkdirSync(destination, { recursive: true });
    for (const [relative, content] of Object.entries(library.files)) {
        const file = path.resolve(destination, relative);
        const boundary = path.resolve(destination) + path.sep;
        if (!file.startsWith(boundary)) throw new Error(`library tried to write outside its output: ${relative}`);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, content, 'utf8');
    }
    fs.writeFileSync(path.join(destination, library.managerFile ?? 'libraryManager.ts'), library.manager, 'utf8');
}

function verifyProject(project, sample, platform) {
    if (Object.keys(project.files).length === 0) throw new Error(`${sample} emitted no files for ${platform}`);
}

function emitFiles(api, platform, files, output, {
    clean = false, sourceOverlay = false, bootstrapFrom, collectErrors = false,
    testing = false, includeExcluded = false, quiet = false,
} = {}) {
    let emitted = 0, skipped = 0;
    const destinations = [];
    const failures = [];
    for (const file of files) {
        if (excluded(file, platform, { testing, includeExcluded })) { skipped++; continue; }
        try {
            const json = fs.readFileSync(file, 'utf8');
            const parsed = JSON.parse(json);
            if (!exportsTo(parsed, platform)) { skipped++; continue; }
            const destination = outputDirectory(output, file);
            if (clean) safelyEmpty(destination, output);
            if (sourceOverlay) prepareSourceOverlay(destination, bootstrapFrom);
            const project = api.emitProject(json, platform, { examplesRoot: EXAMPLES_ROOT });
            if (project.missingRefs.length) {
                // The live renderer reports these as diagnostics rather than failures. Cross-container
                // lookups (for example a property editor targeting a chart owned elsewhere) are valid
                // and are supplied by the downstream host at runtime.
                console.warn(`[${platform}] ${path.relative(EXAMPLES_ROOT, file)} unresolved refs: ${project.missingRefs.join(', ')}`);
            }
            verifyProject(project, path.relative(EXAMPLES_ROOT, file), platform);
            writeProject(project, destination, { sourceOverlay });
            destinations.push(destination);
            emitted++;
            if (!quiet) {
                console.log(`[${platform}] ${path.relative(EXAMPLES_ROOT, file)} -> ` +
                    `${path.relative(EXAMPLES_ROOT, destination)}`);
            }
        } catch (error) {
            if (!collectErrors) throw error;
            const failure = `${path.relative(EXAMPLES_ROOT, file)}: ${error.message.split('\n')[0]}`;
            failures.push(failure);
            console.error(`[${platform}] ${failure}`);
        }
    }
    console.log(`[${platform}] ${emitted} emitted, ${skipped} excluded, ${failures.length} failed`);
    if (failures.length) throw new Error(`${platform} emission failed:\n${failures.join('\n')}`);
    return destinations;
}

function removeChangedOutputs(opts, output) {
    const impact = exportChangesFrom(opts);
    if (impact !== null && opts.clean) {
        for (const change of impact) safelyEmpty(path.join(path.resolve(output), change.folder), output);
        return;
    }
    if (!opts['changed-since'] || !opts.clean) return;
    // Existing included samples are cleaned immediately before they are rewritten. Here only an
    // upstream deletion should remove a downstream directory; an existing platform-excluded sample
    // may be intentionally maintained by hand and must be left alone.
    for (const file of sourcesFrom(opts, true)) {
        if (!fs.existsSync(file)) safelyEmpty(outputDirectory(output, file), output);
    }
}

const STYLE_COMMON = {
    suppressAutoElementNames: true, suppressNameAttribute: true, omitHandlerSignature: true,
    directAssignment: true, colorNotation: 'hex', pascalCaseColorNames: true,
};
const STYLE_XAML = { ...STYLE_COMMON, indentXamlAttributes: true, omitDimensions: true, selfCloseEmptyElements: true };
const STYLE = {
    Angular: { ...STYLE_COMMON, indentAttributes: true, numericAttributeStyle: 'bare' },
    React: { ...STYLE_COMMON, indentAttributes: true, numericAttributeStyle: 'braced', booleanAttributeStyle: 'braced', selfCloseEmptyElements: true },
    WebComponents: { ...STYLE_COMMON, indentAttributes: true },
    Blazor: { ...STYLE_COMMON, indentAttributes: true, selfCloseEmptyElements: true },
    WPF: STYLE_XAML, WinUI: STYLE_XAML, Uno: STYLE_XAML,
};
const MARKUP_LANG = { Angular: 'html', React: 'tsx', WebComponents: 'html', Blazor: 'razor', WPF: 'xaml', WinUI: 'xaml', Uno: 'xaml' };

function parseFenceAttributes(info) {
    const attrs = {};
    for (const match of info.matchAll(/(\w+)="([^"]*)"/g)) attrs[match[1]] = match[2];
    return attrs;
}

function excludedFromFence(value, platform) {
    const names = String(value ?? '').split(',').map(one => one.trim().toLowerCase());
    const xaml = ['wpf', 'winui', 'uno'].includes(platform.toLowerCase());
    return names.includes(platform.toLowerCase()) || (xaml && names.includes('xaml'));
}

function transformMarkdown(content, platform, api) {
    const definitions = new Map();
    for (const match of content.matchAll(/```json-snippet *([^\n]*)\n([\s\S]*?)```/g)) {
        const attrs = parseFenceAttributes(match[1]);
        if (attrs.id) definitions.set(attrs.id, match[2]);
    }
    const emitter = fenceEmitter({
        api, platform, examplesRoot: EXAMPLES_ROOT, styleDefaults: STYLE[platform],
        knownItem: libraryItemLookup(api, platform, EXAMPLES_ROOT),
        onWarn: message => console.warn(`[${platform}] ${message}`),
    });
    return content.replace(/```json-snippet *([^\n]*)\n([\s\S]*?)```/g, (_all, info, original) => {
        const attrs = parseFenceAttributes(info);
        if (excludedFromFence(attrs.exclude, platform)) return '';
        if (attrs.source) {
            const source = path.join(EXAMPLES_ROOT, 'samples', attrs.source.replace(/^\//, '')) + (attrs.source.endsWith('.json') ? '' : '.json');
            if (!fs.existsSync(source)) throw new Error(`json-snippet source does not exist: ${attrs.source}`);
        }
        const json = attrs.ref ? definitions.get(attrs.ref) : original;
        if (json === undefined) throw new Error(`json-snippet ref names no earlier id: ${attrs.ref}`);
        const emitted = emitter.emitFence(json, attrs);
        if (!emitted.content?.trim()) return '';
        const markup = emitted.channel === 'markup' || emitted.content.trimStart().startsWith('<');
        let result = `\`\`\`${markup ? MARKUP_LANG[platform] : (CODE_FENCE_LANG[platform] ?? 'ts')}\n${emitted.content}\n\`\`\``;
        if (emitted.companion) result += `\n\n\`\`\`${CODE_FENCE_LANG[platform] ?? 'ts'}\n${emitted.companion}\n\`\`\``;
        return result;
    });
}

function outputImpact(api, opts) {
    if (!opts['changed-since'] || !opts.output) {
        throw new Error('impact needs --changed-since and --output');
    }
    const platforms = opts.platform ? String(opts.platform).split(',')
        : readJson(path.join(TOOLING_ROOT, 'xplat-codegen.json')).platforms;
    const mergeBase = execFileSync('git', ['merge-base', String(opts['changed-since']), 'HEAD'], {
        cwd: EXAMPLES_ROOT, encoding: 'utf8',
    }).trim();
    const headSha = execFileSync('git', ['rev-parse', 'HEAD'], {
        cwd: EXAMPLES_ROOT, encoding: 'utf8',
    }).trim();
    const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'xplat-output-impact-'));
    const baseRoot = path.join(workspace, 'base');
    const cli = fileURLToPath(import.meta.url);
    const manifest = { version: 1, base: mergeBase, head: headSha, platforms: {} };
    let completed = false;
    try {
        execFileSync('git', ['clone', '--shared', '--no-checkout', EXAMPLES_ROOT, baseRoot], { stdio: 'inherit' });
        execFileSync('git', ['checkout', '--detach', mergeBase], { cwd: baseRoot, stdio: 'inherit' });
        execFileSync('npm', ['ci', '--no-audit', '--no-fund'], {
            cwd: path.join(baseRoot, 'tooling'), stdio: 'inherit',
        });
        execFileSync('npm', ['run', 'build'], { cwd: path.join(baseRoot, 'tooling'), stdio: 'inherit' });

        for (const platform of platforms) {
            const baseOutput = path.join(workspace, 'output', 'base', platform);
            const headOutput = path.join(workspace, 'output', 'head', platform);
            emitFiles(api, platform,
                walk(path.join(EXAMPLES_ROOT, 'samples'), file => file.endsWith('.json')),
                headOutput, { clean: true, collectErrors: true, testing: true, quiet: true });
            execFileSync(process.execPath, [cli, 'export', `--platform=${platform}`,
                `--source=${path.join(baseRoot, 'samples')}`, `--output=${baseOutput}`,
                '--clean', '--testing', '--quiet'], {
                cwd: EXAMPLES_ROOT,
                stdio: 'inherit',
                env: {
                    ...process.env,
                    XPLAT_EXAMPLES_ROOT: baseRoot,
                    XPLAT_CODEGEN_ADAPTER: path.join(baseRoot, 'tooling', 'dist', 'codegen-api.cjs'),
                },
            });
            const common = {
                baseOutput, headOutput,
                baseSamples: path.join(baseRoot, 'samples'),
                headSamples: path.join(EXAMPLES_ROOT, 'samples'),
            };
            const emissionChanges = compareOutputTrees({
                ...common,
                baseIncluded: emittableSampleNames(baseRoot, platform),
                headIncluded: emittableSampleNames(EXAMPLES_ROOT, platform),
            });
            const testingChanges = compareOutputTrees({
                ...common,
                baseIncluded: emittableSampleNames(baseRoot, platform, { testing: true }),
                headIncluded: emittableSampleNames(EXAMPLES_ROOT, platform, { testing: true }),
            });
            manifest.platforms[platform] = { emissionChanges, testingChanges };
            console.log(`[${platform}] ${testingChanges.length} build impact(s), ` +
                `${emissionChanges.length} downstream emission impact(s)`);
        }
        const output = path.resolve(String(opts.output));
        fs.mkdirSync(path.dirname(output), { recursive: true });
        fs.writeFileSync(output, JSON.stringify(manifest, null, 2) + '\n');
        console.log(`output impact: ${output}`);
        completed = true;
    } finally {
        if (completed) fs.rmSync(workspace, { recursive: true, force: true });
        else console.error(`output-impact evidence retained at ${workspace}`);
    }
}

async function main() {
    const [command = 'help', ...rest] = process.argv.slice(2);
    const opts = argsOf(rest);
    const config = readJson(path.join(TOOLING_ROOT, 'xplat-codegen.json'));
    const api = command === 'help' ? null : loadApi();

    if (command === 'impact') {
        outputImpact(api, opts);
        return;
    }

    if (command === 'export') {
        if (!opts.platform || !opts.output) throw new Error('export needs --platform and --output');
        removeChangedOutputs(opts, opts.output);
        emitFiles(api, opts.platform, exportSourcesFromImpact(opts) ?? exportSourcesFrom(opts), opts.output, {
            clean: opts.clean === true,
            sourceOverlay: opts['source-overlay'] === true,
            bootstrapFrom: opts['bootstrap-from'],
            testing: opts.testing === true,
            quiet: opts.quiet === true,
        });
        return;
    }
    if (command === 'check') {
        const files = buildSourcesFrom(opts);
        const platforms = opts.platform ? String(opts.platform).split(',') : config.platforms;
        const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'xplat-codegen-check-'));
        try {
            for (const platform of platforms) {
                emitFiles(api, platform, files, path.join(temp, platform), {
                    collectErrors: true,
                    testing: true,
                    includeExcluded: opts['include-excluded'] === true,
                    quiet: opts.quiet === true,
                });
            }
        }
        finally { fs.rmSync(temp, { recursive: true, force: true }); }
        return;
    }
    if (command === 'library') {
        if (!opts.platform || !opts.output) throw new Error('library needs --platform and --output');
        const only = opts.only ? String(opts.only).split(',').map(one => one.trim()).filter(Boolean) : undefined;
        const emitted = api.emitLibrary(opts.platform, {
            examplesRoot: EXAMPLES_ROOT,
            templatesRoot: path.join(TOOLING_ROOT, 'library-templates'),
            only,
        });
        if (emitted.problems.length) {
            throw new Error(emitted.problems.map(one => `${one.item}: ${one.reason}`).join('\n'));
        }
        const output = path.resolve(opts.output);
        if (opts.clean === true) safelyEmpty(output, path.dirname(output));
        writeLibrary(emitted, output);
        console.log(`[${opts.platform}] library: ${emitted.dataItems} data item(s), ${emitted.handlerItems} handler/template item(s), ${Object.keys(emitted.files).length} file(s)`);
        return;
    }
    if (command === 'library-check') {
        if (!opts.platform) throw new Error('library-check needs --platform');
        let only = opts.all === true ? undefined
            : opts.only ? String(opts.only).split(',').map(one => one.trim()).filter(Boolean)
            : opts['changed-since'] ? changedLibraryItems(opts['changed-since']) : undefined;
        const issueFile = path.join(TOOLING_ROOT, 'library-build-known-issues.json');
        const knownIssues = fs.existsSync(issueFile) ? JSON.parse(fs.readFileSync(issueFile, 'utf8')) : [];
        const excluded = knownIssues.filter(one => one.platform === opts.platform).map(one => one.item);
        if (Array.isArray(only)) only = only.filter(item => !excluded.includes(item));
        if (Array.isArray(only) && only.length === 0) {
            console.log(`[${opts.platform}] no changed non-quarantined library items`);
            return;
        }
        const output = path.join(TOOLING_ROOT, '.generated', 'library', opts.platform);
        safelyEmpty(output, path.dirname(output));
        const emitted = api.emitLibrary(opts.platform, {
            examplesRoot: EXAMPLES_ROOT,
            templatesRoot: path.join(TOOLING_ROOT, 'library-templates'),
            only,
            exclude: excluded,
        });
        if (emitted.problems.length) throw new Error(emitted.problems.map(one => `${one.item}: ${one.reason}`).join('\n'));
        writeLibrary(emitted, output);
        if (opts.platform === 'WinUI' || opts.platform === 'Uno') {
            console.log(`[${opts.platform}] emitted ${Object.keys(emitted.files).length} library file(s); compilation runs on the private Windows tier`);
            return;
        }
        if (opts.platform === 'Blazor') {
            execFileSync('dotnet', ['build', path.join(output, 'BlazorLibrary.csproj'),
                '--configuration', 'Release', '--nologo'], { cwd: output, stdio: 'inherit' });
        } else {
            execFileSync(process.execPath, [path.join(TOOLING_ROOT, 'node_modules', 'typescript', 'bin', 'tsc'),
                '--noEmit', '--skipLibCheck', '--strict', 'false', '--moduleResolution', 'bundler',
                '--module', 'preserve', '--target', 'es2022', path.join(output, 'libraryManager.ts')],
                { cwd: TOOLING_ROOT, stdio: 'inherit' });
        }
        console.log(`[${opts.platform}] compiled ${Object.keys(emitted.files).length} emitted library file(s)`);
        return;
    }
    if (command === 'sample-build') {
        if (!opts.platform) throw new Error('sample-build needs --platform');
        if (opts.platform === 'Uno') {
            throw new Error('Uno compilation needs the genuine uno-samples project shell; use the self-hosted Uno workflow');
        }
        let files = buildSourcesFrom(opts);
        if (opts['include-web-grids'] !== true) files = files.filter(file => !usesWebComponentTier(file));
        files = shardSources(files, opts);
        if (opts.limit) files = files.slice(0, Number(opts.limit));
        if (files.length === 0) {
            console.log(`[${opts.platform}] no samples in this selection`);
            return;
        }
        // A fresh explicit output keeps local diagnostics isolated from prior generated evidence.
        // CI uses the stable workspace-local default because its checkout is disposable.
        const output = opts.output
            ? path.resolve(String(opts.output))
            : path.join(TOOLING_ROOT, '.generated', 'samples', opts.platform);
        safelyEmpty(output, path.dirname(output));
        const destinations = emitFiles(api, opts.platform, files, output, {
            clean: true,
            testing: true,
            includeExcluded: opts['include-excluded'] === true,
        });
        let sharedNodeModules = null;
        if (!['Blazor', 'WPF', 'WinUI', 'Uno'].includes(opts.platform) && destinations.length > 0) {
            const shared = { name: 'xplat-emitted-sample-build', private: true, dependencies: {}, devDependencies: {} };
            for (const destination of destinations) {
                const manifest = readJson(path.join(destination, 'package.json'));
                for (const group of ['dependencies', 'devDependencies']) {
                    for (const [name, version] of Object.entries(manifest[group] ?? {})) {
                        const previous = shared[group][name];
                        if (previous !== undefined && previous !== version) {
                            throw new Error(`${opts.platform} sample manifests disagree on ${name}: ${previous} and ${version}`);
                        }
                        shared[group][name] = version;
                    }
                }
            }
            const installRoot = path.join(output, '.shared-install');
            fs.mkdirSync(installRoot, { recursive: true });
            fs.writeFileSync(path.join(installRoot, 'package.json'), JSON.stringify(shared, null, 2) + '\n');
            execFileSync('npm', ['install', '--no-audit', '--no-fund', '--legacy-peer-deps'], {
                cwd: installRoot, stdio: 'inherit',
            });
            sharedNodeModules = path.join(installRoot, 'node_modules');
        }
        for (const destination of destinations) {
            console.log(`[${opts.platform}] building ${path.relative(output, destination)}`);
            if (['Blazor', 'WPF', 'WinUI', 'Uno'].includes(opts.platform)) {
                execFileSync('dotnet', ['build', '--configuration', 'Release', '--nologo'], { cwd: destination, stdio: 'inherit' });
            } else {
                // The shard has one superset install. Each sample still compiles in its own project,
                // against precisely the package versions its manifest requested.
                fs.symlinkSync(sharedNodeModules, path.join(destination, 'node_modules'),
                    process.platform === 'win32' ? 'junction' : 'dir');
                if (opts.platform === 'WebComponents') {
                    // The checked-in template still spells webpack 4's `--env.NAME=value` form;
                    // webpack 5 takes `--env NAME=value`. Invoke the same production config with
                    // its current CLI spelling so this checks generated code rather than old CLI syntax.
                    execFileSync('npx', ['webpack', '--env', 'NODE_ENV=production', '--mode', 'production',
                        '--config', './webpack.config.js', '--bail'], {
                        cwd: destination, stdio: 'inherit', env: { ...process.env, NODE_ENV: 'production' },
                    });
                } else if (opts.platform === 'Angular') {
                    // The legacy Angular editor template's production size budget predates the
                    // current product bundle. Development still runs the Angular compiler and
                    // bundler, which is the contract this validation is intended to enforce.
                    execFileSync('npx', ['ng', 'build', '--configuration', 'development'], {
                        cwd: destination, stdio: 'inherit',
                    });
                } else {
                    execFileSync('npm', ['run', 'build'], { cwd: destination, stdio: 'inherit' });
                }
            }
        }
        console.log(`[${opts.platform}] ${destinations.length} emitted sample project(s) compiled`);
        return;
    }
    if (command === 'snippets') {
        if (!opts.source || !opts.output) throw new Error('snippets needs --source and --output');
        const source = path.resolve(opts.source), output = path.resolve(opts.output);
        const files = fs.statSync(source).isDirectory()
            ? walk(source, file => /\.mdx?$/.test(file)) : [source];
        const platforms = opts.platform ? String(opts.platform).split(',') : config.platforms;
        for (const platform of platforms) for (const file of files) {
            const relative = fs.statSync(source).isDirectory() ? path.relative(source, file) : path.basename(file);
            const destination = path.join(output, platform, relative);
            fs.mkdirSync(path.dirname(destination), { recursive: true });
            fs.writeFileSync(destination, transformMarkdown(fs.readFileSync(file, 'utf8'), platform, api), 'utf8');
            console.log(`[${platform}] ${file} -> ${destination}`);
        }
        return;
    }
    console.log('Usage:\n  xplat-codegen impact --changed-since REF --output FILE [--platform A,B]\n  xplat-codegen export --platform NAME --source PATH --output PATH [--clean] [--impact-manifest FILE]\n  xplat-codegen check [--platform A,B] [--include-excluded]\n  xplat-codegen sample-build --platform NAME [--impact-manifest FILE | --source PATH] [--output PATH] [--limit N] [--shard-index N --shard-total N] [--include-excluded] [--include-web-grids]\n  xplat-codegen library --platform NAME --output PATH [--only A,B] [--clean]\n  xplat-codegen library-check --platform NAME [--changed-since REF | --only A,B | --all]\n  xplat-codegen snippets --source PATH --output PATH [--platform A,B]');
}

main().catch(error => fail(error.stack ?? error.message));
