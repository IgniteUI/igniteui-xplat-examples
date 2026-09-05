import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import {
    compareOutputTrees, emittableSampleNames, outputFolderForSample,
} from '../src/output-impact.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CLI = path.join(ROOT, 'src', 'cli.mjs');
const require = createRequire(import.meta.url);
require('../src/dom-shim.cjs');
const { emitProject } = require('../dist/codegen-api.cjs');

test('maps emitted folder diffs back to added, modified, and removed samples', () => {
    const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'xplat-impact-test-'));
    const write = (relative, content) => {
        const file = path.join(workspace, relative);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, content);
    };
    try {
        for (const sample of ['same.json', 'changed.json', 'removed.json']) {
            write(`base-samples/group/${sample}`, '{}');
        }
        for (const sample of ['same.json', 'changed.json', 'added.json']) {
            write(`head-samples/group/${sample}`, '{}');
        }
        write('base-output/group/same/file.ts', 'same');
        write('head-output/group/same/file.ts', 'same');
        write('base-output/group/changed/file.ts', 'before');
        write('head-output/group/changed/file.ts', 'after');
        write('base-output/group/removed/file.ts', 'removed');
        write('head-output/group/added/file.ts', 'added');

        const changes = compareOutputTrees({
            baseOutput: path.join(workspace, 'base-output'),
            headOutput: path.join(workspace, 'head-output'),
            baseSamples: path.join(workspace, 'base-samples'),
            headSamples: path.join(workspace, 'head-samples'),
        });
        assert.deepEqual(changes, [
            { sample: 'group/added.json', folder: 'group/added', kind: 'added' },
            { sample: 'group/changed.json', folder: 'group/changed', kind: 'modified' },
            { sample: 'group/removed.json', folder: 'group/removed', kind: 'removed' },
        ]);
        assert.equal(outputFolderForSample('grids/data-grid/performance.json'),
            'grids/data-grid/performance');
    } finally {
        fs.rmSync(workspace, { recursive: true, force: true });
    }
});

test('a shared template output change selects every sample folder it changes', () => {
    const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'xplat-template-impact-test-'));
    try {
        for (const sample of ['one', 'two', 'three']) {
            const source = path.join(workspace, 'samples', `${sample}.json`);
            const before = path.join(workspace, 'before', sample, 'template.txt');
            const after = path.join(workspace, 'after', sample, 'template.txt');
            for (const file of [source, before, after]) fs.mkdirSync(path.dirname(file), { recursive: true });
            fs.writeFileSync(source, '{}');
            fs.writeFileSync(before, 'old shared template');
            fs.writeFileSync(after, 'new shared template');
        }
        const changes = compareOutputTrees({
            baseOutput: path.join(workspace, 'before'),
            headOutput: path.join(workspace, 'after'),
            baseSamples: path.join(workspace, 'samples'),
            headSamples: path.join(workspace, 'samples'),
        });
        assert.deepEqual(changes.map(change => change.sample), ['one.json', 'three.json', 'two.json']);
    } finally {
        fs.rmSync(workspace, { recursive: true, force: true });
    }
});

test('keeps test-opted exclusions out of the downstream emission impact set', () => {
    const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'xplat-impact-config-test-'));
    const samples = path.join(workspace, 'samples');
    fs.mkdirSync(path.join(samples, 'group'), { recursive: true });
    fs.writeFileSync(path.join(samples, 'group/normal.json'), '{}');
    fs.writeFileSync(path.join(samples, 'group/test-only.json'), '{}');
    fs.writeFileSync(path.join(workspace, 'config.json'), JSON.stringify({
        platforms: [{ name: 'WebComponents', exclusions: [
            { path: 'group/test-only.json', test: true },
        ] }],
    }));
    try {
        assert.deepEqual(emittableSampleNames(workspace, 'WebComponents'), ['group/normal.json']);
        assert.deepEqual(emittableSampleNames(workspace, 'WebComponents', { testing: true }),
            ['group/normal.json', 'group/test-only.json']);
    } finally {
        fs.rmSync(workspace, { recursive: true, force: true });
    }
});

