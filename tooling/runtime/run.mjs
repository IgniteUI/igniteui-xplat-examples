/**
 * Every json-snippet the documentation publishes, loaded into chromium with the real component renderer,
 * checked for errors.
 *
 * The emission checks prove a definition produces code. They cannot prove the component it describes
 * works: a property can be spelled right, typed right, accepted by the schema, and still leave a
 * component throwing when a browser builds it. This runs the other half — the real packages, the real
 * renderer, one page, every definition a fence states.
 *
 * A definition passes when the renderer reports no errors, the browser throws nothing, the renderer goes
 * idle, flushes, settles its animations, and something is actually drawn.
 *
 * Usage:
 *   node run.mjs                          # every fence in both locales
 *   node run.mjs --lang=en                # one locale
 *   node run.mjs --filter=geo-map         # only pages whose path contains this
 *   node run.mjs --limit=20 --headed      # a look, with a visible browser
 *   node run.mjs --sample=<file.json>     # a definition from a file, for cutting a failure down
 *   node run.mjs --samples                # the examples repository's samples instead of the fences
 *
 * The samples mode is what igniteui-xplat-examples should run over its own samples; it lives here
 * because it is the same harness, and moving it is a move rather than a rewrite.
 *
 * The examples checkout is resolved by ../lib/snippet-toolchain.mjs: a peer checkout, XPLAT_EXAMPLES, or
 * a clone of the examples branch matching the branch under check. It is needed either way — a fence
 * binds to the same code generation library the samples do.
 */

import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';
import {
    resolveExamplesRoot, resolveItemTemplates, mdxFilesUnder, fencesOf, XPLAT_ROOT,
} from './toolchain.mjs';
import { fractionNotWhite } from './png.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const flag = (name, fallback = null) => {
    const found = args.find(a => a.startsWith(`--${name}=`));
    return found === undefined ? fallback : found.slice(name.length + 3);
};
const PACKAGES = flag('packages', 'registry');
// The fences are what this repository publishes. The samples are the examples repository's to check.
const FROM_SAMPLES = args.includes('--samples');
const LANGS = (flag('lang', 'en,jp')).split(',').map(s => s.trim()).filter(Boolean);
const FILTER = flag('filter');
const CHANGED_SINCE = flag('changed-since');
const LIMIT = Number(flag('limit', '0')) || 0;
const TIMEOUT = Number(flag('timeout', '8000'));
const HEADED = args.includes('--headed');
const KEEP_OPEN = args.includes('--keep-open');
const VERBOSE = args.includes('--verbose');
// PR checks cover every sample the repository says Web Components exports. Deliberately excluded or
// export:false definitions remain available for product-development audits without making the public
// supported-sample contract permanently red.
const INCLUDE_UNSUPPORTED = args.includes('--include-unsupported');
// Test platform-excluded samples as an explicit audit. Individual exclusion rules may also opt in
// with `test: true`, keeping emission routing and validation coverage independent.
const INCLUDE_EXCLUDED = args.includes('--include-excluded');
// Exact, reviewed runtime failures in the currently pinned product beta. They stay visible in source
// control and can be re-audited explicitly, while new failures still make the required PR check fail.
const INCLUDE_KNOWN_ISSUES = args.includes('--include-known-issues');
// Modern WebGrid definitions use a different component stack and are an additional diagnostic tier.
// DataGrid and every canonical type without the Web prefix remain part of the required baseline.
const INCLUDE_WEB_GRIDS = args.includes('--include-web-grids');
// Whether to look at what was drawn, and how little counts as nothing. A sample that leaves the plate
// untouched has rendered nothing; a stray pixel or two is not evidence of anything.
const SHOTS = !args.includes('--no-shots');
const BLANK = Number(flag('blank', '0.0005'));
const SHOT_DIR = flag('shots', path.join(HERE, 'blank-shots'));

// What a load resolves to when the page never answers at all.
const WEDGED = Symbol('wedged');

const examples = resolveExamplesRoot();
const samplesDir = path.join(examples, 'samples');
if (!fs.existsSync(samplesDir)) {
    console.error(`no samples directory in the examples checkout: ${samplesDir}`);
    process.exit(2);
}

/* ------------------------------------------------------------------ packages */

/**
 * The packages the harness imports.
 *
 * The registry is the default because that is what a reader of the documentation installs, and a
 * check against anything else can pass while the published packages are broken. A local directory is
 * for checking a build before it ships; each entry has to be an installable package folder, which is
 * what the build produces — a folder of loose output with no package.json cannot be resolved by
 * anything, and saying so beats a hundred import failures.
 */
function ensurePackages() {
    const modules = path.join(HERE, 'node_modules');
    if (!fs.existsSync(modules)) {
        console.log('[runtime] installing the harness dependencies');
        run('npm', ['install', '--no-audit', '--no-fund'], HERE);
    }
    if (PACKAGES === 'registry') return;

    const dir = path.resolve(PACKAGES);
    if (!fs.existsSync(dir)) {
        console.error(`--packages names a directory that does not exist: ${dir}`);
        process.exit(2);
    }
    const names = fs.readdirSync(dir).filter(name => name.startsWith('igniteui-webcomponents-'));
    if (names.length === 0) {
        console.error(`no igniteui-webcomponents-* packages in ${dir}`);
        process.exit(2);
    }
    const missing = names.filter(name => !fs.existsSync(path.join(dir, name, 'package.json')));
    if (missing.length > 0) {
        console.error(`these are not installable packages — no package.json in:\n` +
                      missing.map(name => `  ${path.join(dir, name)}`).join('\n') + '\n\n' +
                      'Point --packages at the output of the packaging step, not at intermediate ' +
                      'build output.');
        process.exit(2);
    }
    // Copied over the installed ones rather than symlinked: a symlink would have the local package
    // resolve its own dependencies from outside this project, and copying leaves the source
    // untouched. node_modules is disposable either way.
    for (const name of names) {
        const target = path.join(modules, name);
        fs.rmSync(target, { recursive: true, force: true });
        fs.cpSync(path.join(dir, name), target, { recursive: true });
    }
    console.log(`[runtime] using ${names.length} locally built package(s) from ${dir}`);
}

function ensureChromium() {
    // CI installs Chromium (and its OS dependencies) explicitly. This flag also keeps an offline
    // local run from asking npx to contact the registry after the browser is already present.
    if (args.includes('--skip-browser-install')) return;
    // Playwright downloads browsers on demand and is quiet about having none, which surfaces as a
    // launch failure with a message about executables. Asking for it up front makes the wait
    // explainable, and it is a no-op once installed.
    console.log('[runtime] making sure chromium is available');
    run('npx', ['playwright', 'install', 'chromium'], HERE, { quiet: !VERBOSE });
}

