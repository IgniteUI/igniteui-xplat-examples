/// <reference types="vite/client" />
/*
 * A reusable entry point for turning a sample's JSON into the snippets it declares.
 *
 * The other entry points here are command line tools. This one is a function, because the
 * documentation build has to call it while transforming a page: a `json-snippet` block in an .mdx
 * becomes the markup for whichever platform is being generated.
 *
 * It is deliberately the same path the emitter spike's tests exercise — same renderer, same
 * options, same recorder — so that what the documentation build produces is what the suite has
 * already asserted.
 *
 * For now this is bundled from the locally built product TS. Once the renderer work is merged and
 * published, the import block below is the only part that has to change.
 */

import * as fs from "node:fs";
import * as path from "node:path";

import {
    CodeGeneratingComponentRenderer,
    CodeGenerationFolderTemplate,
    CodeGenerationLibrary,
    CodeGenerationLibraryItemType,
    CodeGenerationRendererOptions,
    CodeGenerationSnippetRecorder,
    CodeGenerationTargetPlatforms,
    JsonSchemaEmitter,
    TypeDescriptionPlatform,
} from "igniteui-webcomponents-core";
import { descriptionModules, descriptionTypeMarkers } from "./descriptions";

import { NodeCodeGenerationLibraryFileAccess } from "./node-file-access";

export interface EmittedSnippet {
    /** The snippet id the sample declared, or the default id when it declared none. */
    id: string;
    /** The channel or output region the snippet was taken from. */
    channel: string;
    /** "id:channel". */
    key: string;
    content: string;
}

export interface EmitOptions {
    /** Where the code generation library and editor templates live. */
    examplesRoot: string;
    /**
     * Filled with the refs the renderer had no value for once the definition had been loaded.
     *
     * The renderer's own account, taken after the attempt rather than guessed from the JSON: a name
     * it never resolved is one nothing in the definition or the library answered for. Reading it from
     * the renderer is the only reliable way — walking the JSON cannot tell a library item from a
     * component the definition declares itself.
     */
    missingRefsOut?: string[];
    /** The id given to the snippet a sample does not name. */
    defaultSnippetId?: string;
    /** Emit the component as code behind rather than markup. */
    forceCodeBehind?: boolean;
    /**
     * Style options to start from, before the sample's own $styleOptions are read.
     *
     * The renderer's defaults are what it has always emitted, which is right for a generated
     * project but not for a documentation snippet — the docs keep attributes on one line, and the
     * XAML platforms write no dimensions. A caller states that once here, rather than every sample
     * having to repeat it, and any sample can still override what it needs.
     *
     * Keys are the same names $styleOptions uses.
     */
    styleDefaults?: Record<string, unknown>;
}

export interface EmittedProject {
    /** Template-relative file name to generated content. */
    files: Record<string, string>;
    /** Library references the renderer could not resolve. */
    missingRefs: string[];
}

const fileAccess = new NodeCodeGenerationLibraryFileAccess();

// Loading the library and the description modules is the expensive part, and neither depends on
// the sample. A documentation build emits thousands of snippets, so both are done once.
let cachedLibrary: any = null;
let cachedRoot: string | null = null;

function libraryFor(examplesRoot: string): any {
    if (cachedLibrary !== null && cachedRoot === examplesRoot) return cachedLibrary;
    cachedLibrary = CodeGenerationLibrary.fromFolder(path.join(examplesRoot, "code-gen-library"), fileAccess);
    cachedRoot = examplesRoot;
    return cachedLibrary;
}

// Every description module the package exports. Taken from the package's own surface rather than a
// list, because the set grows with the product and a missing one is a type a sample may not use.
function registerDescriptions(renderer: any): void {
    const context = renderer.context;
    for (const module of descriptionModules()) {
        module.register(context);
    }
}

/**
 * Folds the caller's style defaults into the sample's own $styleOptions, which the sample wins.
 *
 * Merged into the JSON rather than set on the options object directly, so that a default goes
 * through exactly the same reading a sample's own $styleOptions does — several of these are
 * enumerations whose JSON spelling ("singleLine") is not their value, and assigning the string
 * would quietly do nothing.
 */
function applyStyleDefaults(json: string, defaults: Record<string, unknown> | undefined): string {
    if (!defaults) return json;

    let parsed: any;
    try {
        parsed = JSON.parse(json);
    } catch {
        return json;   // not our business to report; loadCodeJson will say so properly
    }
    if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) return json;

    const declared = parsed["$styleOptions"];
    parsed["$styleOptions"] = { ...defaults, ...(declared && typeof declared === "object" ? declared : {}) };
    return JSON.stringify(parsed);
}

/**
 * The description property a platform's own name refers to, on a given component.
 *
 * For anything reading existing platform source rather than writing it: documentation written as
 * dataSource="…" on the web and ItemsSource="…" in XAML is one property, and the description
 * metadata is the only thing that knows that. Returns null when the component has no such property,
 * which is the caller's cue to fall back to the name as written.
 *
 * Component and platform are named as the documentation spells them — "DataGrid", "WinUI".
 */
export function resolvePropertyName(component: string, platformName: string, writtenName: string): string | null {
    const platform = (TypeDescriptionPlatform as any)[platformName];
    if (platform === undefined) return null;

    const context = sharedContext();
    const resolved = context.resolveFromPlatformName(component, platform, writtenName);
    return resolved === undefined ? null : resolved;
}

/**
 * What a platform calls a description property, or null when the component has no such property.
 *
 * The direction a topic needs. A definition writes dataSource and the emitter puts ItemsSource in
 * the XAML it produces; the sentence introducing that snippet has to say the same word, and until
 * now had no way to ask which word that is.
 *
 * Component and platform are named as the documentation spells them — "GeographicMap", "WinUI".
 */
export function platformPropertyName(component: string, platformName: string, propertyName: string): string | null {
    const platform = (TypeDescriptionPlatform as any)[platformName];
    if (platform === undefined) return null;

    const resolved = sharedContext().getPropertyPlatformName(component, platform, propertyName);
    return resolved === undefined ? null : resolved;
}

/**
 * Whether the descriptions know a type by this name, so a documentation term can be recognised as
 * one. Abstract descriptions register metadata without a constructor, so both are asked.
 */
export function isDescriptionType(name: string): boolean {
    const context = sharedContext();
    return context.hasDescriptionConstructor(name) || context.getAllProperties(name) !== null;
}

/** Every property a description declares, or null when no such type is registered. */
export function descriptionProperties(name: string): string[] | null {
    const props = sharedContext().getAllProperties(name);
    return props === undefined ? null : props;
}

// One context, registered once: resolving a name does not depend on any sample, and the
// documentation build asks thousands of times.
let cachedContext: any = null;
function sharedContext(): any {
    if (cachedContext !== null) return cachedContext;
    const options: any = new CodeGenerationRendererOptions();
    const renderer: any = new CodeGeneratingComponentRenderer(
        (CodeGenerationTargetPlatforms as any).WebComponents, options);
    registerDescriptions(renderer);
    cachedContext = renderer.context;
    return cachedContext;
}

/** The platform names this understands, as the documentation build spells them. */
export function isSupportedPlatform(platformName: string): boolean {
    return (CodeGenerationTargetPlatforms as any)[platformName] !== undefined;
}


/**
 * The JSON schema the snippets are written against.
 *
 * Generated from the same description metadata the renderer emits from, so the schema cannot
 * describe a property the renderer would reject, or miss one it would accept.
 */
export function emitJsonSchema(examplesRoot: string): string {
    const types = descriptionTypeMarkers();

    const emitter: any = new (JsonSchemaEmitter as any)(
        types, sharedContext(), libraryFor(examplesRoot));
    return emitter.toString();
}

/**
 * The folder template to emit a platform's snippets from.
 *
 * A platform without one of its own borrows from the platform whose output it shares. Uno emits the
 * same XAML dialect as WinUI, against the same Microsoft.UI.Xaml types, and differs only in how a
 * project is put together — which a snippet never shows. Borrowing beats declaring a second copy
 * that would then have to be kept in step, and beats failing a documentation build over a project
 * file no reader sees.
 */
function templateDirFor(examplesRoot: string, platformName: string): string {
    const borrows: { [key: string]: string } = { Uno: "WinUI" };
    const dir = (name: string) =>
        path.join(examplesRoot, "editor-templates", name, "main-template");
    if (fs.existsSync(dir(platformName))) {
        return dir(platformName);
    }
    const borrowed = borrows[platformName];
    if (borrowed && fs.existsSync(dir(borrowed))) {
        return dir(borrowed);
    }
    throw new Error(`no main-template for ${platformName} at ${dir(platformName)}`);
}