test('applies an emission impact manifest without touching unrelated downstream folders', () => {
    const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'xplat-impact-export-test-'));
    const output = path.join(workspace, 'samples');
    const manifest = path.join(workspace, 'impact.json');
    const stale = path.join(output, 'gauges/linear-gauge/needle/stale.txt');
    const removed = path.join(output, 'gauges/linear-gauge/removed/stale.txt');
    const unrelated = path.join(output, 'manually-maintained/keep.txt');
    for (const file of [stale, removed, unrelated]) {
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, 'old');
    }
    fs.writeFileSync(manifest, JSON.stringify({
        version: 1,
        platforms: {
            WebComponents: {
                emissionChanges: [
                    { sample: 'gauges/linear-gauge/needle.json', folder: 'gauges/linear-gauge/needle', kind: 'modified' },
                    { sample: 'gauges/linear-gauge/removed.json', folder: 'gauges/linear-gauge/removed', kind: 'removed' },
                ],
                testingChanges: [],
            },
        },
    }));
    try {
        execFileSync(process.execPath, [CLI, 'export', '--platform=WebComponents',
            `--impact-manifest=${manifest}`, `--output=${output}`, '--clean'],
        { cwd: ROOT, stdio: 'pipe' });
        assert.equal(fs.existsSync(stale), false);
        assert.equal(fs.existsSync(path.join(output,
            'gauges/linear-gauge/needle/src/index.ts')), true);
        assert.equal(fs.existsSync(path.dirname(removed)), false);
        assert.equal(fs.readFileSync(unrelated, 'utf8'), 'old');
    } finally {
        fs.rmSync(workspace, { recursive: true, force: true });
    }
});

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

test('emits Angular map imagery as a background model instead of an element', () => {
    const output = fs.mkdtempSync(path.join(os.tmpdir(), 'xplat-angular-map-test-'));
    try {
        execFileSync(process.execPath, [
            CLI, 'export', '--platform=Angular',
            '--source=../samples/maps/geo-map/display-all-imagery.json',
            `--output=${output}`, '--clean',
        ], { cwd: ROOT, stdio: 'pipe' });
        const root = path.join(output, 'maps/geo-map/display-all-imagery/src');
        const html = fs.readFileSync(path.join(root, 'app.component.html'), 'utf8');
        const source = fs.readFileSync(path.join(root, 'app.component.ts'), 'utf8');
        assert.doesNotMatch(html, /igx-open-street-map-imagery/);
        assert.match(source, /new IgxOpenStreetMapImagery\(\)/);
        assert.match(source, /this\.map\.backgroundContent = this\.osmImagery/);
    } finally {
        fs.rmSync(output, { recursive: true, force: true });
    }
});

test('adapts current Angular ZoomSlider and DataGrid template-column APIs', () => {
    const output = fs.mkdtempSync(path.join(os.tmpdir(), 'xplat-angular-current-api-test-'));
    try {
        for (const sample of ['charts/zoomslider/overview.json', 'charts/sparkline/grid.json']) {
            execFileSync(process.execPath, [
                CLI, 'export', '--platform=Angular', `--source=../samples/${sample}`,
                `--output=${output}`, '--clean',
            ], { cwd: ROOT, stdio: 'pipe' });
        }
        const zoom = fs.readFileSync(path.join(output,
            'charts/zoomslider/overview/src/app.component.ts'), 'utf8');
        assert.match(zoom, /IgxZoomSliderComponent[^;]+igniteui-angular-charts/s);
        assert.doesNotMatch(zoom, /igniteui-angular-navigation/);

        const sparkRoot = path.join(output, 'charts/sparkline/grid/src');
        const html = fs.readFileSync(path.join(sparkRoot, 'app.component.html'), 'utf8');
        const source = fs.readFileSync(path.join(sparkRoot, 'app.component.ts'), 'utf8');
        assert.doesNotMatch(html, /\[template\]=/);
        assert.match(html, /\(cellUpdating\)="this\.dataGridSparklineTemplateCellUpdating/);
        assert.match(source, /createEmbeddedView\(\{ \$implicit: args\.cellInfo \}\)/);
    } finally {
        fs.rmSync(output, { recursive: true, force: true });
    }
});

test('adapts current Angular DataGrid auxiliary modules and shared holder state', () => {
    const examplesRoot = path.resolve(ROOT, '..');
    const emit = relative => emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples', relative), 'utf8'),
        'Angular', { examplesRoot });

    const chooser = emit('grids/data-grid/column-chooser-picker.json');
    assert.match(chooser.files['src/app.module.ts'],
        /IgxColumnChooserModule[^;]+igniteui-angular-data-grids/s);
    assert.doesNotMatch(chooser.files['src/app.module.ts'], /igniteui-angular-grids/);

    const layout = emit('grids/data-grid/load-save-layout.json');
    const declarations = layout.files['src/app.component.ts'].match(/public savedLayout:/g) ?? [];
    assert.equal(declarations.length, 1);
});

