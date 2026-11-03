import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

function walkFiles(root, dir = root, found = []) {
    if (!fs.existsSync(dir)) return found;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walkFiles(root, full, found);
        else if (entry.isFile()) found.push(path.relative(root, full).split(path.sep).join('/'));
    }
    return found;
}

export function sampleNames(samplesRoot) {
    return walkFiles(samplesRoot).filter(name => name.endsWith('.json')).sort();
}

export function outputFolderForSample(sample) {
    if (!sample.endsWith('.json')) throw new Error(`sample path must end in .json: ${sample}`);
    return sample.slice(0, -'.json'.length);
}

export function outputDigest(outputRoot, sample) {
    const folder = path.join(outputRoot, outputFolderForSample(sample));
    if (!fs.existsSync(folder)) return null;
    const hash = crypto.createHash('sha256');
    for (const relative of walkFiles(folder).sort()) {
        hash.update(relative);
        hash.update('\0');
        hash.update(fs.readFileSync(path.join(folder, relative)));
        hash.update('\0');
    }
    return hash.digest('hex');
}

function platformSections(examplesRoot, platform) {
    const configured = platform.toLowerCase() === 'uno' ? 'winui' : platform.toLowerCase();
    return JSON.parse(fs.readFileSync(path.join(examplesRoot, 'config.json'), 'utf8')).platforms
        .filter(one => one.name === 'All' || one.name.toLowerCase() === configured);
}

export function emittableSampleNames(examplesRoot, platform, { testing = false } = {}) {
    const samplesRoot = path.join(examplesRoot, 'samples');
    const sections = platformSections(examplesRoot, platform);
    return sampleNames(samplesRoot).filter(sample => {
        const parsed = JSON.parse(fs.readFileSync(path.join(samplesRoot, sample), 'utf8'));
        if (parsed.export === false) return false;
        if (Array.isArray(parsed.export) &&
            !parsed.export.some(one => String(one).toLowerCase() === platform.toLowerCase())) return false;
        const relative = sample.toLowerCase();
        return !sections.some(section => (section.exclusions ?? []).some(rule => {
            const candidate = String(rule.path).replace(/\\/g, '/').replace(/^samples\//, '').toLowerCase();
            const matches = candidate.endsWith('/') ? relative.startsWith(candidate) : relative === candidate;
            return matches && !(testing && rule.test === true);
        }));
    });
}

/**
 * Compares the emitted folder belonging to every source sample in either revision.
 * Output folders deliberately preserve the source path without `.json`, so the result is directly
 * consumable by build selection and downstream synchronization.
 */
export function compareOutputTrees({
    baseOutput, headOutput, baseSamples, headSamples, baseIncluded = null, headIncluded = null,
}) {
    const baseNames = new Set(baseIncluded ?? sampleNames(baseSamples));
    const headNames = new Set(headIncluded ?? sampleNames(headSamples));
    const names = [...new Set([...baseNames, ...headNames])].sort();
    const changes = [];
    for (const sample of names) {
        const before = baseNames.has(sample) ? outputDigest(baseOutput, sample) : null;
        const after = headNames.has(sample) ? outputDigest(headOutput, sample) : null;
        if (before === after) continue;
        const kind = before === null ? 'added' : after === null ? 'removed' : 'modified';
        changes.push({ sample, folder: outputFolderForSample(sample), kind });
    }
    return changes;
}

export function readImpactManifest(file, platform, scope = 'testing') {
    const manifest = JSON.parse(fs.readFileSync(file, 'utf8'));
    const changes = manifest.platforms?.[platform]?.[`${scope}Changes`];
    if (manifest.version !== 1 || !Array.isArray(changes)) {
        throw new Error(`impact manifest has no version 1 entry for ${platform}: ${file}`);
    }
    return changes;
}
