import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CLI = path.join(ROOT, 'src', 'cli.mjs');

test('emits a complete sample project through the product renderer', () => {
    const output = fs.mkdtempSync(path.join(os.tmpdir(), 'xplat-project-test-'));
    try {
        execFileSync(process.execPath, [
            CLI, 'export', '--platform=WebComponents',
            '--source=../samples/gauges/linear-gauge/needle.json',
            `--output=${output}`, '--clean',
        ], { cwd: ROOT, stdio: 'pipe' });
        const generated = path.join(output, 'gauges/linear-gauge/needle/src/index.ts');
        assert.equal(fs.existsSync(generated), true);
        assert.match(fs.readFileSync(generated, 'utf8'), /IgcLinearGaugeComponent/);
    } finally {
        fs.rmSync(output, { recursive: true, force: true });
    }
});

test('finds and expands json-snippet fences without an Astro pipeline', () => {
    const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'xplat-markdown-test-'));
    const input = path.join(workspace, 'topic.mdx');
    const output = path.join(workspace, 'out');
    fs.writeFileSync(input, [
        '# Gauge',
        '',
        '```json-snippet',
        '{ "type": "LinearGauge", "height": "80px", "value": 50 }',
        '```',
        '',
    ].join('\n'));
    try {
        execFileSync(process.execPath, [
            CLI, 'snippets', `--source=${input}`, `--output=${output}`,
            '--platform=WebComponents',
        ], { cwd: ROOT, stdio: 'pipe' });
        const generated = fs.readFileSync(path.join(output, 'WebComponents/topic.mdx'), 'utf8');
        assert.doesNotMatch(generated, /json-snippet/);
        assert.match(generated, /igc-linear-gauge/);
    } finally {
        fs.rmSync(workspace, { recursive: true, force: true });
    }
});

test('emits and type-compiles a library item on every hosted web platform', () => {
    for (const platform of ['Angular', 'React', 'WebComponents']) {
        execFileSync(process.execPath, [
            CLI, 'library-check', `--platform=${platform}`, '--only=SalesData',
        ], { cwd: ROOT, stdio: 'pipe' });
    }
});

test('emits a Blazor Razor library with data, handlers, manager, and project', () => {
    const output = fs.mkdtempSync(path.join(os.tmpdir(), 'xplat-blazor-library-test-'));
    try {
        execFileSync(process.execPath, [
            CLI, 'library', '--platform=Blazor',
            '--only=SalesData,PropertyEditorInitAggregationsOnViewInit',
            `--output=${output}`, '--clean',
        ], { cwd: ROOT, stdio: 'pipe' });
        for (const file of ['SalesData.cs', 'PropertyEditorInitAggregationsOnViewInitHolder.razor',
            'LibraryManager.cs', 'BlazorLibrary.csproj']) {
            assert.equal(fs.existsSync(path.join(output, file)), true, file);
        }
        assert.match(fs.readFileSync(path.join(output, 'LibraryManager.cs'), 'utf8'), /SalesData/);
        assert.match(fs.readFileSync(path.join(output, 'LibraryManager.cs'), 'utf8'),
            /PropertyEditorInitAggregationsOnViewInit/);
    } finally {
        fs.rmSync(output, { recursive: true, force: true });
    }
});

test('emits WinUI and Uno libraries through the native product renderers', () => {
    for (const platform of ['WinUI', 'Uno']) {
        const output = fs.mkdtempSync(path.join(os.tmpdir(), `xplat-${platform.toLowerCase()}-library-test-`));
        try {
            execFileSync(process.execPath, [
                CLI, 'library', `--platform=${platform}`,
                '--only=SalesData,PropertyEditorInitAggregationsOnViewInit',
                `--output=${output}`, '--clean',
            ], { cwd: ROOT, stdio: 'pipe' });
            const project = platform === 'Uno' ? 'UnoLibrary.csproj' : 'WinUILibrary.csproj';
            for (const file of ['SalesData.cs', 'PropertyEditorInitAggregationsOnViewInit.cs',
                'LibraryManager.cs', project]) {
                assert.equal(fs.existsSync(path.join(output, file)), true, `${platform}: ${file}`);
            }
            assert.match(fs.readFileSync(path.join(output, 'PropertyEditorInitAggregationsOnViewInit.cs'), 'utf8'),
                /Microsoft\.UI\.Xaml/);
        } finally {
            fs.rmSync(output, { recursive: true, force: true });
        }
    }
});