/**
 * Emits every snippet a sample declares, for one platform.
 *
 * Throws rather than returning something half-formed: a documentation build that silently drops a
 * snippet would publish a page with a hole in it, which is worse than failing the build.
 */
export function emitSnippets(json: string, platformName: string, opts: EmitOptions): EmittedSnippet[] {
    const platform = (CodeGenerationTargetPlatforms as any)[platformName];
    if (platform === undefined) {
        throw new Error(`unknown platform: ${platformName}`);
    }

    const templateDir = templateDirFor(opts.examplesRoot, platformName);

    const options: any = new CodeGenerationRendererOptions();
    options.library = libraryFor(opts.examplesRoot);
    options.forceCodeBehind = opts.forceCodeBehind === true;


    const recorder: any = new CodeGenerationSnippetRecorder();
    if (opts.defaultSnippetId && !options.forceCodeBehind) {
        recorder.defaultSnippetId = opts.defaultSnippetId;
    }
    options.snippetRecorder = recorder;

    const renderer: any = new CodeGeneratingComponentRenderer(platform, options);
    registerDescriptions(renderer);

    const template: any = new CodeGenerationFolderTemplate();
    template.fileAccess = fileAccess;
    template.loadTemplate(templateDir);

    renderer.loadCodeJson(applyStyleDefaults(json, opts.styleDefaults));
    const result: any = renderer.emitCode(template);

    // A handler or data source the library does not have produces no code and no complaint, so a
    // misspelled name would publish a page missing the very thing it set out to show.
    if (opts.missingRefsOut) {
        for (const ref of (renderer.getMissingRefs() as string[]) ?? []) {
            if (opts.missingRefsOut.indexOf(ref) < 0) opts.missingRefsOut.push(ref);
        }
    }

    const missing: string[] = result?.getMissingLibraryItems?.() ?? [];
    if (missing.length > 0) {
        throw new Error(`sample refers to library items that do not exist: ${missing.join(", ")}`);
    }

    if (recorder.hasUnclosedZones()) {
        throw new Error("an emitter left a recording zone open — zones are mis-nested");
    }
    const unfulfilled: string[] = recorder.getUnfulfilledNamedRequests();
    if (unfulfilled.length > 0) {
        throw new Error(`snippet asked for library items never emitted: ${unfulfilled.join(", ")}`);
    }

    return (recorder.getSnippets() as any[])
        .map(s => ({ id: s.id, channel: s.channel, key: s.key, content: s.content as string }))
        .sort((a, b) => a.key.localeCompare(b.key));
}

/**
 * Emit a complete runnable sample project with the same renderer/template path used for snippets.
 * This is the Node counterpart of code-exporter-app: the product owns all code generation; this
 * adapter only loads files and returns the populated folder template.
 */
export function emitProject(json: string, platformName: string, opts: EmitOptions): EmittedProject {
    const platform = (CodeGenerationTargetPlatforms as any)[platformName];
    if (platform === undefined) throw new Error(`unknown platform: ${platformName}`);

    const options: any = new CodeGenerationRendererOptions();
    options.library = libraryFor(opts.examplesRoot);
    if (platformName === "Angular") {
        // Angular events expose both sender and args through the EventEmitter payload. Library
        // handlers use the cross-platform (sender, args) signature, so keep that payload intact.
        options.skipAngularEventDestructuring = true;
    }
    const dataGridCollections = platformName === "Angular" || platformName === "React"
        ? extractAngularDataGridCollections(json) : null;
    const mapImagery = platformName === "Angular" || platformName === "React"
        ? extractMapImagery(dataGridCollections?.json ?? json) : null;
    const shapeData = platformName === "Angular" || platformName === "React"
        ? extractShapeData(mapImagery?.json ?? dataGridCollections?.json ?? json) : null;
    const renderer: any = new CodeGeneratingComponentRenderer(platform, options);
    registerDescriptions(renderer);

    const template: any = new CodeGenerationFolderTemplate();
    template.fileAccess = fileAccess;
    template.loadTemplate(templateDirFor(opts.examplesRoot, platformName));
    renderer.loadCodeJson(shapeData?.json ?? mapImagery?.json ?? dataGridCollections?.json ?? json);
    const result: any = renderer.emitCode(template);

    // The result includes description-local names and generated ComponentRenderer properties in
    // its "missing library" set. They are intentionally not library items. Keep only names that
    // neither the definition nor the renderer itself declares so misspelled external items still
    // fail validation.
    const declared = declaredProjectRefs(json);
    const missingLibrary: string[] = (result?.getMissingLibraryItems?.() ?? [])
        .filter((name: string) => !declared.has(name));

    const files: Record<string, string> = {};
    for (const file of template.getFilePaths() as string[]) {
        let content = String(template.getFileOuutput(file));
        // These React wrappers require their props object even when it is empty. The current product
        // emitter still produces their pre-current constructor signatures here.
        if (platformName === "React") {
            content = content.replace(
                /new (Igr(?:SizeScale|CustomPaletteColorScale|LinearContourValueResolver|ValueBrushScale))\(\)/g,
                "new $1({})");
            content = normalizeReactChartSyncProps(content);
        }
        files[file.replace(/\\/g, "/")] = content;
    }
    if (platformName === "Angular") {
        if (dataGridCollections && dataGridCollections.grids.some(grid => grid.collections.length > 0)) {
            normalizeAngularDataGridCollections(files, dataGridCollections.grids);
        }
        if (mapImagery && mapImagery.items.length > 0) {
            normalizeAngularMapImagery(files, mapImagery.items);
        }
        if (shapeData && shapeData.items.length > 0) {
            normalizeAngularShapeData(files, shapeData.items);
        }
        normalizeAngularTemplateColumns(files);
        normalizeAngularPackageImports(files);
        normalizeAngularDuplicateMembers(files);
        normalizeAngularEventBindings(files);
        normalizeAngularReferenceCasing(files);
    } else if (platformName === "React") {
        if (dataGridCollections && dataGridCollections.grids.some(grid => grid.collections.length > 0)) {
            normalizeReactDataGridCollections(files, dataGridCollections.grids);
        }
        if (mapImagery && mapImagery.items.length > 0) normalizeReactMapImagery(files, mapImagery.items);
        if (shapeData && shapeData.items.length > 0) normalizeReactShapeData(files, shapeData.items);
        normalizeReactEmptyModelElements(files);
    }
    return { files, missingRefs: missingLibrary };
}

type AngularGridCollection = { property: string; className: string; itemClass: string; items: any[] };
type AngularGridCollections = { name: string; collections: AngularGridCollection[] };
type MapImageryModel = { mapName: string; name: string; className: string; value: Record<string, any> };
type ShapeDataModel = {
    seriesName: string;
    seriesJsonName: string;
    seriesClassName: string;
    name: string;
    value: Record<string, any>;
};

function extractMapImagery(json: string): { json: string; items: MapImageryModel[] } | null {
    let parsed: any;
    try { parsed = JSON.parse(json); } catch { return null; }
    const items: MapImageryModel[] = [];
    (function visit(node: any): void {
        if (Array.isArray(node)) { node.forEach(visit); return; }
        if (!node || typeof node !== "object") return;
        const imagery = node.type === "GeographicMap" ? node.backgroundContent : null;
        if (imagery && typeof imagery === "object" && typeof imagery.type === "string" &&
            imagery.type.endsWith("Imagery")) {
            const value = { ...imagery };
            delete value.type; delete value.name;
            items.push({
                mapName: typeof node.name === "string" ? node.name : "",
                name: typeof imagery.name === "string" ? imagery.name : `codegenBackground${items.length}`,
                className: `Igx${imagery.type}`,
                value,
            });
            // Angular map imagery is a model assigned to backgroundContent, not an Angular
            // component with an element selector. Let the adapter materialize it in TypeScript.
            delete node.backgroundContent;
        }
        Object.values(node).forEach(visit);
    })(parsed.descriptions ?? parsed);
    return { json: JSON.stringify(parsed), items };
}