function run(command, argv, cwd, { quiet = false } = {}) {
    execFileSync(command, argv, { cwd, stdio: quiet ? ['ignore', 'ignore', 'inherit'] : 'inherit' });
}

/* ------------------------------------------------------- the sample library */

/**
 * The code generation library, emitted for Web Components.
 *
 * Through the product's own emission — the same code generating renderer the library project emitter
 * drives, the same per-item templates, the same lookup shape it writes — rather than by reading the
 * library folder and deciding for itself which files are data. A second implementation gets the easy
 * items right, is wrong about every item whose content the renderer transforms, and drifts from the
 * real one the moment either changes.
 *
 * Only the items the selected samples actually name are emitted. That keeps the browser's module graph
 * to what is under check, and keeps a sample for a component this harness does not install from
 * failing every other sample by breaking the lookup they all import.
 */
function emitLibrary(api, names) {
    const generated = path.join(HERE, 'generated');
    fs.rmSync(generated, { recursive: true, force: true });
    fs.mkdirSync(generated, { recursive: true });

    const emitted = api.emitLibrary('WebComponents', {
        examplesRoot: examples,
        // The item templates a library is emitted through: dev-tools when there is a checkout,
        // this repository's copy otherwise, which is every run in CI.
        templatesRoot: resolveItemTemplates(),
        only: [...names].sort(),
        // Per item, from the samples themselves, the way the library project emitter's sample analyzer
        // builds it: a sample that declares skipAlterDataCasing has bound something that cannot be
        // re-cased, so its data keeps the casing it was authored in.
        skipAlterDataCasing: itemsThatKeepTheirCasing(),
    });

    // An item importing a package this harness does not install cannot be part of the lookup: every
    // item is imported by it, so one unresolvable import stops the page loading at all rather than
    // failing the samples that needed that item. Checked here, in node, because the alternative is
    // finding out from a bundler error with the whole run already lost.
    const unavailable = [];
    const usable = {};
    for (const [name, content] of Object.entries(emitted.files)) {
        const missing = unresolvableImports(content);
        if (missing.length > 0) {
            unavailable.push({ item: name.replace(/\.ts$/, ''), missing });
            continue;
        }
        usable[name] = content;
    }

    for (const [name, content] of Object.entries(usable)) {
        fs.writeFileSync(path.join(generated, name), content, 'utf8');
    }
    const dropped = new Set(unavailable.map(entry => entry.item));
    fs.writeFileSync(path.join(generated, 'libraryManager.ts'),
        withoutItems(emitted.manager, dropped), 'utf8');
    return { ...emitted, unavailable };
}

