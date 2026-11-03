import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const XPLAT_ROOT = path.resolve(HERE, '..', '..');

export function resolveExamplesRoot() {
    return XPLAT_ROOT;
}

export function resolveItemTemplates() {
    return path.resolve(HERE, '..', 'library-templates');
}

export function mdxFilesUnder(dir) {
    const files = [];
    if (!fs.existsSync(dir)) return files;
    (function walk(current) {
        for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
            const full = path.join(current, entry.name);
            if (entry.isDirectory()) walk(full);
            else if (/\.mdx?$/.test(entry.name)) files.push(full);
        }
    })(dir);
    return files.sort();
}

export function fencesOf(text) {
    return [...text.matchAll(/```json-snippet *([^\n]*)\n([\s\S]*?)```/g)].map(match => ({
        line: text.slice(0, match.index).split('\n').length,
        attrs: Object.fromEntries([...match[1].matchAll(/(\w+)="([^"]*)"/g)].map(one => [one[1], one[2]])),
        body: match[2],
    }));
}

export function loadSnippetApi() {
    const require = createRequire(import.meta.url);
    require('../src/dom-shim.cjs');
    return require('../dist/codegen-api.cjs');
}