function normalizeAngularMapImagery(files: Record<string, string>, items: MapImageryModel[]): void {
    const tsName = Object.keys(files).find(name => name.endsWith("app.component.ts"));
    if (!tsName) throw new Error("Angular template has no app component to receive map imagery");
    if (items.some(item => !item.mapName)) throw new Error("Angular map imagery needs a named map");

    let source = files[tsName];
    const missingClasses = [...new Set(items.map(item => item.className))]
        .filter(className => !new RegExp(`import\\s*\\{[^}]*\\b${className}\\b[^}]*\\}\\s*from\\s*['\"]igniteui-angular-maps['\"]`, "s").test(source));
    if (missingClasses.length > 0) {
        source = `import { ${missingClasses.sort().join(", ")} } from 'igniteui-angular-maps';\n` + source;
    }
    const declarations = items.map(item =>
        `private readonly ${item.name} = Object.assign(new ${item.className}(), ${JSON.stringify(item.value)} as any);`);
    const assignments = items.map(item => `this.${item.mapName}.backgroundContent = this.${item.name};`);
    files[tsName] = source
        .replace(/(export class AppComponent[^\{]*\{)/, `$1\n\t${declarations.join("\n\t")}`)
        .replace(/(ngAfterViewInit\(\): void\s*\{)/, `$1\n\t\t${assignments.join("\n\t\t")}`);
}

function extractShapeData(json: string): { json: string; items: ShapeDataModel[] } | null {
    let parsed: any;
    try { parsed = JSON.parse(json); } catch { return null; }
    const items: ShapeDataModel[] = [];
    (function visit(node: any): void {
        if (Array.isArray(node)) { node.forEach(visit); return; }
        if (!node || typeof node !== "object") return;
        const source = node.shapefileDataSource;
        if (source && typeof source === "object" && source.type === "ShapeDataSource") {
            const value = { ...source };
            delete value.type; delete value.name;
            items.push({
                seriesName: typeof node.name === "string" ? lowerFirst(node.name) : "",
                seriesJsonName: typeof node.name === "string" ? node.name : "",
                seriesClassName: typeof node.type === "string" ? `Igr${node.type}` : "",
                name: typeof source.name === "string" ? source.name : `codegenShapeData${items.length}`,
                value,
            });
            delete node.shapefileDataSource;
        }
        Object.values(node).forEach(visit);
    })(parsed.descriptions ?? parsed);
    return { json: JSON.stringify(parsed), items };
}

function normalizeAngularShapeData(files: Record<string, string>, items: ShapeDataModel[]): void {
    const tsName = Object.keys(files).find(name => name.endsWith("app.component.ts"));
    if (!tsName) throw new Error("Angular template has no app component to receive shape data");
    if (items.some(item => !item.seriesName)) throw new Error("Angular shape data needs a named series");
    let source = files[tsName];
    if (!/import\s*\{[^}]*\bIgxShapeDataSource\b[^}]*\}\s*from\s*['"]igniteui-angular-core['"]/s.test(source)) {
        source = "import { IgxShapeDataSource } from 'igniteui-angular-core';\n" + source;
    }
    const declarations = items.map(item =>
        `private readonly ${item.name} = Object.assign(new IgxShapeDataSource(), ${JSON.stringify(item.value)} as any);`);
    const assignments = items.flatMap(item => [
        `this.${item.seriesName}.shapefileDataSource = this.${item.name};`,
        `this.${item.name}.dataBind();`,
    ]);
    files[tsName] = source
        .replace(/(export class AppComponent[^\{]*\{)/, `$1\n\t${declarations.join("\n\t")}`)
        .replace(/(ngAfterViewInit\(\): void\s*\{)/, `$1\n\t\t${assignments.join("\n\t\t")}`);
}

function lowerFirst(value: string): string {
    return value.length > 0 ? value[0].toLowerCase() + value.slice(1) : value;
}

function normalizeAngularTemplateColumns(files: Record<string, string>): void {
    const htmlName = Object.keys(files).find(name => name.endsWith("app.component.html"));
    const tsName = Object.keys(files).find(name => name.endsWith("app.component.ts"));
    if (!htmlName || !tsName) return;
    const refs = new Set<string>();
    files[htmlName] = files[htmlName].replace(
        /(<igx-template-column\b(?:(?:"[^"]*")|[^>])*?)\s+\[template\]="([A-Za-z_$][\w$]*)"/gs,
        (_whole, start, ref) => {
            refs.add(ref);
            return `${start}\n          (cellUpdating)="this.${ref}CellUpdating($event.sender, $event.args)"`;
        });
    if (refs.size === 0) return;

    let source = files[tsName];
    if (!/import\s*\{[^}]*\bIgxTemplateCellUpdatingEventArgs\b[^}]*\}\s*from\s*['"]igniteui-angular-data-grids['"]/s.test(source)) {
        source = "import { IgxTemplateCellUpdatingEventArgs } from 'igniteui-angular-data-grids';\n" + source;
    }
    const handlers = [...refs].map(ref => `
\tpublic ${ref}CellUpdating(sender: any, args: IgxTemplateCellUpdatingEventArgs): void {
\t\tconst content = args.content;
\t\tthis.codegenTemplateViews.get(content)?.destroy();
\t\twhile (content.firstChild) content.removeChild(content.firstChild);
\t\tconst view = this.${ref}.createEmbeddedView({ $implicit: args.cellInfo });
\t\tview.detectChanges();
\t\tfor (const node of view.rootNodes) content.appendChild(node);
\t\tthis.codegenTemplateViews.set(content, view);
\t}
`).join("");
    files[tsName] = source
        .replace(/(export class AppComponent[^\{]*\{)/,
            "$1\n\tprivate readonly codegenTemplateViews = new WeakMap<Element, { destroy(): void }>();")
        .replace(/\n}\s*$/, `${handlers}\n}\n`);
}

function normalizeAngularPackageImports(files: Record<string, string>): void {
    for (const name of Object.keys(files).filter(name => name.endsWith(".ts"))) {
        // ZoomSlider is part of the charts package. The product renderer currently emits only its
        // component type import through the former navigation package location.
        files[name] = files[name].replace(
            /from\s+(['"])igniteui-angular-navigation\1/g,
            "from 'igniteui-angular-charts'");
        files[name] = files[name].replace(
            /from\s+(['"])igniteui-angular-grids\1/g,
            "from 'igniteui-angular-data-grids'");
    }
}

function normalizeAngularDuplicateMembers(files: Record<string, string>): void {
    const tsName = Object.keys(files).find(name => name.endsWith("app.component.ts"));
    if (!tsName) return;
    files[tsName] = deduplicateSharedHolderState(files[tsName]);
}

function deduplicateSharedHolderState(source: string): string {
    const seen = new Set<string>();
    return source.split("\n").filter(line => {
        const declaration = line.trim();
        if (!/^(?:public|private|protected)\s+(?:readonly\s+)?[A-Za-z_$][\w$]*\s*(?::[^;=]+)?(?:=[^;]*)?;$/.test(declaration)) {
            return true;
        }
        // Load and save are separate library holders but their event-handler regions are merged
        // into one component. Only their intentionally shared state should be coalesced; identical
        // declarations in distinct supporting classes must remain independent.
        if (!/^(?:public|private|protected)\s+savedLayout\s*:/.test(declaration)) return true;
        if (seen.has(declaration)) return false;
        seen.add(declaration);
        return true;
    }).join("\n");
}

function extractAngularDataGridCollections(json: string): { json: string; grids: AngularGridCollections[] } | null {
    let parsed: any;
    try { parsed = JSON.parse(json); } catch { return null; }
    const definitions = [
        ["groupDescriptions", "IgxColumnGroupDescriptionCollection", "IgxColumnGroupDescription"],
        ["summaryDescriptions", "IgxColumnSummaryDescriptionCollection", "IgxColumnSummaryDescription"],
        ["sortDescriptions", "IgxColumnSortDescriptionCollection", "IgxColumnSortDescription"],
    ];
    const grids: AngularGridCollections[] = [];
    (function visit(node: any): void {
        if (Array.isArray(node)) { node.forEach(visit); return; }
        if (!node || typeof node !== "object") return;
        if (node.type === "DataGrid") {
            const collections: AngularGridCollection[] = [];
            for (const [property, className, itemClass] of definitions) {
                if (!Array.isArray(node[property])) continue;
                collections.push({ property, className, itemClass, items: node[property] });
                delete node[property];
            }
            grids.push({ name: typeof node.name === "string" ? node.name : "", collections });
        }
        Object.values(node).forEach(visit);
    })(parsed.descriptions ?? parsed);
    return { json: JSON.stringify(parsed), grids };
}

function normalizeAngularDataGridCollections(files: Record<string, string>, grids: AngularGridCollections[]): void {
    const tsName = Object.keys(files).find(name => name.endsWith("app.component.ts"));
    if (!tsName) throw new Error("Angular template has no app component to receive DataGrid collections");

    const used = new Set<string>();
    const declarations: string[] = [];
    const assignments: string[] = [];
    grids.forEach((grid, suffix) => {
        if (grid.collections.length > 0 && !grid.name) throw new Error("Angular DataGrid collections need a named grid");
        for (const collection of grid.collections) {
            used.add(collection.className); used.add(collection.itemClass);
            const field = `codegen${collection.property[0].toUpperCase()}${collection.property.slice(1)}${suffix}`;
            const items = collection.items.map((item, index) => {
                const value = { ...item }; delete value.type;
                return `const item${index} = Object.assign(new ${collection.itemClass}(), ${JSON.stringify(value)} as any); collection.add(item${index});`;
            }).join(" ");
            declarations.push(`public readonly ${field} = (() => { const collection = new ${collection.className}(); ${items} return collection; })();`);
            assignments.push(`for (const item of this.${field}) this.${grid.name}.${collection.property}.add(item);`);
        }
    });
    const imports = `import { ${[...used].sort().join(", ")} } from 'igniteui-angular-data-grids';\n`;
    files[tsName] = imports + files[tsName]
        .replace(/(export class AppComponent[^\{]*\{)/, `$1\n\t${declarations.join("\n\t")}`)
        .replace(/(ngAfterViewInit\(\): void\s*\{)/, `$1\n\t\t${assignments.join("\n\t\t")}`);
}

function normalizeAngularEventBindings(files: Record<string, string>): void {
    const htmlName = Object.keys(files).find(name => name.endsWith("app.component.html"));
    const tsName = Object.keys(files).find(name => name.endsWith("app.component.ts"));
    if (!htmlName || !tsName) return;
    const twoArgumentHandlers = new Set<string>();
    for (const match of files[tsName].matchAll(/(?:public\s+)?([A-Za-z_$][\w$]*)\s*\(([^)]*)\)\s*:/g)) {
        if (match[2].split(",").length >= 2) twoArgumentHandlers.add(match[1]);
    }
    files[htmlName] = files[htmlName].replace(/this\.([A-Za-z_$][\w$]*)\(\$event\)/g,
        (whole, name) => twoArgumentHandlers.has(name) ? `this.${name}($event.sender, $event.args)` : whole);
}

function normalizeAngularReferenceCasing(files: Record<string, string>): void {
    const htmlName = Object.keys(files).find(name => name.endsWith("app.component.html"));
    const tsName = Object.keys(files).find(name => name.endsWith("app.component.ts"));
    if (!htmlName || !tsName) return;
    const names = new Map<string, string>();
    for (const pattern of [/\b(?:private|public)\s+(?:readonly\s+)?([A-Za-z_$][\w$]*)/g,
        /\bget\s+([A-Za-z_$][\w$]*)\s*\(/g]) {
        for (const match of files[tsName].matchAll(pattern)) names.set(match[1].toLowerCase(), match[1]);
    }
    files[htmlName] = files[htmlName].replace(/(\[[^\]]+\]="|\([^)]*\)="|\*[^=\s]+=")([^"]+)(")/g,
        (_whole, prefix, expression, suffix) => prefix + expression.replace(/\b[A-Za-z_$][\w$]*\b/g, token => {
            const declared = names.get(token.toLowerCase());
            return declared && declared !== token ? declared : token;
        }) + suffix);
}

function normalizeReactDataGridCollections(files: Record<string, string>, grids: AngularGridCollections[]): void {
    const sourceName = Object.keys(files).find(name => name.endsWith("index.tsx"));
    if (!sourceName) throw new Error("React template has no index.tsx to receive DataGrid collections");
    const used = new Set<string>();
    let source = files[sourceName];
    for (const grid of grids) {
        if (grid.collections.length > 0 && !grid.name) throw new Error("React DataGrid collections need a named grid");
        const statements: string[] = [];
        grid.collections.forEach((collection, collectionIndex) => {
            used.add(collection.itemClass.replace(/^Igx/, "Igr"));
            const itemClass = collection.itemClass.replace(/^Igx/, "Igr");
            collection.items.forEach((item, index) => {
                const value = { ...item }; delete value.type;
                const variable = `item${collectionIndex}_${index}`;
                statements.push(`const ${variable} = Object.assign(new ${itemClass}(), ${JSON.stringify(value)} as any); r.${collection.property}.add(${variable});`);
            });
        });
        if (statements.length > 0) {
            source = source.replace(`this.${grid.name} = r;`,
                `if (r && this.${grid.name} !== r) { ${statements.join(" ")} }\n        this.${grid.name} = r;`);
        }
    }
    source = `import { ${[...used].sort().join(", ")} } from 'igniteui-react-data-grids';\n` + source;
    files[sourceName] = source;
}

function normalizeReactMapImagery(files: Record<string, string>, items: MapImageryModel[]): void {
    const sourceName = Object.keys(files).find(name => name.endsWith("index.tsx"));
    if (!sourceName) throw new Error("React template has no index.tsx to receive map imagery");
    if (items.some(item => !item.mapName)) throw new Error("React map imagery needs a named map");
    let source = files[sourceName];
    const classes = [...new Set(items.map(item => item.className.replace(/^Igx/, "Igr")))];
    const missing = classes.filter(className =>
        !new RegExp(`import\\s*\\{[^}]*\\b${className}\\b[^}]*\\}\\s*from\\s*['\"]igniteui-react-maps['\"]`, "s").test(source));
    if (missing.length > 0) source = `import { ${missing.sort().join(", ")} } from 'igniteui-react-maps';\n` + source;
    for (const item of items) {
        const className = item.className.replace(/^Igx/, "Igr");
        const declaration = `private ${item.name} = Object.assign(new ${className}(), ${JSON.stringify(item.value)} as any);`;
        source = source
            .replace(/(export default class Sample[^\{]*\{)/, `$1\n    ${declaration}`)
            .replace(`this.${item.mapName} = r;`,
                `this.${item.mapName} = r;\n        if (r) r.backgroundContent = this.${item.name};`);
    }
    files[sourceName] = source;
}

function normalizeReactShapeData(files: Record<string, string>, items: ShapeDataModel[]): void {
    const sourceName = Object.keys(files).find(name => name.endsWith("index.tsx"));
    if (!sourceName) throw new Error("React template has no index.tsx to receive shape data");
    if (items.some(item => !item.seriesName || !item.seriesJsonName || !item.seriesClassName)) {
        throw new Error("React shape data needs a named series");
    }
    let source = files[sourceName];
    if (!/import\s*\{[^}]*\bIgrShapeDataSource\b[^}]*\}\s*from\s*['"]igniteui-react-core['"]/s.test(source)) {
        source = "import { IgrShapeDataSource } from 'igniteui-react-core';\n" + source;
    }
    for (const item of items) {
        const declaration = `private ${item.name} = Object.assign(new IgrShapeDataSource(), ${JSON.stringify(item.value)} as any);`;
        const refName = `${item.seriesName}Ref`;
        const method = `
    private ${refName}(r: ${item.seriesClassName}) {
        this.${item.seriesName} = r;
        if (r) {
            r.shapefileDataSource = this.${item.name};
            this.${item.name}.dataBind();
        }
    }
`;
        source = source
            .replace(/(export default class Sample[^\{]*\{)/, `$1\n    ${declaration}${method}`)
            .replace(/(super\(props\);)/, `$1\n        this.${refName} = this.${refName}.bind(this);`);
        const tagPattern = new RegExp(`<${item.seriesClassName}\\b((?:"[^"]*"|[^>])*)>`, "gs");
        source = source.replace(tagPattern, (tag, attributes) => {
            if (!attributes.includes(`name="${item.seriesJsonName}"`) || attributes.includes("ref={")) return tag;
            return `<${item.seriesClassName}${attributes}\n                        ref={this.${refName}}>`;
        });
    }
    files[sourceName] = source;
}

function normalizeReactEmptyModelElements(files: Record<string, string>): void {
    for (const name of Object.keys(files).filter(name => name.endsWith(".tsx"))) {
        files[name] = files[name]
            .replace(/from\s+(['"])igniteui-react-navigation\1/g, "from 'igniteui-react-charts'")
            .replace(/from\s+(['"])igniteui-react-grids\1/g, "from 'igniteui-react-data-grids'")
            .replace(
                /<IgrRadialGaugeRange\b((?:(?:"[^"]*")|[^>])*)>\s*<\/IgrRadialGaugeRange>/gs,
                "<IgrRadialGaugeRange$1 />");
        files[name] = deduplicateSharedHolderState(files[name]);
    }
}

function normalizeReactChartSyncProps(content: string): string {
    return content.replace(/<IgrDataChart\b[^>]*>/gs, tag => {
        const values: string[] = [];
        for (const property of ["syncChannel", "synchronizeHorizontally", "synchronizeVertically"]) {
            const pattern = new RegExp(`\\s+${property}="([^"]*)"`);
            const match = tag.match(pattern);
            if (!match) continue;
            const value = match[1] === "true" || match[1] === "false" ? match[1] : JSON.stringify(match[1]);
            values.push(`${property}: ${value}`);
            tag = tag.replace(pattern, "");
        }
        return values.length === 0 ? tag : tag.replace(/>$/, `\n                    {...({ ${values.join(", ")} } as any)}>`);
    });
}

function declaredProjectRefs(json: string): Set<string> {
    const refs = new Set<string>();
    let parsed: any;
    try { parsed = JSON.parse(json); } catch { return refs; }
    (function visit(node: any): void {
        if (Array.isArray(node)) { node.forEach(visit); return; }
        if (node === null || typeof node !== "object") return;
        if (typeof node.name === "string") refs.add(node.name);
        // componentRendererRef asks codegen to synthesize a renderer property with this name.
        if (typeof node.componentRendererRef === "string") refs.add(node.componentRendererRef);
        Object.values(node).forEach(visit);
    })(parsed);
    return refs;
}

/** The snippet id used when a block filters a sample down rather than naming its own snippets. */
const FILTERED_SNIPPET_ID = "doc";

/**
 * Emits a part of an existing sample: the sample as the source, narrowed to the properties a
 * documentation block is about.
 *
 * A topic showing a sample usually wants a few lines of it, not the thirty properties the running
 * sample carries. Rather than restating those lines — which is how the two drift apart, and they
 * have — the block names the sample and says which properties it is illustrating.
 *
 * The sample is a source, not an authority. A topic may be illustrating a scenario the peered
 * sample does not cover, so `overrides` can change or add anything, and a block that shares nothing
 * with the sample should carry its own definition instead.
 *
 * Returns null when nothing was captured, which means the properties named are not on the element.
 */
export function emitSampleSubset(
    sampleJson: string,
    platformName: string,
    opts: EmitOptions & { include?: string[]; overrides?: Record<string, unknown> },
): string | null {
    let parsed: any;
    try {
        parsed = JSON.parse(sampleJson);
    } catch (e: any) {
        throw new Error(`sample is not valid JSON: ${e.message}`);
    }

    // A sample wraps its component in descriptions.content; a snippet written inline may not.
    const root = parsed && parsed.descriptions && parsed.descriptions.content
        ? parsed.descriptions.content
        : parsed;
    if (!root || typeof root !== "object") {
        throw new Error("sample has no component to emit");
    }

    if (opts.overrides) {
        for (const [name, value] of Object.entries(opts.overrides)) {
            root[name] = value;
        }
    }

    if (opts.include && opts.include.length > 0) {
        // Marking the element and the wanted properties makes everything else fall away: a snippet
        // with any inclusion records only what is included. Same mechanism a sample uses to name
        // its own snippets, driven from here instead.
        root["$type"] = `+${FILTERED_SNIPPET_ID}:markup`;
        for (const name of opts.include) {
            root[`$${name}`] = `+${FILTERED_SNIPPET_ID}:markup`;
        }
    }

    const emitted = emitSnippets(JSON.stringify(parsed), platformName, {
        ...opts,
        defaultSnippetId: opts.include && opts.include.length > 0 ? undefined : opts.defaultSnippetId,
    });

    const wanted = opts.include && opts.include.length > 0
        ? emitted.filter(s => s.id === FILTERED_SNIPPET_ID)
        : emitted;
    if (wanted.length === 0) return null;
    return wanted[0].content;
}

/**
 * The single snippet a sample declares, which is the common case for a documentation block.
 * Returns null when the sample produced nothing for this platform.
 */
export function emitSingleSnippet(json: string, platformName: string, opts: EmitOptions): string | null {
    const snippets = emitSnippets(json, platformName, opts);
    if (snippets.length === 0) return null;
    if (snippets.length === 1) return snippets[0].content;

    const named = opts.defaultSnippetId
        ? snippets.filter(s => s.id === opts.defaultSnippetId)
        : [];
    if (named.length === 1) return named[0].content;

    throw new Error(
        `sample declared ${snippets.length} snippets (${snippets.map(s => s.key).join(", ")}); ` +
        `a documentation block takes one, so name which is wanted`);
}

/* ------------------------------------------------------------- the library, for a browser */

/**
 * The code generation library, emitted for a platform, the way the library project emitter emits it.
 *
 * That tool exists to compile every library item once, and it works by handing each item to the code
 * generating renderer against a mock description and reading back the file the renderer wrote. This
 * is the same sequence, in node, through the same classes — not a reimplementation that walks the
 * library folder and guesses which files are data. A guess gets the easy items right and is wrong
 * about every item whose content the renderer transforms, and the two would drift the moment either
 * side changed.
 *
 * What it is for: loading samples in a browser. A sample binds to its data and handlers by name, and
 * a live renderer resolves those names through a lookup the host provides. That lookup is exactly
 * what the emitter's libraryManager is, so it is returned here too, generated from the same item
 * information.
 *
 * The item templates come from the library project emitter's own templates directory, so there is one
 * copy of them; pass templatesRoot when it is somewhere other than beside that tool.
 */
export interface EmittedLibrary {
    /** File name to content, as the emitter would have written them. */
    files: Record<string, string>;
    /** The lookup a host resolves references through, keyed by item name. */
    manager: string;
    managerFile?: string;
    /** What went wrong per item, for the items that produced nothing. */
    problems: { item: string; reason: string }[];
    dataItems: number;
    handlerItems: number;
}

interface LibraryItemInfo {
    name: string;
    isData: boolean;
    /** Whether the module exports the item's own type rather than a holder wrapped around it. */
    isOwnType: boolean;
    hasRequiredStyle: boolean;
    accessPath: string;
}

/**
 * Which of the named library items have nothing for a platform.
 *
 * A definition naming an item the library cannot answer for on a platform does not emit there, and the
 * reason is the library rather than the definition: the item was written for some platforms and not
 * others. Asked for by name so a caller can check what one topic depends on rather than the whole
 * library.
 */
export function itemsMissingForPlatform(platformName: string, opts: {
    examplesRoot: string;
    items?: string[];
}): string[] {
    const platform = (CodeGenerationTargetPlatforms as any)[platformName];
    if (platform === undefined) {
        throw new Error(`unknown platform: ${platformName}`);
    }
    const library: any = libraryFor(opts.examplesRoot);
    const names: string[] = opts.items ?? (library.getItemNames?.() ?? library.getKeys());
    const missing: string[] = [];
    for (const name of names) {
        if (!library.hasItem(name)) {
            missing.push(name);
            continue;
        }
        const content = library.getItem(name).getContentForPlatform(platform);
        if (content === null || content === undefined) {
            missing.push(name);
        }
    }
    return missing;
}

export function emitLibrary(platformName: string, opts: {
    examplesRoot: string;
    templatesRoot?: string;
    only?: string[];
    /**
     * Item names whose data keeps the casing it was authored in, or true for all of them.
     *
     * Casing is altered in concert: when the emitter camelises a data item's members it camelises the
     * member paths in the markup with it, so a generated sample matches itself. A caller that has the
     * data emitted here but the paths from somewhere else — a live renderer reading the sample's own
     * JSON — has only one of the two halves, and asking for the data unaltered is how the two agree.
     */
    skipAlterDataCasing?: boolean | string[];
}): EmittedLibrary {
    const platform = (CodeGenerationTargetPlatforms as any)[platformName];
    if (platform === undefined) {
        throw new Error(`unknown platform: ${platformName}`);
    }
    if (platformName === "Blazor") {
        return emitBlazorLibrary(platform, opts, libraryFor(opts.examplesRoot));
    }
    if (platformName === "WinUI" || platformName === "Uno") {
        return emitNativeXamlLibrary(platformName, platform, opts, libraryFor(opts.examplesRoot));
    }
    if (platformName !== "WebComponents" && platformName !== "React" && platformName !== "Angular") {
        // The item templates and the shape of the lookup are per platform.
        throw new Error(`emitLibrary is only implemented for the web platforms, not ${platformName}`);
    }

    const templateDir = itemTemplateDirFor(platformName, opts.templatesRoot);
    const library: any = libraryFor(opts.examplesRoot);
    const names: string[] = opts.only ?? (library.getItemNames?.() ?? library.getKeys());

    // A renderer per item, sharing one registered context — which is what the library project
    // emitter does, and not an optimisation. An emitter keeps state across an emission: the set of
    // library items it has already written is what stops a supporting class being emitted twice. Kept
    // across items, that state makes every item after the first carry the ones before it — the same
    // class declared three times in one file. The context is the part that is safe to share, and
    // registering the description modules into it is the slow part.
    let context: any = null;
    const rendererFor = (): any => {
        const options: any = new CodeGenerationRendererOptions();
        options.library = library;
        options.forceHelperLookups = true;
        options.skipAngularEventDestructuring = true;
        if (context !== null) {
            options.reusedContext = context;
            return new CodeGeneratingComponentRenderer(platform, options);
        }
        const first: any = new CodeGeneratingComponentRenderer(platform, options);
        registerDescriptions(first);
        context = first.context;
        return first;
    };

    const files: Record<string, string> = {};
    const problems: { item: string; reason: string }[] = [];
    const tracked: LibraryItemInfo[] = [];

    // A queue rather than a loop over the names asked for: a library item can import another one —
    // the airports are derived from the flights — and an item whose neighbour was left out does not
    // load. Whatever an emitted file imports from beside it is added and emitted too, until nothing
    // new appears. Emitting the whole library instead would work as well, and is what the library
    // project emitter does; a caller asking for a subset is asking for a smaller module graph.
    const queue: string[] = [...names];
    const seen = new Set<string>(names);

    while (queue.length > 0) {
        const name = queue.shift() as string;
        if (!library.hasItem(name)) {
            problems.push({ item: name, reason: "no such library item" });
            continue;
        }
        const item: any = library.getItem(name);

        // What this item requires is emitted as an item of its own as well as into this one, because a
        // request for a supporting item resolves against the library: an item whose types are only
        // inlined into its requirer is not there to be asked for.
        const requires: string[] | null = item.getRequiresForPlatform(platform);
        if (requires !== null && requires !== undefined) {
            for (const required of requires) {
                if (seen.has(required) || !library.hasItem(required)) continue;
                seen.add(required);
                queue.push(required);
            }
        }

        const content: any = item.getContentForPlatform(platform);
        if (content === null || content === undefined) {
            // Nothing for this platform, which is ordinary: an item can be declared for the XAML
            // platforms alone.
            continue;
        }

        const template: any = new CodeGenerationFolderTemplate();
        template.fileAccess = fileAccess;
        template.loadTemplate(templateDir);

        // The renderer needs something to be emitting into before an item is anything; a description
        // that binds nothing is enough, and is what the emitter uses.
        const renderer: any = rendererFor();
        const skipCasing = opts.skipAlterDataCasing === true ||
            (Array.isArray(opts.skipAlterDataCasing) && opts.skipAlterDataCasing.indexOf(name) >= 0) ||
            content.skipAlterDataCasing === true;
        renderer.loadCodeJson(mockDescription(skipCasing));
        renderer.markRefUsed(name);
        renderer.emitCode(template);

        const emitted = outputOf(template);
        const dataFile = `${name}.ts`;
        if (emitted[dataFile] !== undefined) {
            files[dataFile] = emitted[dataFile];
            enqueueSiblings(emitted[dataFile], library, seen, queue);
            tracked.push({
                name, isData: true, isOwnType: true, hasRequiredStyle: false,
                accessPath: `[() => new ${name}(), () => new ${name}()]`,
            });
            continue;
        }
        // A supporting item declares a type of its own, so it is emitted as that type and reached as
        // one: no holder, the same way a code based data item is its own class. An item asks for one
        // through CodeGenHelper rather than constructing it, and this is what that request resolves
        // against — so the name it is registered under is the name the request states.
        if (item.type === CodeGenerationLibraryItemType.Supporting) {
            const declarations = emitted["supporting.ts"];
            if (declarations !== undefined) {
                files[`${name}.ts`] = declarations;
                enqueueSiblings(declarations, library, seen, queue);
                // Requestable only when the item declares the type its own name states, the way a code
                // based data item does. An item declaring several types — a family of styling
                // strategies, say — is emitted for the items that require it and is not something to
                // ask for by name, so registering it under a type that does not exist is the one thing
                // not to do: the import alone would stop the library loading.
                if (declaresType(declarations, name)) {
                    tracked.push({
                        name, isData: false, isOwnType: true, hasRequiredStyle: false,
                        accessPath: `[() => new ${name}(), () => new ${name}()]`,
                    });
                }
                continue;
            }
            problems.push({ item: name, reason: "no supporting template output to emit its type from" });
            continue;
        }

        const holderFile = emitted["handler.ts"] !== undefined ? "handler.ts"
            : emitted["template.ts"] !== undefined ? "template.ts" : null;
        if (holderFile !== null) {
            const holder = emitted[holderFile].split("PlaceholderHolder").join(`${name}Holder`);
            files[`${name}.ts`] = holder;
            enqueueSiblings(holder, library, seen, queue);
            tracked.push({
                name, isData: false, isOwnType: false,
                hasRequiredStyle: holder.indexOf("requiredStyles") >= 0,
                // A handler is reached through its holder, and bound to it, because the emitter
                // writes it as a method that refers to the holder's own fields.
                accessPath: `[() => new ${name}Holder(), () => { const h = new ${name}Holder(); ` +
                    `const item = (h as any)['${camelize(name)}']; ` +
                    `return typeof item === 'function' ? item.bind(h) : item; }]`,
            });
            continue;
        }
        problems.push({ item: name, reason: `emitted none of ${Object.keys(emitted).join(", ") || "no files"}` });
    }

    return {
        files,
        manager: managerFor(tracked),
        problems,
        dataItems: tracked.filter(i => i.isData).length,
        handlerItems: tracked.filter(i => !i.isData).length,
    };
}

function emitBlazorLibrary(platform: any, opts: {
    examplesRoot: string;
    templatesRoot?: string;
    only?: string[];
    skipAlterDataCasing?: boolean | string[];
}, library: any): EmittedLibrary {
    const templateDir = path.join(opts.templatesRoot ?? "", "blazor-template");
    if (!fs.existsSync(templateDir)) throw new Error(`no blazor-template found at ${templateDir}`);
    const names: string[] = opts.only ?? (library.getItemNames?.() ?? library.getKeys());
    const queue = [...names];
    const seen = new Set(names);
    const files: Record<string, string> = {};
    const problems: { item: string; reason: string }[] = [];
    const tracked: { name: string; access?: string; script?: boolean }[] = [];
    let dataItems = 0;
    let handlerItems = 0;
    let context: any = null;

    const rendererFor = (): any => {
        const options: any = new CodeGenerationRendererOptions();
        options.library = library;
        options.forceHelperLookups = true;
        if (context !== null) options.reusedContext = context;
        const renderer: any = new CodeGeneratingComponentRenderer(platform, options);
        if (context === null) { registerDescriptions(renderer); context = renderer.context; }
        return renderer;
    };

    while (queue.length > 0) {
        const name = queue.shift() as string;
        if (!library.hasItem(name)) { problems.push({ item: name, reason: "no such library item" }); continue; }
        const item: any = library.getItem(name);
        const requires: string[] | null = item.getRequiresForPlatform(platform);
        for (const required of requires ?? []) {
            if (!seen.has(required) && library.hasItem(required)) { seen.add(required); queue.push(required); }
        }
        const content: any = item.getContentForPlatform(platform);
        if (content === null || content === undefined) continue;
        const template: any = new CodeGenerationFolderTemplate();
        template.fileAccess = fileAccess;
        template.loadTemplate(templateDir);
        const renderer = rendererFor();
        const skipCasing = opts.skipAlterDataCasing === true ||
            (Array.isArray(opts.skipAlterDataCasing) && opts.skipAlterDataCasing.includes(name)) ||
            content.skipAlterDataCasing === true;
        renderer.loadCodeJson(mockDescription(skipCasing));
        renderer.markRefUsed(name);
        renderer.emitCode(template);
        const emitted = outputOf(template);

        if (item.type === CodeGenerationLibraryItemType.Data) {
            const source = emitted[`${name}.cs`];
            if (source === undefined) { problems.push({ item: name, reason: "no data source emitted" }); continue; }
            files[`${name}.cs`] = "using System;\nusing System.Collections.Generic;\n" +
                "using System.Collections.ObjectModel;\nusing System.Linq;\n\n" + source;
            enqueueSiblings(source, library, seen, queue);
            tracked.push({ name, access: `new Tuple<Func<object>, Func<object>>(() => new ${name}(), () => new ${name}())` });
            dataItems++;
            continue;
        }
        if (item.type === CodeGenerationLibraryItemType.Supporting) {
            const source = emitted["supporting.cs"];
            if (source === undefined) { problems.push({ item: name, reason: "no supporting source emitted" }); continue; }
            files[`${name}.cs`] = source.split("PlaceholderHolder").join(`${name}Holder`);
            tracked.push({ name, access: `new Tuple<Func<object>, Func<object>>(() => new ${name}Holder(), () => new ${name}Holder())` });
            handlerItems++;
            continue;
        }
        const stem = item.type === CodeGenerationLibraryItemType.EventHandler ? "handler" : "template";
        if (content.isJSContent === true) {
            const source = emitted[`${stem}.js`];
            if (source === undefined) { problems.push({ item: name, reason: "no script emitted" }); continue; }
            files[`${name}.js`] = source;
            tracked.push({ name, script: true });
        } else {
            const source = emitted[`${stem}.razor`];
            if (source === undefined) { problems.push({ item: name, reason: "no Razor source emitted" }); continue; }
            files[`${name}Holder.razor`] = source.split("PlaceholderHolder").join(`${name}Holder`);
            tracked.push({ name, access: `new Tuple<Func<object>, Func<object>>(() => new ${name}Holder(), () => new ${name}Holder().${name})` });
        }
        const css = emitted[`${stem}.css`];
        if (css?.trim()) files[`${name}.css`] = css;
        handlerItems++;
    }

    files["BlazorLibrary.csproj"] = fs.readFileSync(path.join(templateDir, "BlazorLibrary.csproj"), "utf8");
    return { files, manager: dotNetManagerFor(tracked, "BlazorLibrary"), managerFile: "LibraryManager.cs", problems, dataItems, handlerItems };
}

function emitNativeXamlLibrary(platformName: "WinUI" | "Uno", platform: any, opts: {
    examplesRoot: string;
    templatesRoot?: string;
    only?: string[];
    skipAlterDataCasing?: boolean | string[];
}, library: any): EmittedLibrary {
    const templateDir = path.join(opts.templatesRoot ?? "", "winui-template");
    if (!fs.existsSync(templateDir)) throw new Error(`no winui-template found at ${templateDir}`);
    const names: string[] = opts.only ?? (library.getItemNames?.() ?? library.getKeys());
    const queue = [...names];
    const seen = new Set(names);
    const files: Record<string, string> = {};
    const problems: { item: string; reason: string }[] = [];
    const tracked: { name: string; access?: string }[] = [];
    let dataItems = 0;
    let handlerItems = 0;
    let context: any = null;

    const rendererFor = (): any => {
        const options: any = new CodeGenerationRendererOptions();
        options.library = library;
        options.forceHelperLookups = true;
        options.isLibraryEmission = true;
        if (context !== null) options.reusedContext = context;
        const renderer: any = new CodeGeneratingComponentRenderer(platform, options);
        if (context === null) { registerDescriptions(renderer); context = renderer.context; }
        return renderer;
    };
    const contentFor = (item: any): any => {
        const direct = item.getContentForPlatform(platform);
        if (direct !== null && direct !== undefined) return direct;
        if (platformName === "Uno") {
            const winui = item.getContentForPlatform((CodeGenerationTargetPlatforms as any).WinUI);
            if (winui !== null && winui !== undefined) return winui;
        }
        return item.getContentForPlatform((CodeGenerationTargetPlatforms as any).WPF);
    };

    while (queue.length > 0) {
        const name = queue.shift() as string;
        if (!library.hasItem(name)) { problems.push({ item: name, reason: "no such library item" }); continue; }
        const item: any = library.getItem(name);
        const requires: string[] | null = item.getRequiresForPlatform(platform);
        for (const required of requires ?? []) {
            if (!seen.has(required) && library.hasItem(required)) { seen.add(required); queue.push(required); }
        }
        const content = contentFor(item);
        if (content === null || content === undefined) continue;
        const template: any = new CodeGenerationFolderTemplate();
        template.fileAccess = fileAccess;
        template.loadTemplate(templateDir);
        const renderer = rendererFor();
        const skipCasing = opts.skipAlterDataCasing === true ||
            (Array.isArray(opts.skipAlterDataCasing) && opts.skipAlterDataCasing.includes(name)) ||
            content.skipAlterDataCasing === true;
        renderer.loadCodeJson(mockDescription(skipCasing));
        renderer.markRefUsed(name);
        renderer.emitCode(template);
        const emitted = outputOf(template);

        if (item.type === CodeGenerationLibraryItemType.Data) {
            const source = emitted[`${name}.cs`];
            if (source === undefined) { problems.push({ item: name, reason: "no data source emitted" }); continue; }
            files[`${name}.cs`] = source;
            enqueueSiblings(source, library, seen, queue);
            tracked.push({ name, access: `new Tuple<Func<object>, Func<object>>(() => new ${name}(), () => new ${name}())` });
            dataItems++;
            continue;
        }
        if (item.type === CodeGenerationLibraryItemType.Supporting) {
            const source = emitted["supporting.cs"];
            if (source === undefined) { problems.push({ item: name, reason: "no supporting source emitted" }); continue; }
            files[`${name}.cs`] = source.split("PlaceholderHolder").join(`${name}Holder`);
            tracked.push({ name, access: `new Tuple<Func<object>, Func<object>>(() => new ${name}Holder(), () => new ${name}Holder())` });
            handlerItems++;
            continue;
        }
        const isHandler = item.type === CodeGenerationLibraryItemType.EventHandler;
        const stem = isHandler ? "handler" : "template";
        const source = emitted[`${stem}.cs`];
        if (source === undefined) { problems.push({ item: name, reason: `no ${stem} source emitted` }); continue; }
        files[`${name}.cs`] = source.split("PlaceholderHolder").join(`${name}Holder`);
        const instance = isHandler
            ? `new ${nativeHandlerDelegate(String(content.content ?? ""), platformName)}(new ${name}Holder().${name})`
            : `new ${name}Holder().${name}`;
        tracked.push({ name, access: `new Tuple<Func<object>, Func<object>>(() => new ${name}Holder(), () => ${instance})` });
        handlerItems++;
    }

    const projectName = platformName === "Uno" ? "UnoLibrary.csproj" : "WinUILibrary.csproj";
    const projectDir = path.join(opts.templatesRoot ?? "", platformName === "Uno" ? "uno-template" : "winui-template");
    files[projectName] = fs.readFileSync(path.join(projectDir, projectName), "utf8");
    return { files, manager: dotNetManagerFor(tracked), managerFile: "LibraryManager.cs", problems, dataItems, handlerItems };
}

function nativeHandlerDelegate(content: string, platformName: "WinUI" | "Uno"): string {
    const marker = (name: string): string | null => {
        const match = content.match(new RegExp(`//\\s*${name}:\\s*([\\w.\\?<>,\\[\\] ]+)`));
        return match?.[1]?.trim() ?? null;
    };
    const manual = marker(platformName) ?? (platformName === "Uno" ? marker("WinUI") : null) ?? marker("WPF");
    if (manual) return manual;
    const eventArgs = content.match(/([\w.]+)EventArgs/);
    if (eventArgs) return `${eventArgs[1]}EventHandler`;
    if (/\(\s*object\s+\w+\s*,\s*(?:System\.)?EventArgs\s+\w+\s*\)/.test(content)) return "System.EventHandler";
    if (/public\s+void\s+\w+\s*\(\s*\)/.test(content)) return "System.Action";
    throw new Error(`cannot determine ${platformName} delegate type for native handler`);
}

function dotNetManagerFor(items: { name: string; access?: string; script?: boolean }[], extraUsing?: string): string {
    const registrations = items.map(item => item.script
        ? `            _items.Add("${item.name}", new Tuple<Func<object>, Func<object>>(() => "${item.name}", () => "${item.name}"));`
        : `            _items.Add("${item.name}", ${item.access});`).join("\n");
    const scripts = items.filter(item => item.script)
        .map(item => `            _isScript.Add("${item.name}");`).join("\n");
    const platformUsing = extraUsing ? `using ${extraUsing};\n` : "";
    return `using System;\nusing System.Collections.Generic;\n${platformUsing}\nnamespace CodeLibrary\n{\n` +
`    public class LibraryManager\n    {\n        private static LibraryManager _instance;\n` +
`        public static LibraryManager Instance => _instance ??= new LibraryManager();\n` +
`        private readonly HashSet<string> _isScript = new();\n` +
`        private readonly Dictionary<string, Tuple<Func<object>, Func<object>>> _items = new();\n` +
`        private LibraryManager()\n        {\n${registrations}\n${scripts}\n        }\n` +
`        public object GetInstance(string name) => _items[name].Item2();\n` +
`        public Func<object> GetCreator(string name) => _items[name].Item2;\n` +
`        public object GetHolderInstance(string name) => _items[name].Item1();\n` +
`        public Func<object> GetHolderCreator(string name) => _items[name].Item1;\n` +
`        public bool HasItem(string name) => _items.ContainsKey(name);\n` +
`        public bool IsScript(string name) => _isScript.Contains(name);\n    }\n` +
`    public static class CodeGenHelper\n    {\n` +
`        public static Func<string, object> DescriptionLookup { get; set; }\n` +
`        public static Func<string, object> FindByNameLookup { get; set; }\n` +
`        public static Func<string, object> SharedSupportingLookup { get; set; }\n` +
`        public static Func<string, object> NewSupportingLookup { get; set; }\n` +
`        public static T GetDescription<T>(string name) => DescriptionLookup == null ? default : (T)DescriptionLookup(name);\n` +
`        public static T FindByName<T>(string name) => FindByNameLookup == null ? default : (T)FindByNameLookup(name);\n` +
`        public static T GetSharedSupporting<T>(string name) => SharedSupportingLookup == null ? default : (T)SharedSupportingLookup(name);\n` +
`        public static T CreateSupporting<T>(string name) => NewSupportingLookup == null ? default : (T)NewSupportingLookup(name);\n` +
`    }\n}\n`;
}

/**
 * The library items an emitted file imports from beside it, queued to be emitted as well.
 *
 * "import { WorldConnections } from './WorldFlights'" says this item does not stand alone. The name
 * imported is not always the item's — an item can export several classes — so the module it is
 * imported from is what identifies it.
 */
/** Whether emitted content declares a type of the given name, which is what makes it requestable. */
function declaresType(content: string, name: string): boolean {
    return new RegExp(`export\\s+(?:abstract\\s+)?class\\s+${name}\\b`).test(content);
}

function enqueueSiblings(content: string, library: any, seen: Set<string>, queue: string[]): void {
    const pattern = /from\s+['"]\.\/([A-Za-z0-9_]+)['"]/g;
    let match: RegExpExecArray | null;
    while ((match = pattern.exec(content)) !== null) {
        const name = match[1];
        if (name === "libraryManager" || seen.has(name) || !library.hasItem(name)) continue;
        seen.add(name);
        queue.push(name);
    }
}

/** Where the per-item templates live: the library project emitter's own copy of them. */
function itemTemplateDirFor(platformName: string, templatesRoot?: string): string {
    const folder = platformName === "WebComponents" ? "webcomponents-template"
        : platformName === "React" ? "react-template" : "angular-template";
    const roots = templatesRoot ? [templatesRoot] : [
        path.resolve(__dirname, "..", "..", "..", "..", "Source", "LibraryProjectEmitter",
            "LibraryProjectEmitter", "templates"),
        path.resolve(process.cwd(), "..", "..", "..", "Source", "LibraryProjectEmitter",
            "LibraryProjectEmitter", "templates"),
    ];
    for (const root of roots) {
        const dir = path.join(root, folder);
        if (fs.existsSync(dir)) return dir;
    }
    throw new Error(`no ${folder} found. Pass templatesRoot pointing at the library project ` +
                    `emitter's templates directory.
  looked in:
    ${roots.join("\n    ")}`);
}

function mockDescription(skipAlterDataCasing: boolean): string {
    const wrapper: any = { descriptions: { content: { type: "DataChart" } } };
    if (skipAlterDataCasing) wrapper.skipAlterDataCasing = true;
    return JSON.stringify(wrapper);
}

function outputOf(template: any): Record<string, string> {
    const out: Record<string, string> = {};
    for (const filePath of template.getFilePaths() as string[]) {
        const content = template.getFileOuutput(filePath);
        if (content === null || content === undefined || String(content).trim() === "") continue;
        out[path.basename(filePath)] = String(content);
    }
    return out;
}

function camelize(name: string): string {
    return name.length === 0 ? name : name[0].toLowerCase() + name.substring(1);
}

/**
 * The lookup, as the library project emitter writes it: an item name to a pair of creators, the
 * holder and the value. Written as a module rather than a namespace so a browser can import it.
 */
function managerFor(items: LibraryItemInfo[]): string {
    const imports = items.map(item => item.isOwnType
        ? `import { ${item.name} } from './${item.name}';`
        : `import { ${item.name}Holder } from './${item.name}';`).join("\n");
    const entries = items.map(item =>
        `        this._items.set(${JSON.stringify(item.name)}, ${item.accessPath});`).join("\n");
    const styles = items.filter(item => item.hasRequiredStyle)
        .map(item => `        this._requiredStyles.add(${JSON.stringify(item.name)});`).join("\n");

    return `${imports}

export class LibraryManager {
    private static _instance: LibraryManager | null = null;
    public static get instance(): LibraryManager {
        if (LibraryManager._instance === null) {
            LibraryManager._instance = new LibraryManager();
        }
        return LibraryManager._instance;
    }
    private _items: Map<string, (() => any)[]> = new Map<string, (() => any)[]>();
    private _requiredStyles: Set<string> = new Set<string>();
    private constructor() {
${entries}
${styles}
    }
    public getInstance(itemName: string): any { return this._items.get(itemName)![1](); }
    public getCreator(itemName: string): (() => any) { return this._items.get(itemName)![1]; }
    public getHolderInstance(itemName: string): any { return this._items.get(itemName)![0](); }
    public getHolderCreator(itemName: string): (() => any) { return this._items.get(itemName)![0]; }
    public hasItem(itemName: string): boolean { return this._items.has(itemName); }
    public hasRequiredStyles(itemName: string): boolean { return this._requiredStyles.has(itemName); }
    public itemNames(): string[] { return [...this._items.keys()]; }
}

export class CodeGenHelper {
    public static descriptionLookup: ((descriptionName: string) => any) | null = null;
    public static findByNameLookup: ((name: string) => any) | null = null;
    public static getDescription<T>(descriptionName: string): T | null {
        if (CodeGenHelper.descriptionLookup === null) { return null; }
        return CodeGenHelper.descriptionLookup(descriptionName) as T;
    }
    public static findByName<T>(name: string): T | null {
        if (CodeGenHelper.findByNameLookup === null) { return null; }
        return CodeGenHelper.findByNameLookup(name) as T;
    }
    // A supporting item, asked for by name rather than constructed on an assumption that its type is
    // in scope. Whoever installed the lookup owns the lifetime of what it hands back: nothing is kept
    // here, so one definition is never given what the definition before it was holding.
    public static getSharedSupporting<T>(itemName: string): T | null {
        if (CodeGenHelper.sharedSupportingLookup === null) { return null; }
        return CodeGenHelper.sharedSupportingLookup(itemName) as T;
    }
    public static createSupporting<T>(itemName: string): T | null {
        if (CodeGenHelper.newSupportingLookup === null) { return null; }
        return CodeGenHelper.newSupportingLookup(itemName) as T;
    }
    public static sharedSupportingLookup: ((itemName: string) => any) | null = null;
    public static newSupportingLookup: ((itemName: string) => any) | null = null;
}
`;
}