test('emits Angular shape sources as models and keeps map readers explicitly scoped', () => {
    const examplesRoot = path.resolve(ROOT, '..');
    const emit = relative => emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples', relative), 'utf8'),
        'Angular', { examplesRoot });

    const direct = emit('maps/geo-map/binding-shp-polylines.json');
    assert.doesNotMatch(direct.files['src/app.component.html'], /igx-shape-data-source/);
    assert.match(direct.files['src/app.component.ts'], /new IgxShapeDataSource\(\)/);
    assert.match(direct.files['src/app.component.ts'],
        /this\.geographicPolylineSeries1\.shapefileDataSource = this\.codegenShapeData0/);

    const loaded = emit('maps/geo-map/binding-shp-file.json');
    assert.match(loaded.files['src/app.component.ts'],
        /readRoutes\([^)]*map: IgxGeographicMapComponent\)/);
    const readerType = loaded.files['src/app.component.ts'].split('@Component')[0];
    assert.doesNotMatch(readerType, /var map = this\.map/);

    const styling = emit('maps/geo-map/shape-styling-random.json').files['src/app.component.ts'];
    assert.match(styling, /import \{ Style \} from 'igniteui-angular-core'/);
});

test('emits React map imagery as a model and empty gauge ranges without children', () => {
    const examplesRoot = path.resolve(ROOT, '..');
    const emit = relative => emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples', relative), 'utf8'),
        'React', { examplesRoot });

    const map = emit('maps/geo-map/display-osm-imagery.json').files['src/index.tsx'];
    assert.doesNotMatch(map, /<IgrOpenStreetMapImagery/);
    assert.match(map, /new IgrOpenStreetMapImagery\(\)/);
    assert.match(map, /r\.backgroundContent = this\.osmImagery/);

    const gauge = emit('gauges/radial-gauge/type-half.json').files['src/index.tsx'];
    assert.doesNotMatch(gauge, /<\/IgrRadialGaugeRange>/);
    assert.match(gauge, /<IgrRadialGaugeRange[\s\S]*?\/>/);

    const zoom = emit('charts/zoomslider/overview.json').files['src/index.tsx'];
    assert.match(zoom, /IgrZoomSlider[^;]+igniteui-react-charts/s);
    assert.doesNotMatch(zoom, /igniteui-react-navigation/);

    const shape = emit('maps/geo-map/binding-shp-polylines.json').files['src/index.tsx'];
    assert.doesNotMatch(shape, /<IgrShapeDataSource/);
    assert.match(shape, /IgrShapeDataSource[^;]+igniteui-react-core/s);
    assert.match(shape, /ref=\{this\.geographicPolylineSeries1Ref\}/);
    assert.match(shape, /r\.shapefileDataSource = this\.codegenShapeData0/);

    const chooser = emit('grids/data-grid/column-chooser-picker.json').files['src/index.tsx'];
    assert.match(chooser, /IgrColumnChooser[^;]+igniteui-react-data-grids/s);

    const bubble = emit('maps/geo-map/type-scatter-bubble-series.json').files['src/index.tsx'];
    assert.match(bubble, /IgrSizeScale[^;]+igniteui-react-charts/s);
    assert.doesNotMatch(bubble, /IgrSizeScale[^;]+igniteui-react-maps/s);

    const area = emit('maps/geo-map/type-scatter-area-series.json').files['src/index.tsx'];
    assert.match(area, /IgrCustomPaletteColorScale[^;]+igniteui-react-charts/s);
    assert.doesNotMatch(area, /IgrCustomPaletteColorScale[^;]+igniteui-react-maps/s);
    assert.doesNotMatch(area, /<IgrCustomPaletteColorScale[^>]+\bpalette=/s);
    assert.match(area, /r\.palette = \["rgba\(32, 146, 252, 0\.5019607843137255\)"/);

    const styling = emit('maps/geo-map/shape-styling-random.json').files['src/index.tsx'];
    assert.match(styling, /Style[^;]+igniteui-react-core/s);
    assert.match(styling, /IgrGeographicShapeSeriesBase/);
    assert.doesNotMatch(chooser, /igniteui-react-grids/);

    const layout = emit('grids/data-grid/load-save-layout.json').files['src/index.tsx'];
    assert.equal((layout.match(/\bsavedLayout:/g) ?? []).length, 1);
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

test('uses the current Web Components package for ZoomSlider', () => {
    const examplesRoot = path.resolve(ROOT, '..');
    const project = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/charts/zoomslider/overview.json'), 'utf8'),
        'WebComponents', { examplesRoot });
    assert.match(project.files['src/index.ts'], /IgcZoomSliderComponent[^;]+igniteui-webcomponents-charts/s);
    assert.doesNotMatch(project.files['src/index.ts'], /igniteui-webcomponents-navigation/);

    const map = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/maps/geo-map/display-osm-imagery.json'), 'utf8'),
        'WebComponents', { examplesRoot });
    assert.doesNotMatch(map.files['index.html'], /igc-open-street-map-imagery/);
    assert.match(map.files['src/index.ts'], /new IgcOpenStreetMapImagery\(\)/);
    assert.match(map.files['src/index.ts'], /this\.map\.backgroundContent = this\.osmImagery/);

    const bing = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/maps/geo-map/display-bing-imagery.json'), 'utf8'),
        'WebComponents', { examplesRoot });
    assert.doesNotMatch(bing.files['src/index.ts'], /getElementById\([^\n]+Imagery/);
    assert.match(bing.files['src/index.ts'], /new IgcBingMapsMapImagery\(\)/);

    const chooser = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/grids/data-grid/column-chooser-picker.json'), 'utf8'),
        'WebComponents', { examplesRoot });
    assert.match(chooser.files['src/index.ts'], /IgcColumnChooserModule[^;]+igniteui-webcomponents-data-grids/s);

    const layout = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/grids/data-grid/load-save-layout.json'), 'utf8'),
        'WebComponents', { examplesRoot });
    assert.equal((layout.files['src/index.ts'].match(/\bsavedLayout:/g) ?? []).length, 1);

    const styling = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/maps/geo-map/shape-styling-random.json'), 'utf8'),
        'WebComponents', { examplesRoot }).files['src/index.ts'];
    assert.match(styling, /Style[^;]+igniteui-webcomponents-core/s);
    assert.match(styling, /IgcGeographicShapeSeriesBaseComponent/);
});

