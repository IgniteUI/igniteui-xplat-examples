import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
require('../src/dom-shim.cjs');
const { resolveTestingSections, resolveTestingSectionsInFile } = require('../dist/codegen-api.cjs');

test('public and testing emissions select opposite branches without changing source', () => {
    const source = 'before\n//begin testing\ntesting();\n//end testing\n//begin notTesting\npublicCode();\n//end notTesting\nafter';
    assert.equal(resolveTestingSections(source), 'before\npublicCode();\nafter');
    assert.equal(resolveTestingSections(source, true), 'before\ntesting();\nafter');
    assert.equal(resolveTestingSections(source), 'before\npublicCode();\nafter');
});

test('inactive parents suppress nested sections in either mode', () => {
    const source = '//begin testing\nouter\n//begin notTesting\nnever\n//end notTesting\n//end testing';
    assert.equal(resolveTestingSections(source), '');
    assert.equal(resolveTestingSections(source, true), 'outer');
});

test('conditional promise tails keep a normal statement terminator', () => {
    const source = 'fetch(url).then(read)\n//begin testing\n.finally(complete)\n//end testing\n;';
    assert.equal(resolveTestingSections(source), 'fetch(url).then(read);');
    assert.equal(resolveTestingSections(source, true), 'fetch(url).then(read)\n.finally(complete);');
});

test('imports and JSON code fields follow the same rule', () => {
    const code = '//begin testing\nimport TestTracker;\n//end testing\nimport Chart;';
    const result = JSON.parse(resolveTestingSectionsInFile(JSON.stringify({ imports: code, supportingTypes: code }), 'Web.json'));
    assert.equal(result.imports, 'import Chart;');
    assert.equal(result.supportingTypes, 'import Chart;');
});

test('ordinary source is unchanged and malformed sections fail visibly', () => {
    const plain = '//begin eventHandler\r\nunchanged();\r\n//end eventHandler\r\n';
    assert.equal(resolveTestingSections(plain), plain);
    assert.throws(() => resolveTestingSections('//end testing'), /Mismatched/);
    assert.throws(() => resolveTestingSections('//begin testing\nbody'), /Unclosed/);
    assert.throws(() => resolveTestingSections('//begin testing\n//end notTesting'), /Mismatched/);
});

test('sample code items keep idle signals exclusively in testing emissions', () => {
    const library = fileURLToPath(new URL('../../code-gen-library/', import.meta.url));
    const files = fs.readdirSync(library, { recursive: true })
        .filter(file => /\.(cs|ts|dart)$/.test(file))
        .map(file => path.join(library, file));
    const tracking = files.filter(file => /Global(?:Animation|QueuedWork)State/.test(fs.readFileSync(file, 'utf8')));
    assert.ok(tracking.length > 0, 'exercise actual sample tracking code');
    for (const file of tracking) {
        const source = fs.readFileSync(file, 'utf8');
        const publicCode = resolveTestingSections(source);
        const testingCode = resolveTestingSections(source, true);
        assert.doesNotMatch(publicCode, /Global(?:Animation|QueuedWork)State|\bwork\.notifyWork/i, file);
        const signals = /\b[Nn]otify(?:WorkQueued|WorkCompleted|AnimationStarted|AnimationCompleted)\b/g;
        assert.deepEqual(testingCode.match(signals), source.match(signals), `preserve signals: ${file}`);
        assert.doesNotMatch(testingCode, /\/\/(?:begin|end) (?:testing|notTesting)/, file);
    }
});