/** The bare module specifiers a file imports that nothing here can resolve. */
function unresolvableImports(content) {
    const missing = new Set();
    for (const match of content.matchAll(/from\s+['"]([^'".][^'"]*)['"]/g)) {
        const specifier = match[1];
        if (specifier.startsWith('.') || specifier.startsWith('/')) continue;
        try {
            import.meta.resolve(specifier, `file://${path.join(HERE, 'harness.js')}`);
        } catch {
            missing.add(specifier);
        }
    }
    return [...missing];
}

/**
 * The lookup without the items whose files were dropped — both the import and the registration, since
 * either one alone would not compile.
 */
function withoutItems(manager, dropped) {
    if (dropped.size === 0) return manager;
    return manager.split('\n').filter(line => {
        for (const name of dropped) {
            if (line.includes(`from './${name}'`)) return false;
            if (line.includes(`this._items.set("${name}"`)) return false;
            if (line.includes(`this._requiredStyles.add("${name}"`)) return false;
        }
        return true;
    }).join('\n');
}

/**
 * The data items whose casing must be left alone, from the samples that bind them.
 *
 * The same rule the library project emitter's sample analyzer applies: a sample declaring
 * skipAlterDataCasing has bound something the emitter cannot safely re-case — a member path buried in a
 * filter string, or data built in code — so every data item it binds keeps the casing it was authored
 * in. An item bound by samples that disagree is reported, as the analyzer reports it.
 */
let casingDisagreements = new Set();

function itemsThatKeepTheirCasing() {
    const state = new Map();
    const disagreed = new Set();
    for (const [name, sample] of parsed) {
        if (sample.export === false) continue;
        const keep = sample.skipAlterDataCasing === true;
        for (const ref of referenceNamesIn(sample)) {
            if (state.has(ref) && state.get(ref) !== keep) disagreed.add(ref);
            else if (!state.has(ref)) state.set(ref, keep);
        }
    }
    casingDisagreements = disagreed;
    return [...state].filter(([, keep]) => keep).map(([ref]) => ref);
}

/**
 * The modern web components a sample names, by the convention that they are prefixed "Web".
 *
 * WebGrid, WebPivotGrid, WebTreeGrid and their parts form the opt-in modern-grid tier. DataGrid does
 * not use this prefix and therefore cannot accidentally be removed from the required baseline here.
 */
function webComponentTypesIn(sample) {
    const found = new Set();
    (function walk(node) {
        if (Array.isArray(node)) { node.forEach(walk); return; }
        if (!node || typeof node !== 'object') return;
        if (typeof node.type === 'string' && /^Web[A-Z]/.test(node.type)) found.add(node.type);
        for (const value of Object.values(node)) {
            if (value && typeof value === 'object') walk(value);
        }
    })(sample.descriptions ?? sample);
    return [...found];
}

/**
 * The names a set of samples refer to.
 *
 * Read off the JSON: any string property whose name ends in "Ref" is a reference. Some name an element
 * inside the same description, which the renderer resolves itself and the library simply does not
 * have — asking for those costs nothing.
 */
function referenceNamesIn(node, found = new Set()) {
    if (Array.isArray(node)) {
        for (const item of node) referenceNamesIn(item, found);
        return found;
    }
    if (!node || typeof node !== 'object') return found;
    for (const [key, value] of Object.entries(node)) {
        if (key.endsWith('Ref') && typeof value === 'string') found.add(value);
        else if (typeof value === 'object') referenceNamesIn(value, found);
    }
    // A sample can also list the handlers it runs at start-up by name.
    for (const list of ['onInit', 'onViewInit']) {
        const value = node[list];
        if (typeof value === 'string') found.add(value);
        else if (Array.isArray(value)) for (const one of value) {
            if (typeof one === 'string') found.add(one);
        }
    }
    return found;
}

/** The packages the harness imports, read from its own dependencies. */
const PACKAGE_NAMES = Object.keys(
    JSON.parse(fs.readFileSync(path.join(HERE, 'package.json'), 'utf8')).dependencies ?? {});

/* --------------------------------------------------------------------- samples */

/**
 * Sample files named outright, from anywhere.
 *
 * For working out what in a sample is wrong: the answer is usually found by loading a cut-down copy of
 * it, and a cut-down copy does not belong in the examples repository. Named files are loaded instead of
 * the set, not as well.
 */
function namedSamples() {
    const given = args.filter(a => a.startsWith('--sample=')).map(a => a.slice(9));
    return given.map(file => path.resolve(file));
}

/**
 * Every definition the documentation states, as a case each.
 *
 * A fence is the unit the documentation publishes, so it is the unit checked. An array body states
 * several definitions and each is loaded on its own. A `ref=` fence restates a definition from further up
 * the page and is skipped — the definition itself is already a case.
 *
 * Casing and animation come from the sample the fence names, unless the fence says otherwise: those two
 * belong to the sample as a whole, and a fence emitting from it inherits them.
 */
function fenceCases() {
    const cases = [];
    for (const lang of LANGS) {
        const dir = path.join(XPLAT_ROOT, 'src', 'content', lang, 'components');
        if (!fs.existsSync(dir)) continue;
        for (const file of mdxFilesUnder(dir)) {
            const text = fs.readFileSync(file, 'utf8');
            if (!text.includes('```json-snippet')) continue;
            const where = path.relative(path.join(XPLAT_ROOT, 'src', 'content'), file);
            if (FILTER && !where.includes(FILTER)) continue;
            for (const fence of fencesOf(text)) {
                if (fence.attrs.ref || !fence.body.trim()) continue;
                let parsed;
                try {
                    parsed = JSON.parse(fence.body);
                } catch {
                    continue;      // the schema check reports this, with the reason
                }
                const definitions = Array.isArray(parsed) ? parsed : [parsed];
                definitions.forEach((definition, i) => {
                    const name = `${where}:${fence.line}` +
                        (definitions.length > 1 ? `#${i + 1}` : '');
                    cases.push({
                        name,
                        sample: loadable(definition, fence.attrs),
                        // A fence that publishes one library item's code states only enough of a page
                        // for the emitter to reach that item: the markup the item works against stays
                        // on the fence that publishes the whole thing. Its start-up handlers are not
                        // run here, because they would be run against a page deliberately left out.
                        publishesOneItem: fence.attrs.item !== undefined,
                    });
                });
            }
        }
    }
    return LIMIT > 0 ? cases.slice(0, LIMIT) : cases;
}

/**
 * A definition in the shape a live renderer can load, with the flags that belong to the page it is on.
 *
 * A fence states a description on its own — no wrapper, because a topic is showing a component and not a
 * page. A renderer takes a map of descriptions keyed by container, so a bare one is put under "content"
 * here. (The renderer learned to do that itself as part of this work, but a published one has not, and
 * this check exists to run against published packages.)
 *
 * The two flags that are the page's rather than the component's go on the wrapper, which is where the
 * renderer reads them.
 */
function loadable(definition, attrs) {
    const bare = definition && typeof definition === 'object' && definition.descriptions === undefined;
    const root = bare
        ? { descriptions: { content: definition } }
        : { ...definition };

    const fromSample = sampleFlags(attrs.source);
    for (const flag of ['skipAlterDataCasing', 'hasAnimations']) {
        // The fence itself wins, then whatever it already states, then the sample it emits from.
        const fromFence = attrs[flag] === undefined ? undefined : attrs[flag] === 'true';
        const stated = bare ? definition[flag] : definition[flag];
        const value = fromFence !== undefined ? fromFence
            : stated !== undefined ? stated
            : fromSample[flag];
        if (value !== undefined) root[flag] = value;
        if (bare && stated !== undefined) delete root.descriptions.content[flag];
    }

    // Animation is inferred when nothing says either way, by the same rules the components have: some
    // animate on their own, and the rest animate when a transition is asked for. A definition that
    // animates and is not waited for is torn down mid-animation, which is how a tree map ends up being
    // driven after its rendering context has gone.
    if (root.hasAnimations === undefined && animates(root.descriptions)) root.hasAnimations = true;
    return root;
}

/** What the sample a fence names says about casing and animation. */
function sampleFlags(source) {
    if (!source) return {};
    const file = path.join(examples, 'samples', source.replace(/^\//, '') + '.json');
    if (!fs.existsSync(file)) return {};
    try {
        const sample = JSON.parse(fs.readFileSync(file, 'utf8'));
        return { skipAlterDataCasing: sample.skipAlterDataCasing, hasAnimations: sample.hasAnimations };
    } catch {
        return {};
    }
}

/** Whether a definition binds anything to draw from. */
function bindsData(node) {
    if (Array.isArray(node)) return node.some(bindsData);
    if (!node || typeof node !== 'object') return false;
    for (const [key, value] of Object.entries(node)) {
        if (/^data[A-Za-z]*Ref$/.test(key) && typeof value === 'string') return true;
        if ((key === 'dataSource' || key === 'itemsSource') && value != null) return true;
        if (typeof value === 'object' && bindsData(value)) return true;
    }
    return false;
}

/** Whether anything described here animates unless told not to. */
const ANIMATES_BY_DEFAULT = new Set([
    'Treemap', 'CategoryChart', 'FinancialChart', 'DataPieChart', 'PieChart']);

function animates(node) {
    if (Array.isArray(node)) return node.some(animates);
    if (!node || typeof node !== 'object') return false;
    if (typeof node.type === 'string' && ANIMATES_BY_DEFAULT.has(node.type) &&
        node.isTransitionInEnabled !== false && node.transitionInDuration !== 0) {
        return true;
    }
    if (node.isTransitionInEnabled === true || node.isTransitionAnimationEnabled === true) return true;
    for (const key of ['transitionDuration', 'transitionInDuration']) {
        if (typeof node[key] === 'number' && node[key] > 0) return true;
    }
    return Object.values(node).some(value => typeof value === 'object' && animates(value));
}

function samples() {
    const found = [];
    (function walk(dir) {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            const full = path.join(dir, entry.name);
            if (entry.isDirectory()) walk(full);
            else if (entry.name.endsWith('.json')) found.push(full);
        }
    })(samplesDir);
    let changed = null;
    if (CHANGED_SINCE) {
        const allOutput = execFileSync('git', ['diff', '--name-only', '--diff-filter=ACMRD',
            `${CHANGED_SINCE}...HEAD`], { cwd: examples, encoding: 'utf8' });
        const allChanges = allOutput.split('\n').filter(Boolean);
        const affectsEveryRuntimeSample = allChanges.some(name => name === 'config.json' ||
            name.startsWith('tooling/runtime/') || name.startsWith('tooling/src/') ||
            name === 'tooling/package.json' || name === 'tooling/package-lock.json');
        const output = execFileSync('git', ['diff', '--name-only', '--diff-filter=ACMR',
            `${CHANGED_SINCE}...HEAD`, '--', 'samples'], { cwd: examples, encoding: 'utf8' });
        changed = affectsEveryRuntimeSample ? null : new Set(output.split('\n')
            .filter(name => name.endsWith('.json')).map(name => name.replace(/^samples\//, '')));
        const libraryOutput = execFileSync('git', ['diff', '--name-only', '--diff-filter=ACMRD',
            `${CHANGED_SINCE}...HEAD`, '--', 'code-gen-library'], { cwd: examples, encoding: 'utf8' });
        const items = [...new Set(libraryOutput.split('\n').filter(Boolean)
            .map(name => name.split('/')[1]).filter(Boolean))];
        if (changed !== null && items.length > 0) {
            for (const file of found) {
                const text = fs.readFileSync(file, 'utf8');
                if (items.some(item => text.includes(`"${item}"`))) {
                    changed.add(path.relative(samplesDir, file).split(path.sep).join('/'));
                }
            }
        }
    }
    const relative = found
        .map(file => path.relative(samplesDir, file).split(path.sep).join('/'))
        .filter(name => changed === null || changed.has(name))
        .filter(name => !FILTER || name.includes(FILTER))
        .sort();
    const configured = JSON.parse(fs.readFileSync(path.join(examples, 'config.json'), 'utf8'));
    const exclusions = configured.platforms
        .filter(one => one.name === 'All' || one.name === 'WebComponents')
        .flatMap(one => one.exclusions ?? [])
        .map(one => ({
            path: String(one.path).replace(/\\/g, '/').replace(/^samples\//, '').toLowerCase(),
            test: one.test === true,
        }));
    let unsupported = 0;
    const supported = relative.filter(name => {
        if (INCLUDE_UNSUPPORTED) return true;
        const sample = JSON.parse(fs.readFileSync(path.join(samplesDir, name), 'utf8'));
        const exportsHere = sample.export !== false && (!Array.isArray(sample.export) ||
            sample.export.some(one => String(one).toLowerCase() === 'webcomponents'));
        const lower = name.toLowerCase();
        const matchedExclusions = exclusions.filter(rule => rule.path.endsWith('/')
            ? lower.startsWith(rule.path) : lower === rule.path);
        const excludedHere = matchedExclusions.length > 0;
        const optedIntoTests = matchedExclusions.some(rule => rule.test);
        const runnable = exportsHere && (!excludedHere || optedIntoTests || INCLUDE_EXCLUDED);
        if (!runnable) unsupported++;
        return runnable;
    });
    if (unsupported > 0) {
        console.log(`[runtime] ${unsupported} deliberately unsupported/non-exported sample(s) skipped; ` +
            'use --include-unsupported for a product-development audit');
    }
    const knownIssues = JSON.parse(fs.readFileSync(path.join(HERE, 'known-issues.json'), 'utf8'));
    const knownNames = new Set(knownIssues.map(one => one.sample));
    const runnable = INCLUDE_KNOWN_ISSUES
        ? supported
        : supported.filter(name => !knownNames.has(name));
    const quarantined = supported.length - runnable.length;
    if (quarantined > 0) {
        console.log(`[runtime] ${quarantined} known product-beta runtime issue(s) quarantined; ` +
            'use --include-known-issues to re-audit them');
    }
    return LIMIT > 0 ? runnable.slice(0, LIMIT) : runnable;
}

/* ------------------------------------------------------------------------ run */

ensurePackages();
ensureChromium();

// What this run loads: the definitions the documentation states, or — for the examples repository — its
// samples, or single files named outright while cutting a failure down.
const named = namedSamples();
const cases = named.length > 0
    ? named.map(file => ({ name: file, sample: loadable(JSON.parse(fs.readFileSync(file, 'utf8')), {}) }))
    : FROM_SAMPLES
        ? samples().map(name => ({
            name,
            sample: JSON.parse(fs.readFileSync(path.join(samplesDir, name), 'utf8')),
        }))
        : fenceCases();

if (cases.length === 0) {
    if (CHANGED_SINCE) {
        console.log(`[runtime] no changed samples since ${CHANGED_SINCE}`);
        process.exit(0);
    }
    console.error(`nothing to load${FILTER ? ` for --filter=${FILTER}` : ''}`);
    process.exit(2);
}

// A sample that starts an animation without declaring it is not safe to load in a shared host: CR is
// never told to wait, cleanup happens mid-transition, and every later sample inherits a non-idle global
// animation counter. Report the producer directly instead of hundreds of misleading downstream timeouts.
const missingAnimationFlags = cases.filter(one => one.sample.hasAnimations === undefined &&
    animates(one.sample.descriptions ?? one.sample));
if (missingAnimationFlags.length > 0) {
    console.error('[runtime] animated sample(s) must declare "hasAnimations": true:');
    for (const one of missingAnimationFlags) console.error(`  ${one.name}`);
    process.exit(1);
}
console.log(`[runtime] ${cases.length} ${FROM_SAMPLES || named.length > 0 ? 'sample' : 'definition'}(s) ` +
            `to load`);

const wanted = new Set();
const parsed = new Map();
/** Fences that publish one library item's code, whose definition is not a whole page. */
const itemExcerpts = new Set();
const notExported = [];
for (const one of cases) {
    // A sample marked as not exported is still checked. The flag is not a statement that it is wrong —
    // some are waiting to be turned on, and a new one cloned from an old one inherits it — but it does
    // say it has probably never run in a browser, which is worth knowing beside a failure.
    if (one.sample.export === false) notExported.push(one.name);
    parsed.set(one.name, one.sample);
    if (one.publishesOneItem) itemExcerpts.add(one.name);
    referenceNamesIn(one.sample, wanted);
}
const neverExported = new Set(notExported);
if (notExported.length > 0) {
    console.log(`[runtime] ${notExported.length} sample(s) are marked as not exported — checked anyway, ` +
                `and noted as such if they fail`);
}

const { loadSnippetApi } = await import('./toolchain.mjs');
const library = emitLibrary(loadSnippetApi(), wanted);
console.log(`[runtime] emitted ${library.dataItems} data item(s) and ${library.handlerItems} ` +
            `handler item(s) for what they bind to`);
// A sample binding to one of these is not checked, and is reported as such rather than failed. The
// packages in question are the ones the documentation this repository builds does not cover — the
// modern web grids version on their own line — and a check that fails over what it does not install
// says nothing about what it does.
const uncovered = new Set(library.unavailable.map(entry => entry.item));
if (uncovered.size > 0) {
    const packages = new Set(library.unavailable.flatMap(entry => entry.missing));
    console.log(`[runtime] ${uncovered.size} library item(s) need package(s) this harness does not ` +
                `install: ${[...packages].join(', ')}`);
}
// Reported here rather than while the map is built: most references are to elements inside a
// description — a chart naming its own axis — and only the library knows which names are its items.
const notItems = new Set(library.problems
    .filter(p => p.reason === 'no such library item').map(p => p.item));
const realDisagreements = [...casingDisagreements].filter(name => !notItems.has(name));
if (realDisagreements.length > 0) {
    console.log(`[runtime] ${realDisagreements.length} data item(s) are bound by samples that disagree ` +
                `about skipAlterDataCasing: ${realDisagreements.slice(0, 6).join(', ')}`);
}
const realProblems = library.problems.filter(p => p.reason !== 'no such library item');
if (realProblems.length > 0) {
    console.log(`[runtime] ${realProblems.length} library item(s) emitted nothing:`);
    for (const problem of realProblems.slice(0, 10)) {
        console.log(`  ${problem.item}: ${problem.reason}`);
    }
}

const { createServer } = await import('vite');
const { chromium } = await import('playwright');

const server = await createServer({
    root: HERE,
    configFile: false,
    logLevel: VERBOSE ? 'info' : 'error',
    server: {
        // The data items live in the examples checkout, outside this project.
        fs: { allow: [HERE, examples], strict: false },
        port: 0,
        // No hot reloading. A reload part way through a run replaces the page, and with it the harness
        // the runner is calling into — which read as a hundred samples failing at once because the
        // harness "was undefined".
        hmr: false,
    },
    // Every package named up front, so the dependency optimiser does its work before the first sample
    // rather than discovering a package half way through and reloading the page to use it.
    optimizeDeps: { include: PACKAGE_NAMES },
});
await server.listen();
const url = server.resolvedUrls.local[0];
console.log(`[runtime] harness at ${url}`);

// The browser's own output, kept in a ring. A tab that dies says why on stderr — a signal, an
// out-of-memory report, a check that failed inside the renderer process — and none of that reaches the
// page's console. Playwright hands it over through the logger, so it is here when a crash needs
// explaining and out of the way when it does not.
const browserLog = [];
const browserOptions = {
    headless: !HEADED,
    logger: {
        isEnabled: (name) => name === 'browser',
        log: (name, severity, message) => {
            browserLog.push(`${severity}: ${String(message).trim()}`);
            if (browserLog.length > 60) browserLog.shift();
        },
    },
};
let browser = await chromium.launch(browserOptions);

// Everything the browser complains about, attributed to whichever sample was loading at the time.
let current = null;
const browserProblems = new Map();
const noteProblem = (sample, message) => {
    // While the page is tearing the previous sample down, whatever it complains about is that sample's
    // doing. The stage the harness announces is how this is known: between "cleanup" and "cleaned",
    // nothing of the new sample has been loaded yet.
    if (stages.length > 0 && stages[stages.length - 1] === 'cleanup') {
        leftBehind.push({ after: previous, problem: message });
        return;
    }
    if (!sample) return;
    if (!browserProblems.has(sample)) browserProblems.set(sample, []);
    browserProblems.get(sample).push(message);
};

/**
 * A page with the harness on it, ready to be asked for a sample.
 *
 * Made through a function because a page can be lost — a tab that runs out of memory takes the harness
 * with it — and the answer to an unreachable host is to start another one, which is what the xsharp
 * test runner does. Restarts are counted and reported: needing one is itself a finding about what a
 * sample left behind, even though the run carries on.
 */
let page = null;
let restarts = 0;
let crashed = false;
// The stages the current sample went through, most recent last.
let stages = [];
// Everything the page said while loading it.
let chatter = [];
// What the renderers reported while loading it, streamed out of the page as it happened.
let rendererSaid = [];
// Canvases asked for at a size that cannot be meant, which is how a page runs out of memory.
let canvasSaid = [];
// Where the memory went, as the page counted it on the way down.
let memorySaid = [];
// The extremes of what the page was asked to draw.
let drawnSaid = [];
// Samples that handed the rasteriser a coordinate that is not a number. Not a failure on its own — the
// browser ignores such a segment — but it is a component computing geometry from something it should
// have checked, and it is how the radial crash announces itself.
const drewNonsense = new Set();

async function openPage() {
    if (page !== null) {
        await Promise.race([page.close().catch(() => {}),
            new Promise(resolve => setTimeout(resolve, 2000))]);
    }
    if (!browser.isConnected()) browser = await chromium.launch(browserOptions);
    try {
        page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    } catch (error) {
        // A sufficiently heavy sample can take down the browser process rather than only its tab.
        // Replacing the process lets later samples keep their own verdict instead of inheriting a
        // page-creation failure from the performance case that preceded them.
        browser = await chromium.launch(browserOptions);
        page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    }
    // Screenshots and waits fail rather than hang if the page stops answering.
    page.setDefaultTimeout(30000);
    // Playwright says so when a tab dies, which is the only notice that arrives — the call being
    // awaited simply never returns.
    page.on('crash', () => {
        crashed = true;
        noteProblem(current, 'the tab died while this sample was loading');
    });
    page.on('pageerror', (error) => {
        // The first frame as well as the message: "cannot read properties of null" says nothing about
        // where, and where is the whole question when a component throws during load.
        const frame = String(error.stack ?? '').split('\n').find(line => line.trim().startsWith('at '));
        if (current === null && VERBOSE) console.error(`[runtime] harness startup error: ${error.stack ?? error}`);
        noteProblem(current, `uncaught: ${error.message}${frame ? `\n            ${frame.trim()}` : ''}`);
    });
    page.on('console', (message) => {
        const text = message.text();
        // How far the sample got. Kept per sample so a crash can say which stage it was in, and the
        // last few of them are worth showing even when the tab survives.
        if (text.startsWith('[stage] ')) {
            stages.push(text.slice('[stage] '.length));
            if (stages.length > 12) stages.shift();
            return;
        }
        // What the renderer objected to, as it objected. Kept separately from the return value, which a
        // crashed tab never delivers.
        if (text.startsWith('[memory] ')) {
            memorySaid.push(text.slice('[memory] '.length));
            if (memorySaid.length > 12) memorySaid.shift();
            return;
        }
        if (text.startsWith('[drawn] ')) {
            drawnSaid.push(text.slice('[drawn] '.length));
            if (drawnSaid.length > 6) drawnSaid.shift();
            return;
        }
        if (text.startsWith('[canvas] ')) {
            canvasSaid.push(text.slice('[canvas] '.length));
            if (canvasSaid.length > 10) canvasSaid.shift();
            return;
        }
        if (text.startsWith('[cr-error] ')) {
            rendererSaid.push(text.slice('[cr-error] '.length));
            if (rendererSaid.length > 20) rendererSaid.shift();
            return;
        }
        // Everything the page says, of any kind, in a ring. A component often logs something on its
        // way down, and a warning that means nothing on a good run is the whole story on a bad one.
        chatter.push(`${message.type()}: ${text}`);
        if (chatter.length > 40) chatter.shift();
        if (message.type() !== 'error') return;
        if (current === null && VERBOSE) console.error(`[runtime] harness startup console: ${text}`);
        // A sample binding to a remote service is not what this check is about, and a network failure in
        // CI would report as a component error.
        if (/net::ERR_|Failed to load resource|ERR_NAME_NOT_RESOLVED/.test(text)) return;
        noteProblem(current, `console: ${text}`);
    });
    await page.goto(url, { waitUntil: 'load' });
    await page.waitForFunction('window.igSampleHarnessReady === true', null, { timeout: 120000 });
}

await openPage();

const setup = await page.evaluate('window.igSampleHarness.registered()');
console.log(`[runtime] registered ${setup.descriptions} description module(s) and ` +
            `${setup.modules} component module(s)`);
if (setup.failures.length > 0) {
    console.log(`[runtime] ${setup.failures.length} module(s) would not register:`);
    for (const failure of setup.failures.slice(0, 10)) console.log(`  ${failure}`);
}

console.log(`[runtime] loading ${parsed.size} ` +
            `${FROM_SAMPLES || named.length > 0 ? 'sample' : 'definition'}(s)\n`);

const failures = [];
const contaminated = [];
const leftBehind = [];
const unresolvedNames = new Map();
const enumProblems = new Map();
const skipped = [];
let passed = 0;
// How much the page is holding after each sample. A page that dies part way through a run is holding
// something it should have let go of, and the shape of this says where it started.
const heapBySample = [];
// How much of the page each sample drew, for the summary.
const drawnFraction = new Map();
// The last reading taken, so a crash can say what the page was holding beforehand.
let lastHeap = 0;
// The most it was holding while the current sample loaded.
let peakHeap = 0;
let sinceLastNote = 0;
// Which sample ran before the current one, so a failure that comes from inherited state can name it.
let previous = null;

for (const name of parsed.keys()) {
    const sample = parsed.get(name);
    const needsUncovered = [...referenceNamesIn(sample)].filter(ref => uncovered.has(ref));
    if (needsUncovered.length > 0) {
        skipped.push({ name, needs: needsUncovered, reason: 'unavailable library package' });
        continue;
    }
    // A component whose package is not installed here is the same case as a library item that needs
    // one: not checked, rather than failed.
    //
    // Recognised by the name, because that is how this project already draws the line: a description
    // whose name begins with "Web" is one of the modern web components, which version on their own line
    // and are not what this documentation covers. The renderer cannot be asked instead — the core
    // package carries descriptions for components it does not ship the elements for.
    const uninstalled = INCLUDE_WEB_GRIDS ? [] : webComponentTypesIn(sample);
    if (uninstalled.length > 0) {
        skipped.push({ name, needs: uninstalled.map(type => `the ${type} component`),
            reason: 'opt-in WebGrid tier' });
        continue;
    }
    current = name;
    let problems = await loadOnce(name, sample);

    // A second attempt, on the same page, for anything that failed. A sample that fails in sequence
    // and passes immediately afterwards was not broken: it inherited something the sample before it
    // left behind, and that is a finding about the component or the renderer rather than about this
    // sample. Reported as its own kind, because the fix is somewhere else entirely.
    if (problems.length > 0) {
        browserProblems.delete(name);
        const second = await loadOnce(name, sample);
        if (second.length === 0) {
            contaminated.push({ name, after: previous, problems });
            console.log(`  LEAK  ${name}`);
            console.log(`          failed after ${previous ?? 'nothing'}, passed on its own`);
            for (const problem of problems.slice(0, 3)) console.log(`          ${problem}`);
            previous = name;
            continue;
        }
        problems = second;
    }

    if (problems.length === 0) {
        passed++;
        if (VERBOSE) console.log(`  ok    ${name}`);
        else if (++sinceLastNote >= 50) {
            // Something on the console every so often, so a long run is distinguishable from a stuck one.
            sinceLastNote = 0;
            console.log(`  … ${passed} loaded clean so far (${name})`);
        }
        previous = name;
        continue;
    }
    failures.push({ name, problems });
    console.log(`  FAIL  ${name}${neverExported.has(name) ? '  (marked not exported)' : ''}`);
    // A crash is reported whole: it cannot be reproduced by reading further down the log.
    const show = problems.some(p => p.startsWith('the page stopped answering')) ? problems.length : 6;
    for (const problem of problems.slice(0, show)) console.log(`          ${problem}`);
    if (problems.length > show) console.log(`          … and ${problems.length - show} more`);
    previous = name;
}

/**
 * That the page still has a harness on it, restarting it if not.
 *
 * A page can go away underneath a run, and the next call then fails with a message about something
 * being undefined, which says nothing about the sample being loaded. Recovering here means a run
 * survives it and the report says how often it happened.
 */
async function ensureHarness() {
    const present = await Promise.race([
        page.evaluate('window.igSampleHarnessReady === true').catch(() => false),
        new Promise(resolve => setTimeout(() => resolve(false), 2000)),
    ]);
    if (present === true) return;
    restarts++;
    await openPage();
}

/**
 * How much of the page is not white, after a sample has settled.
 *
 * A screenshot rather than a count of elements: what matters is whether something is visible, and a
 * component can add elements and draw nothing. Decoded here rather than by an image library, because the
 * question is one comparison per pixel.
 */
async function howMuchWasDrawn(name) {
    try {
        const root = page.locator('#root');
        if (await root.count() === 0) return null;
        // A very large DataGrid can keep painting after the renderer itself is idle. Visual evidence
        // is supplementary; it must not turn a completed runtime check into an unbounded wait.
        const shot = await root.screenshot({ type: 'png', timeout: 10000 });
        const measured = fractionNotWhite(shot);
        if (SHOT_DIR && measured.fraction < BLANK) {
            // Kept, because "it rendered nothing" is a claim worth being able to check.
            const file = path.join(SHOT_DIR, name.replace(/[\\/]/g, '_').replace(/\.json$/, '') + '.png');
            fs.mkdirSync(SHOT_DIR, { recursive: true });
            fs.writeFileSync(file, shot);
        }
        return measured;
    } catch (e) {
        return null;
    }
}

/**
 * How much the page is holding, sampled until the load settles.
 *
 * peakHeap is what a crash report needs: a page that dies is holding something, and the last reading
 * before it went is the difference between "out of memory" and "something threw".
 */
async function watchHeap(until) {
    let running = true;
    until.then(() => { running = false; }, () => { running = false; });
    while (running) {
        const reading = await Promise.race([
            page.evaluate('(performance.memory && performance.memory.usedJSHeapSize) || 0')
                .catch(() => -1),
            new Promise(resolve => setTimeout(() => resolve(-1), 1000)),
        ]);
        if (reading === -1) return;                     // the page is gone; the last peak stands
        if (reading > peakHeap) peakHeap = reading;
        await new Promise(resolve => setTimeout(resolve, 250));
    }
}

/**
 * Everything known about a page that stopped answering.
 *
 * "Target crashed" on its own says nothing anyone can act on. What is available at that moment: the
 * stage the harness had reached, whatever the page said before it went, what the browser process wrote
 * to its own log, and how much the page was holding beforehand. All of it, because a crash cannot be
 * gone back to — the tab is gone and the state with it.
 */
function describeLostPage(name, error, heapBefore) {
    const lines = [`the page stopped answering: ${error.message.split('\n')[0]}`];
    if (crashed) lines.push('playwright reported the tab as crashed');
    if (stages.length > 0) {
        lines.push(`reached: ${stages.join(' → ')}`);
        lines.push(`so it went down during "${stages[stages.length - 1]}"`);
    }
    lines.push(`the sample: ${describeSample(name)}`);
    // The renderer collects rather than throws, so it may well have said what was wrong before the tab
    // went. Those never came back with the call; they came out on the console as they happened.
    for (const said of rendererSaid.slice(-8)) lines.push(`the renderer reported: ${said}`);
    for (const said of canvasSaid.slice(-6)) lines.push(`and: ${said} — four bytes a pixel is where the memory went`);
    for (const said of memorySaid.slice(-4)) lines.push(`it had allocated: ${said}`);
    for (const said of drawnSaid.slice(-4)) lines.push(`it was drawing: ${said}`);
    if (canvasSaid.length > 0) {
        lines.push('so the memory went on canvases, not on the JS heap');
    }
    const said = browserProblems.get(name) ?? [];
    for (const problem of said.slice(-6)) lines.push(`the page said: ${problem}`);
    for (const line of chatter.slice(-8)) lines.push(`the page logged: ${line}`);
    if (heapBefore > 0) {
        lines.push(`it was holding ${(heapBefore / (1024 * 1024)).toFixed(0)}MB before this sample`);
    }
    if (peakHeap > 0) {
        lines.push(`and ${(peakHeap / (1024 * 1024)).toFixed(0)}MB at the last reading before it went`);
    }
    const fromBrowser = browserLog.filter(line =>
        /error|fatal|out of memory|oom|signal|crash|check failed|abort/i.test(line));
    for (const line of fromBrowser.slice(-8)) lines.push(`the browser said: ${line}`);
    if (fromBrowser.length === 0 && browserLog.length > 0) {
        for (const line of browserLog.slice(-4)) lines.push(`the browser said: ${line}`);
    }
    return lines;
}

/**
 * What a sample is, in a line: the components it names and how many of each.
 *
 * So a crash report stands on its own. Whoever reads it should not have to open the sample to know it
 * was a radial chart with four series.
 */
function describeSample(name) {
    const sample = parsed.get(name);
    if (!sample) return name;
    const counts = new Map();
    (function walk(node) {
        if (Array.isArray(node)) { node.forEach(walk); return; }
        if (!node || typeof node !== 'object') return;
        if (typeof node.type === 'string') counts.set(node.type, (counts.get(node.type) ?? 0) + 1);
        for (const value of Object.values(node)) {
            if (value && typeof value === 'object') walk(value);
        }
    })(sample.descriptions ?? sample);
    const shown = [...counts].sort((a, b) => b[1] - a[1]).slice(0, 6)
        .map(([type, count]) => count > 1 ? `${count}× ${type}` : type);
    return shown.join(', ') || 'nothing recognisable';
}

/** One attempt at a sample, as a list of complaints. Empty means it loaded clean. */
async function loadOnce(name, sample) {
    const runInitialisers = !itemExcerpts.has(name);
    let result;
    crashed = false;
    peakHeap = 0;
    stages = [];
    chatter = [];
    rendererSaid = [];
    canvasSaid = [];
    memorySaid = [];
    drawnSaid = [];
    const heapBefore = lastHeap;
    try {
        await ensureHarness();
        // Watched while it loads, not before. The stages a sample goes through are asynchronous, so the
        // page comes back to the event loop between them and can be asked how much it is holding — which
        // is the only way to know what it was holding when it died, since the load itself never returns.
        const loading = page.evaluate(
            ([json, timeout, runInitialisers]) =>
                window.igSampleHarness.load(json, { timeout, runInitialisers }),
            [sample, TIMEOUT, runInitialisers]);
        let stopWatching;
        const watchingDone = new Promise(resolve => { stopWatching = resolve; });
        const watching = watchHeap(Promise.race([loading, watchingDone]));
        // A hard cap, because page.evaluate has no timeout of its own: a tab that goes down in the
        // wrong way leaves the call waiting for ever, and a check that hangs is worse than one that
        // fails. The cap allows for the waits inside — idle, flush, animations — and then gives up.
        result = await Promise.race([
            loading,
            new Promise((resolve) => setTimeout(() => resolve(WEDGED), TIMEOUT + 20000)),
        ]);
        if (result === WEDGED) {
            stopWatching();
            await watching;
            return describeLostPage(name, new Error('it never answered'), heapBefore);
        }
        await watching;
    } catch (e) {
        return describeLostPage(name, e, heapBefore);
    }

    for (const missing of result.unresolved) {
        unresolvedNames.set(missing, (unresolvedNames.get(missing) ?? 0) + 1);
    }
    for (const problem of result.enumProblems ?? []) {
        enumProblems.set(problem, (enumProblems.get(problem) ?? 0) + 1);
    }
    if (drawnSaid.some(said => said.includes('not a number'))) {
        drewNonsense.add(name);
    }
    for (const problem of result.leftBehind ?? []) {
        // The teardown of whatever ran before this one complained. Named against that sample, since
        // that is whose state it is.
        leftBehind.push({ after: previous, problem });
    }

    // Did anything actually get drawn? A sample can load without a complaint and put nothing on the
    // page — a series bound to nothing, a component that measured zero — and no error says so. The
    // page is a white plate, so a screenshot with no pixel other than white means nothing rendered.
    let rendered = null;
    if (SHOTS) {
        rendered = await Promise.race([
            howMuchWasDrawn(name),
            new Promise(resolve => setTimeout(() => resolve(null), 12000)),
        ]);
        if (rendered !== null) drawnFraction.set(name, rendered);
    }

    const heap = await page.evaluate(
        '(performance.memory && performance.memory.usedJSHeapSize) || 0').catch(() => 0);
    if (heap > 0) {
        heapBySample.push({ name, heap });
        lastHeap = heap;
    }

    return [
        ...result.thrown.map(t => `threw: ${t.split('\n')[0]}`),
        ...result.errors.map(e => `renderer: ${e.split('\n')[0]}`),
        ...(result.timedOut ? [`never went idle within ${TIMEOUT}ms`] : []),
        ...(result.animationTimedOut ? ['animations never settled'] : []),
        ...(result.bigCanvases ?? []).map(c => `asked for a canvas it cannot need: ${c}`),
        ...(result.initialisers ?? []).map(p => `a handler the sample runs at start-up: ${p}`),
        // Drawing nothing is a failure for a sample, which is a whole runnable page, and information
        // for a definition, which is usually an excerpt: a topic teaching one property states the
        // component and the property and no data, and there is nothing for it to draw.
        ...(rendered !== null && rendered.fraction < BLANK && FROM_SAMPLES
            ? [`rendered nothing: the page is still ${(100 - rendered.fraction * 100).toFixed(1)}% white`]
            : []),
        ...(browserProblems.get(name) ?? []),
    ];
}

current = null;

if (unresolvedNames.size > 0) {
    console.log(`\n[runtime] ${unresolvedNames.size} reference(s) went unresolved — neither the ` +
                `renderer nor the library had them, so those samples rendered without them:`);
    for (const [name, count] of [...unresolvedNames].slice(0, 10)) {
        console.log(`  ${name} (${count} sample(s))`);
    }
}

if (skipped.length > 0) {
    const reasons = [...new Set(skipped.map(one => one.reason))].join(', ');
    console.log(`\n[runtime] ${skipped.length} sample(s) not checked (${reasons})`);
    for (const entry of skipped.slice(0, 8)) {
        console.log(`  ${entry.name} — binds to ${entry.needs.slice(0, 3).join(', ')}` +
                    (entry.needs.length > 3 ? `, and ${entry.needs.length - 3} more` : ''));
    }
    if (skipped.length > 8) console.log(`  … and ${skipped.length - 8} more`);
}

if (drawnFraction.size > 0) {
    const blank = [...drawnFraction].filter(([, m]) => m.fraction < BLANK).map(([name]) => name);
    const median = [...drawnFraction.values()].map(m => m.fraction).sort((a, b) => a - b)[
        Math.floor(drawnFraction.size / 2)];
    console.log(`\n[runtime] the typical one covered ${(median * 100).toFixed(0)}% of the page; ` +
                `${blank.length} drew nothing`);
    // Which of those had data to draw. One that binds nothing is an excerpt and is expected to be
    // empty; one that binds data and still draws nothing is worth a look.
    const withData = blank.filter(name => bindsData(parsed.get(name)));
    for (const name of withData.slice(0, 10)) {
        console.log(`  ${name} — binds data and still drew nothing` +
                    `${neverExported.has(name) ? ', and is marked not exported' : ''}`);
    }
    if (withData.length === 0 && blank.length > 0) {
        console.log(`  all of them state a component without data, which is what an excerpt looks like`);
    }
}

if (drewNonsense.size > 0) {
    console.log(`\n[runtime] ${drewNonsense.size} sample(s) drew coordinates that are not numbers:`);
    for (const name of [...drewNonsense].slice(0, 8)) console.log(`  ${name}`);
}

if (enumProblems.size > 0) {
    console.log(`\n[runtime] ${enumProblems.size} value(s) are not members of the enumeration they ` +
                `were given to, and were read as the first member:`);
    for (const [problem, count] of [...enumProblems].slice(0, 8)) {
        console.log(`  ${problem}${count > 1 ? ` (${count} sample(s))` : ''}`);
    }
}

if (leftBehind.length > 0) {
    console.log(`\n[runtime] ${leftBehind.length} time(s) a sample could not be torn down cleanly:`);
    for (const entry of leftBehind.slice(0, 8)) {
        console.log(`  after ${entry.after ?? 'nothing'}: ${entry.problem}`);
    }
}

if (contaminated.length > 0) {
    console.log(`\n[runtime] ${contaminated.length} sample(s) failed in sequence and passed on their ` +
                `own — state left behind by what ran before them:`);
    for (const entry of contaminated) {
        console.log(`  ${entry.name}, after ${entry.after ?? 'nothing'}`);
    }
}

if (restarts > 0) {
    console.log(`\n[runtime] the page stopped answering ${restarts} time(s) and was restarted — the ` +
                `failures above say which sample was loading and how far it had got`);
}

if (heapBySample.length > 2) {
    const first = heapBySample[0];
    const last = heapBySample[heapBySample.length - 1];
    const mb = (bytes) => (bytes / (1024 * 1024)).toFixed(0);
    console.log(`\n[runtime] the page held ${mb(first.heap)}MB after the first sample and ` +
                `${mb(last.heap)}MB after the last`);
    // The biggest single increases, which is where to look when a run does not survive.
    const jumps = heapBySample.slice(1)
        .map((entry, i) => ({ name: entry.name, grew: entry.heap - heapBySample[i].heap }))
        .filter(entry => entry.grew > 8 * 1024 * 1024)
        .sort((a, b) => b.grew - a.grew)
        .slice(0, 5);
    for (const jump of jumps) console.log(`  +${mb(jump.grew)}MB at ${jump.name}`);
}

console.log(`\n${passed} of ${parsed.size - skipped.length} loaded clean, ` +
            `${failures.length} failed, ${contaminated.length} only in sequence, ` +
            `${skipped.length} not checked`);

if (KEEP_OPEN) {
    console.log('[runtime] --keep-open: the browser stays up. Ctrl-C when done.');
    await new Promise(() => {});
}
// A performance sample can leave Chromium's renderer thread busy even after its assertions finish.
// Cleanup is best-effort and must not hold a completed CI job open indefinitely.
await Promise.race([browser.close().catch(() => {}),
    new Promise(resolve => setTimeout(resolve, 5000))]);
await Promise.race([server.close().catch(() => {}),
    new Promise(resolve => setTimeout(resolve, 5000))]);
// A sample that only fails in sequence is a failure of the run, not of the sample — but it is still a
// failure: state that leaks between samples is state that leaks between pages in a browser.
process.exit(failures.length > 0 || contaminated.length > 0 ? 1 : 0);