test('adapts current Blazor collection and tooltip context APIs', () => {
    const examplesRoot = path.resolve(ROOT, '..');
    const selection = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/charts/category-chart/custom-selection.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.match(selection.files['SelectableData.cs'], /using System\.Collections\.ObjectModel;/);

    const tooltip = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/charts/data-chart/tooltip-template.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.match(tooltip.files['App.razor'], /RenderFragment<IgbDataContext>/);
    assert.doesNotMatch(tooltip.files['App.razor'], /IgbChartTooltipContext/);

    const cellEditing = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/grids/data-grid/cell-editing.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.match(cellEditing.files['App.razor'], /Width="@\(new IgbColumnWidth\(1, 150, true\)\)"/);
    assert.doesNotMatch(cellEditing.files['App.razor'], /Width="\*>/);

    const annotations = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/charts/category-chart/line-chart-with-annotations.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.match(annotations.files['App.razor'], /PropertyEditorValueType\.Boolean1/);
    assert.doesNotMatch(annotations.files['App.razor'], /PropertyEditorValueType\.Boolean\b/);

    const highFrequency = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/charts/category-chart/high-frequency.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.match(highFrequency.files['App.razor'], /chart\.DataSource = data/);
    assert.doesNotMatch(highFrequency.files['App.razor'], /chart\.ItemsSource/);

    const highVolume = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/charts/category-chart/high-volume.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.doesNotMatch(highVolume.files['App.razor'], /chart\.ItemsSource/);

    const performance = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/grids/data-grid/performance.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.match(performance.files['SalesPersonsData.cs'], /static Task<SalesPersonsData> Fetch\(\)/);

    const live = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/grids/data-grid/binding-live-data.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.match(live.files['App.razor'], /IgniteUI\.Blazor\.Controls\.ListSortDirection\.Descending/);
    assert.match(live.files['App.razor'], /DataGridApplyLiveDataGrouping\(IgbPropertyEditorPropertyDescriptionChangedEventArgs args\)/);

    const layout = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/grids/data-grid/load-save-layout.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.equal((layout.files['App.razor'].match(/public string SavedLayout/g) ?? []).length, 1);

    const dataModel = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/maps/geo-map/binding-data-model.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.match(dataModel.files['App.razor'], /class FlightInfo/);

    const sparkline = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/charts/sparkline/display-types.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.match(sparkline.files['SparklineWaveData.cs'], /class SparklineWaveData/);

    const airplane = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/charts/data-chart/type-scatter-polygon-series.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.match(airplane.files['App.razor'], /AirplaneSeatFillStyling/);

    const airplaneOutline = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/charts/data-chart/type-scatter-polyline-series.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.match(airplaneOutline.files['App.razor'], /AirplaneSeatStrokeStyling/);

    const filter = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/grids/data-grid/column-filter-expressions.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.match(filter.files['App.razor'], /this\.filterColumnEditor/);
    assert.doesNotMatch(filter.files['App.razor'], /this\.FilterColumnEditor/);

    const magnetic = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/charts/data-chart/type-scatter-area-series.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.match(magnetic.files['ScatterMagneticFieldData.cs'], /class ScatterMagneticFieldData/);

    const dense = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/charts/data-chart/type-scatter-hd-series.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.match(dense.files['ScatterHighDensityData.cs'], /class ScatterHighDensityData/);

    const userAnnotation = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/charts/data-chart/user-annotation-layer.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.match(userAnnotation.files['App.razor'], /IgbUserAnnotationInformation pending/);
    assert.match(userAnnotation.files['App.razor'], /fields\.Label = this\.annotationLabel/);
    assert.doesNotMatch(userAnnotation.files['App.razor'], /this\.AnnotationLabel/);

    const doughnut = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/charts/doughnut-chart/selection.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.match(doughnut.files['App.razor'], /this\.selectedSlice/);
    assert.doesNotMatch(doughnut.files['App.razor'], /this\.SelectedSlice/);

    const map = emitProject(
        fs.readFileSync(path.join(examplesRoot, 'samples/maps/geo-map/binding-multiple-shapes.json'), 'utf8'),
        'Blazor', { examplesRoot });
    assert.match(map.files['App.razor'], /sdsPolygons\.ImportCompleted \+= readers\.ReadPolygons/);
    assert.match(map.files['App.razor'], /sdsLocations\.ImportCompleted \+= readers\.ReadPoints/);
    assert.match(map.files['App.razor'], /record\.FieldValues\["POPULATION"\]/);
    assert.match(map.files['App.razor'], /record\.Points\[0\]\[0\]\.Y/);
    assert.match(map.files['App.razor'], /symbolSeries\.DataSource = geoLocations/);
    assert.match(map.files['WorldCities.cs'], /class WorldCities/);
    assert.match(map.files['App.razor'], /GetPointData|DataBind/);
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
