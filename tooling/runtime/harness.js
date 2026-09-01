/**
 * The page a sample is loaded into, with the real component renderer and the real packages.
 *
 * The discipline is the Web Components test host's, because that host loads hundreds of samples into
 * one page without it falling over, and each part of what it does is there for a reason it learned the
 * hard way. What is left out is only the part about interacting with what rendered: this asks whether a
 * sample loads, not whether it behaves.
 *
 * Registration walks the packages' exports rather than naming modules one by one. A list of imports is
 * a list to keep in step with the product, and its failure mode is a component that quietly does not
 * register — which reads as a broken sample rather than a stale harness.
 */

import * as core from 'igniteui-webcomponents-core';
import * as charts from 'igniteui-webcomponents-charts';
import * as maps from 'igniteui-webcomponents-maps';
import * as gauges from 'igniteui-webcomponents-gauges';
import * as dataGrids from 'igniteui-webcomponents-data-grids';
import * as inputs from 'igniteui-webcomponents-inputs';
import * as layouts from 'igniteui-webcomponents-layouts';
import * as dashboards from 'igniteui-webcomponents-dashboards';
import * as datasources from 'igniteui-webcomponents-datasources';
import * as grids from 'igniteui-webcomponents-grids';

// Emitted by run.mjs through the product's own library emission — the same code generating renderer,
// the same item templates, the same lookup shape the library project emitter writes. See emitLibrary
// in the snippet emitter's api.
import { LibraryManager, CodeGenHelper } from './generated/libraryManager';

const namespaces = { core, charts, maps, gauges, dataGrids, inputs, layouts, dashboards, datasources };

// The modern WebGrid package uses its generated custom-element definition API rather than the
// Igc*Module registration convention used by the renderer-based packages above. Importing its
// namespace alone does not define the elements.
grids.defineAllComponents();

/**
 * Animations advance on a timer rather than on animation frames.
 *
 * The tick provider drives chart animations through requestAnimationFrame, which a browser throttles or
 * pauses when a page is not the one being painted — headless, or one of several. Animations then never
 * reach idle, every animated sample waits out its timeout, and what they leave queued piles up until
 * the tab dies. Timers fire regardless. Copied from the test host, which installs it for the same
 * reason; it changes nothing about the product.
 */
(function installTimerAnimationClock(frameMs) {
    if (window.__timerAnimationClock) return;
    window.__timerAnimationClock = true;
    window.requestAnimationFrame = (cb) => window.setTimeout(
        () => cb(typeof performance !== 'undefined' ? performance.now() : Date.now()), frameMs);
    window.cancelAnimationFrame = (id) => window.clearTimeout(id);
})(16);

/**
 * An unknown enumeration value becomes the first member rather than an exception.
 *
 * The host's own accommodation, and it belongs here for the same reason: parse throws, and a throw
 * partway through building a component leaves the renderer holding half of one, which the next sample
 * then inherits. Counted and reported per sample, so a value that is not a real member is still
 * visible — the part a check needs and a host does not.
 */
const enumProblems = [];
(function tolerateUnknownEnumValues() {
    const util = core.EnumUtil;
    if (!util || typeof util.parse !== 'function' || util.__tolerant) return;
    const original = util.parse.bind(util);
    util.parse = (type, value, ignoreCase) => {
        try {
            return original(type, value, ignoreCase);
        } catch (e) {
            enumProblems.push(`"${value}" is not a value of ${type && type.name ? type.name : type}`);
            return 0;
        }
    };
    util.__tolerant = true;
})();

/**
 * Canvases asked for at a size that cannot be meant.
 *
 * A tab dies from running out of memory, and the memory a chart uses is mostly not the JS heap: it is
 * the bitmap behind a canvas, four bytes a pixel. A width computed from a bad number — a NaN, an extent
 * that came out as an axis's whole range — asks the browser for gigabytes in one call, and the process
 * is gone before anything can report it. Watched here, at the setter, so the size is known even when the
 * allocation is what kills the page.
 */
const bigCanvases = [];
(function watchCanvasSizes() {
    const limit = 8192;   // beyond any real component on a 1280×900 page
    for (const side of ['width', 'height']) {
        const original = Object.getOwnPropertyDescriptor(HTMLCanvasElement.prototype, side);
        if (!original || !original.set) continue;
        Object.defineProperty(HTMLCanvasElement.prototype, side, {
            configurable: true,
            enumerable: original.enumerable,
            get: original.get,
            set(value) {
                if (!Number.isFinite(value) || value > limit) {
                    const note = `canvas ${side} set to ${value}`;
                    bigCanvases.push(note);
                    console.debug(`[canvas] ${note}`);
                }
                original.set.call(this, value);
            },
        });
    }
})();

/**
 * Where memory goes when it does not go on the JS heap.
 *
 * usedJSHeapSize counts objects, and a tab can die at four gigabytes with a heap that never passed a
 * hundred megabytes: the bytes behind a typed array are external to the heap, and so are DOM nodes. A
 * crash cannot be gone back to, so the accounting has to be running before it happens — a counter and a
 * threshold, said out loud as it crosses each one.
 */
const externalBytes = { arrays: 0, arrayCount: 0, nodes: 0 };
let announcedAt = 0;
(function watchExternalMemory() {
    const announce = () => {
        const mb = Math.floor(externalBytes.arrays / (1024 * 1024));
        if (mb < announcedAt + 256) return;
        announcedAt = mb - (mb % 256);
        console.debug(`[memory] ${announcedAt}MB in ${externalBytes.arrayCount} typed array(s), ` +
                      `${externalBytes.nodes} node(s) made`);
    };
    const widths = { Float64Array: 8, Float32Array: 4, Int32Array: 4, Uint32Array: 4, Int16Array: 2,
                     Uint16Array: 2, Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1 };
    for (const [name, width] of Object.entries(widths)) {
        const Original = window[name];
        if (typeof Original !== 'function') continue;
        window[name] = new Proxy(Original, {
            construct(target, argv, newTarget) {
                const first = argv[0];
                const length = typeof first === 'number' ? first
                    : (first && typeof first.length === 'number' ? first.length : 0);
                externalBytes.arrays += length * width;
                externalBytes.arrayCount++;
                announce();
                return Reflect.construct(target, argv, newTarget);
            },
        });
    }
    const originalNS = document.createElementNS.bind(document);
    document.createElementNS = function (ns, tag, options) {
        externalBytes.nodes++;
        if (externalBytes.nodes % 5000 === 0) {
            console.debug(`[memory] ${externalBytes.nodes} node(s) made`);
        }
        return originalNS(ns, tag, options);
    };
})();

/**
 * The extremes of what gets drawn.
 *
 * A canvas of ordinary size can still take a page down: a path whose coordinates are in the millions
 * asks the rasteriser to fill an area that size, and that allocation is neither the JS heap nor the
 * canvas's own bitmap. Nothing in the page reports it, so the coordinates are watched as they are
 * given — the largest one seen is the difference between "a component is drawing wrongly" and "a
 * component is allocating".
 */
const drawn = { maxAbs: 0, calls: 0 };
(function watchDrawnCoordinates() {
    const proto = typeof CanvasRenderingContext2D === 'function'
        ? CanvasRenderingContext2D.prototype : null;
    if (!proto) return;
    let announcedSize = 1e6;
    let announcedCalls = 0;
    const note = (...values) => {
        drawn.calls++;
        // Volume as well as size: a million small segments is as much memory as one enormous one, and a
        // count that keeps climbing is the shape of a loop that does not end.
        if (drawn.calls - announcedCalls >= 250000) {
            announcedCalls = drawn.calls;
            console.debug(`[drawn] ${drawn.calls} drawing call(s), largest coordinate ` +
                          `${drawn.maxAbs.toExponential(2)}`);
        }
        for (const value of values) {
            const size = Math.abs(Number(value));
            if (!Number.isFinite(size)) {
                console.debug('[drawn] a coordinate that is not a number');
                continue;
            }
            if (size > drawn.maxAbs) drawn.maxAbs = size;
            if (size > announcedSize) {
                announcedSize = size * 10;
                console.debug(`[drawn] a coordinate of ${size.toExponential(2)}`);
            }
        }
    };
    for (const [name, count] of [['moveTo', 2], ['lineTo', 2], ['rect', 4], ['arc', 3],
                                 ['bezierCurveTo', 6], ['quadraticCurveTo', 4]]) {
        const original = proto[name];
        if (typeof original !== 'function') continue;
        proto[name] = function (...argv) {
            note(...argv.slice(0, count));
            return original.apply(this, argv);
        };
    }
})();

const registered = { descriptions: 0, modules: 0, failures: [] };
let registering = 0;

/** Every description module in every package, into a renderer's context. */
function registerDescriptions(context) {
    registering = 0;
    for (const [nsName, ns] of Object.entries(namespaces)) {
        for (const key of Object.keys(ns)) {
            if (!key.endsWith('DescriptionModule')) continue;
            try {
                ns[key].register(context);
                // Per renderer context, so the number is what a renderer knows rather than the sum
                // over however many renderers this page happens to keep.
                registered.descriptions = Math.max(registered.descriptions, ++registering);
            } catch (e) {
                registered.failures.push(`${nsName}.${key}: ${e && e.message}`);
            }
        }
    }
}

/**
 * Every component module in every package.
 *
 * A description says what to build; a module is what makes the element it names exist. Registering all
 * of them is what lets one page load every sample — a sample naming a component whose module was not
 * registered renders nothing and says nothing.
 */
function registerModules() {
    const manager = core.ModuleManager;
    for (const [nsName, ns] of Object.entries(namespaces)) {
        for (const key of Object.keys(ns)) {
            if (!/^Igc[A-Za-z0-9]*Module$/.test(key)) continue;
            const module = ns[key];
            if (!module || typeof module.register !== 'function') continue;
            try {
                manager.register(module);
                registered.modules++;
            } catch (e) {
                registered.failures.push(`${nsName}.${key}: ${e && e.message}`);
            }
        }
    }
}

/**
 * Two renderers, as the host has: one for the sample, one for the property editor beside it.
 *
 * An editor is a component that drives another component, described in a container of its own. The host
 * keeps it on a renderer of its own, and cleans up both between samples.
 */
const renderer = new core.ComponentRenderer();
const editorRenderer = new core.ComponentRenderer();

for (const each of [renderer, editorRenderer]) {
    // Errors are collected rather than thrown: the renderer catches what goes wrong while it builds and
    // puts it on its own list, which is the difference between a report naming the sample and a stack
    // in the console attached to nothing. Without it the first bad property stops the load, and
    // everything after it goes unexamined.
    each.isProceedOnErrorEnabled = true;
    // Unused references are cleaned up as it renders, so tearing a sample down also unregisters what it
    // registered — the axis a chart declared does not linger to be found by the next sample.
    each.cleanupUnusedOnRender = true;
    // On, because the host is always driven with it on: the test client sets allowNullForRemove in every
    // page it sends, and the dashboard tile sets it on its own renderer. A description given as null then
    // removes what was there — which is also how a container is emptied without going behind the
    // renderer's back — rather than being passed over.
    each.allowNullForRemove = true;
    registerDescriptions(each.context);
}
registerModules();

/**
 * One of each of the elements a sample is most likely to name, created and thrown away.
 *
 * The host does this too. Registering a module is not the same as the custom element being defined;
 * touching the constructor is what defines it, and a sample that is the first to name one would
 * otherwise render into an element the browser does not know yet.
 */
(function defineCommonElements() {
    for (const tag of ['igc-data-chart', 'igc-category-chart', 'igc-financial-chart', 'igc-pie-chart',
                       'igc-data-grid', 'igc-property-editor-panel', 'igc-bullet-graph',
                       'igc-radial-gauge', 'igc-linear-gauge', 'igc-geographic-map', 'igc-sparkline',
                       'igc-toolbar', 'igc-legend', 'igc-item-legend']) {
        try {
            document.createElement(tag);
        } catch { /* a tag no installed package defines is not this harness's business */ }
    }
})();

const SLOTS = ['content', 'editor', 'legend', 'aboveContent', 'aboveContentLeft', 'aboveContentRight',
               'belowContent', 'leftContent', 'rightContent'];

/** The container a description slot is keyed to. */
const containerFor = (key) => document.getElementById(key);

// What a handler reaches the rendered component through, wired the way the host wires it: by container
// name for a description, and by ref name — either spelling — for anything else.
CodeGenHelper.descriptionLookup = (name) => {
    const container = containerFor(name);
    return container ? container.firstElementChild : null;
};
CodeGenHelper.findByNameLookup = (name) => {
    const capitalised = name.length > 0 ? name[0].toUpperCase() + name.substring(1) : name;
    for (const candidate of [name, capitalised]) {
        let found = null;
        renderer.resolveRefValue(containerFor('content'), candidate, (value) => { found = value; });
        if (found !== null && found !== undefined) return found;
    }
    return LibraryManager.instance.hasItem(name) ? LibraryManager.instance.getInstance(name) : null;
};

/**
 * The objects other items' methods are on, for the current definition only.
 *
 * A generated sample has every item a definition lists in the one component, so an item reaching
 * another's method reaches it on itself. Emitted apart, each item is its own holder, and the request is
 * what makes the reference resolvable: it names the item whose methods are wanted.
 *
 * Held by the load rather than by the helper, and dropped when the next one begins — a shared object
 * that outlived the definition that asked for it would hand the next definition the state of the last.
 */
let sharedSupporting = new Map();

/** Timers owned by a sample, including descendants recursively scheduled by their callbacks. */
const nativeSetTimeout = window.setTimeout.bind(window);
const nativeClearTimeout = window.clearTimeout.bind(window);
const timersByOwner = new Map();
let currentTimerOwner = 0;
let callbackTimerOwner = 0;
let nextTimerOwner = 0;

window.setTimeout = (callback, delay, ...rest) => {
    const owner = callbackTimerOwner || currentTimerOwner;
    let id;
    const wrapped = typeof callback !== 'function' ? callback : (...args) => {
        if (owner) timersByOwner.get(owner)?.delete(id);
        const previous = callbackTimerOwner;
        callbackTimerOwner = owner;
        try { return callback(...args); }
        finally { callbackTimerOwner = previous; }
    };
    id = nativeSetTimeout(wrapped, delay, ...rest);
    if (owner) {
        if (!timersByOwner.has(owner)) timersByOwner.set(owner, new Set());
        timersByOwner.get(owner).add(id);
    }
    return id;
};
window.clearTimeout = (id) => {
    for (const timers of timersByOwner.values()) timers.delete(id);
    return nativeClearTimeout(id);
};

function clearSampleTimers() {
    for (const timers of timersByOwner.values()) {
        for (const id of timers) nativeClearTimeout(id);
    }
    timersByOwner.clear();
}

/**
 * The requests this page still has on the wire.
 *
 * A sample whose initializer fetches its data — the geo map binding topics all do — is not finished
 * when the renderer goes idle: idle, flush and animation all say that nothing is *queued*, and a
 * request that has not come back yet is queued nowhere. So the harness moves on, the response lands
 * during the next sample, and its handler reaches for a map that has been torn down. The report then
 * blames whichever sample happened to be loading, which is why the pair differs from run to run and
 * why it never reproduces on a fast connection.
 *
 * Counting them here lets the load wait for them like anything else.
 */
let inFlight = 0;
const nativeFetch = window.fetch.bind(window);
window.fetch = (...args) => {
    inFlight++;
    return nativeFetch(...args).finally(() => { inFlight--; });
};

/** Resolves once nothing is outstanding, or once it has waited long enough to say so. */
function drainFetches(timeout) {
    if (inFlight === 0) return Promise.resolve(false);
    return new Promise((resolve) => {
        const started = Date.now();
        const tick = () => {
            if (inFlight === 0) return resolve(false);
            if (Date.now() - started > timeout) return resolve(true);
            setTimeout(tick, 25);
        };
        tick();
    });
}

CodeGenHelper.sharedSupportingLookup = (itemName) => {
    if (!LibraryManager.instance.hasItem(itemName)) return null;
    if (!sharedSupporting.has(itemName)) {
        sharedSupporting.set(itemName, LibraryManager.instance.getHolderInstance(itemName));
    }
    return sharedSupporting.get(itemName);
};
CodeGenHelper.newSupportingLookup = (itemName) => (
    LibraryManager.instance.hasItem(itemName)
        ? LibraryManager.instance.getHolderInstance(itemName) : null);

/**
 * Member paths, altered in concert with the data the library emitted.
 *
 * The emitter alters casing on both halves at once: it camelises a data item's members and camelises
 * every member path in the markup with them, so a generated sample matches itself. Here the data comes
 * from that same emitter but the paths come from the sample's own JSON, where they are written as the
 * description declares them — so this side has to be altered too, or a series binds to nothing and
 * every value is missing.
 *
 * A sample that declares skipAlterDataCasing has bound something that cannot be re-cased, and its data
 * was emitted unaltered to match; its paths are left exactly as written.
 *
 * Installing a transformer is also what turns transforming on: on the web platforms the renderer does
 * not consider member path transforms at all unless one is supplied.
 */
let keepCasingAsWritten = false;

function alterMemberPath(path) {
    // "-" is not a member character, as the test hosts have it.
    const value = String(path ?? '').split('-').join('_');
    if (keepCasingAsWritten) return value;
    return value.split('.').map(segment => /^[A-Za-z]/.test(segment)
        ? segment.substring(0, 1).toLowerCase() + segment.substring(1)
        : segment).join('.');
}

renderer.addMemberPathTransformer(alterMemberPath);
editorRenderer.addMemberPathTransformer(alterMemberPath);

/**
 * What a reference in a sample resolves to.
 *
 * The renderer resolves a reference naming an element inside the same description itself; what reaches
 * here is a library item — the data a series binds to, or a handler — and the lookup answers for those
 * exactly as it does in a generated project. Answering means saying so: the renderer takes the value
 * only when "found" is set, and a resolver that assigns the value alone is ignored without a word.
 *
 * Nothing is cached. The lookup builds an instance per request, which is what a generated sample gets,
 * and holding every data set a run has touched is one way to run a page out of memory.
 */
const unresolved = new Set();

function addResolver(target) {
    target.addReferenceResolver((name, args) => {
        if (LibraryManager.instance.hasItem(name)) {
            try {
                args.referenceValue = LibraryManager.instance.getInstance(name);
                args.found = true;
            } catch (e) {
                unresolved.add(`${name} — the library item would not construct: ${e && e.message}`);
            }
            return;
        }
        // A property editor binds to the renderer driving the page. The samples name it "renderer",
        // which is the name a generated sample gives the field it assigns.
        if (name === 'renderer' || name === 'componentRenderer' || name === 'ComponentRenderer') {
            args.referenceValue = renderer;
            args.found = true;
            return;
        }
        // Anything else the renderer could not resolve for itself: reported, not answered. A property
        // editor whose target is in another container is the common one, and not a load failure.
        unresolved.add(name);
    });
}
addResolver(renderer);
addResolver(editorRenderer);

let teardownProblems = [];

/** What the test host allows an animation before calling it stuck. */
// Hosted runners are substantially slower while the compile matrix is active. This is passed to
// ComponentRenderer only for samples declaring hasAnimations: true; its AnimationIdleHandler still
// decides when the sample has settled, and the timeout is only the upper safety bound.
const ANIMATION_TIMEOUT = 10000;

/**
 * The state one sample leaves behind, cleared before the next — the host's CleanupPage, which is not
 * the same as emptying the containers.
 *
 * The renderer holds per-container state: what it built, what it is waiting on, which references were
 * provided. A sample loaded over the top of another's inherits it, and the symptom is a sample that
 * passes alone and fails in a run — a failure that moves. Both renderers, every container, as the host
 * does it. What the teardown itself complains about is kept and reported, because a component that
 * cannot be torn down is the next sample's problem and worth naming as this one's.
 */
function cleanupPage() {
    // First the removal the client sends: every slot that has something in it, described as null.
    //
    // "Slots whose control was removed from the layout are sent as null descriptions, which the renderer
    // treats as a removal request (and destroys the control) when AllowNullForRemove is enabled" — so a
    // control is destroyed rather than merely unrendered, which is a different thing from tearing the
    // container down and may leave less behind. Through the main renderer, because that is the one a page
    // is loaded into.
    const occupied = SLOTS.filter(slot => {
        const container = containerFor(slot);
        return container && container.firstElementChild;
    });
    if (occupied.length > 0) {
        const descriptions = {};
        for (const slot of occupied) descriptions[slot] = null;
        try {
            renderer.loadJson(JSON.stringify({ allowNullForRemove: true, descriptions }), containerFor);
        } catch (e) {
            teardownProblems.push(`removing ${occupied.join(', ')}: ${e && e.message}`);
        }
    }

    // Then the page level teardown, which is what the client's cleanupPage message runs.
    for (const slot of SLOTS) {
        const container = containerFor(slot);
        if (!container) continue;
        for (const each of [renderer, editorRenderer]) {
            try {
                each.cleanup(container, true);
            } catch (e) {
                teardownProblems.push(`${slot}: ${e && e.message}`);
            }
        }
        // Deliberately not emptying the container afterwards. The host does not, and it is the
        // renderer's business what is in there: removing the elements behind its back leaves it
        // holding references to nodes that are no longer in the document, which is a worse state than
        // whatever the teardown left. Anything the teardown does not remove is a finding, not
        // something for this harness to tidy away.
    }
}

/** Waits for every container to have drawn what it was given. */
function flushAll() {
    const containers = SLOTS.map(containerFor).filter(c => c && c.firstElementChild);
    return Promise.all(containers.map(container => new Promise((resolve) => {
        let settled = false;
        const done = () => { if (!settled) { settled = true; resolve(); } };
        setTimeout(done, 2000);
        try {
            renderer.waitForFlush(container, done);
        } catch {
            done();
        }
    })));
}

/**
 * Loads one sample and reports what happened.
 *
 * The host's order, and each wait is for a different thing. Idle says nothing is queued. Flush says what
 * was queued has been drawn. Animation idle says an animated component has settled — and a sample left
 * mid-animation carries on into the next one and throws there, which makes the report blame whichever
 * sample happened to be loading. A timeout at any of the three is a failure: a sample that never
 * settles is doing something it should not.
 */
/**
 * How far the load got, said out loud.
 *
 * A crashed tab answers nothing: the call the runner is waiting on never returns, and all it knows is
 * that the page died. These lines are on the console as they happen, so the runner has them already —
 * the last one printed is the stage the sample was in when the process went down.
 */
function stage(what) {
    console.debug(`[stage] ${what}`);
}

async function load(sample, options) {
    const timeout = (options && options.timeout) || 8000;
    const continuous = sample && sample.runtimeContinuous === true;

    // Whether this sample's data was emitted unaltered, which decides whether its paths are altered.
    keepCasingAsWritten = !!(sample && sample.skipAlterDataCasing === true);

    // Nothing shared by the definition before this one survives into it.
    sharedSupporting = new Map();

    teardownProblems = [];
    enumProblems.length = 0;
    bigCanvases.length = 0;
    drawn.maxAbs = 0;
    drawn.calls = 0;
    externalBytes.arrays = 0;
    externalBytes.arrayCount = 0;
    externalBytes.nodes = 0;
    announcedAt = 0;
    stage('cleanup');
    currentTimerOwner = 0;
    clearSampleTimers();
    cleanupPage();
    // Timers created from here onward belong to this sample. A timer callback inherits this owner,
    // so a recursively scheduled live-data ticker remains removable after `load` returns.
    currentTimerOwner = ++nextTimerOwner;
    // What the renderers objected to while tearing the previous sample down. Collected here rather than
    // left for the next drain, because these belong to whatever was on the page before this sample —
    // a component that cannot be removed cleanly is the finding, and it is not this sample's fault.
    const leftBehind = teardownProblems.concat(collectErrors());
    stage('cleaned');
    renderer.clearErrors();
    editorRenderer.clearErrors();
    unresolved.clear();

    // The renderer asks for a reference by this name when a sample says it animates, and calls it once
    // the animation settles or the time is up. Providing it is how the host waits for animations, and it
    // is also what stops the renderer reporting that reference as missing.
    const animated = sample && sample.hasAnimations === true;
    let onAnimationIdle = null;
    const animationSettled = animated
        ? new Promise((resolve) => { onAnimationIdle = resolve; })
        : Promise.resolve(false);
    const named = sample && sample.descriptions && typeof sample.descriptions === 'object'
        ? Object.keys(sample.descriptions) : ['content'];
    if (animated) {
        // ComponentRenderer asks in the container where each animated description was rendered. A
        // gauge in aboveContent or a chart beside a legend cannot see a handler provided only to
        // content, so tell the renderer to wait in every slot this sample actually names.
        for (const slot of named) {
            renderer.provideRefValue(containerFor(slot), 'AnimationIdleHandler',
                (timedOutFlag) => { if (onAnimationIdle) onAnimationIdle(timedOutFlag === true); });
        }
    }

    const json = animated
        ? JSON.stringify({ ...sample, animationIdleTimeout: ANIMATION_TIMEOUT })
        : JSON.stringify(sample);

    stage('loadJson');
    const thrown = [];
    try {
        renderer.loadJson(json, containerFor);
    } catch (e) {
        thrown.push(String((e && e.stack) || e));
    }

    const errors = collectErrors();
    // Anything the renderers object to between the stages, taken as it appears rather than at the end,
    // so a stage that never finishes does not take the reason with it.
    const duringIdle = [];

    stage('idle');
    let timedOut = false;
    let animationTimedOut = false;
    if (thrown.length === 0) {
        timedOut = await new Promise((resolve) => {
            let settled = false;
            const timer = setTimeout(() => {
                if (settled) return;
                settled = true;
                resolve(!continuous);
            }, continuous ? Math.min(timeout, 1000) : timeout);
            let pending = named.length;
            for (const slot of named) {
                renderer.queueForIdle(containerFor(slot), () => {
                    if (settled || --pending > 0) return;
                    settled = true;
                    clearTimeout(timer);
                    resolve(false);
                });
            }
        });

        if (!timedOut) {
            stage('flush');
            duringIdle.push(...collectErrors());
            await flushAll();
            if (animated) {
                stage('animation');
                animationTimedOut = await Promise.race([
                    animationSettled,
                    new Promise((resolve) => setTimeout(() => resolve('gave up'), ANIMATION_TIMEOUT + 1000)),
                ]).then(result => result === 'gave up' || result === true);
            }
        }
    }

    stage('done');
    // The handlers a sample lists to run once it is up, invoked the way the host invokes them: the
    // library gives the method, bound to its holder, and a sample whose configuration lives in one of
    // these renders nothing without it.
    const initialisers = [];
    // Not run for a fence that publishes one library item's code: its definition states only enough of
    // a page to reach that item, so a handler expecting the rest of it would fail on the omission
    // rather than on anything wrong.
    if (thrown.length === 0 && (!options || options.runInitialisers !== false)) {
        for (const list of ['onInit', 'onViewInit']) {
            const value = sample && sample[list];
            const names = typeof value === 'string' ? [value] : Array.isArray(value) ? value : [];
            for (const name of names) {
                if (!LibraryManager.instance.hasItem(name)) {
                    initialisers.push(`${name} is not in the library`);
                    continue;
                }
                try {
                    const item = LibraryManager.instance.getInstance(name);
                    if (typeof item === 'function') item();
                } catch (e) {
                    initialisers.push(`${name} threw: ${e && e.message}`);
                }
            }
        }
        if (initialisers.length === 0 && (sample.onInit || sample.onViewInit)) {
            // Something ran, so let it settle before looking at the page. An initializer that went to
            // the network is not settled until the response is back and its handler has run, so the
            // requests are waited for and then the work they queued is flushed.
            stage('fetches');
            if (await drainFetches(timeout)) {
                initialisers.push(`still waiting on the network after ${timeout}ms`);
            }
            await flushAll();
        }
    }

    const afterIdle = collectErrors();

    // Named references the renderer never got a value for: its own account of what is missing, rather
    // than this harness's guess from the JSON.
    const missingRefs = typeof renderer.getMissingRefs === 'function'
        ? renderer.getMissingRefs().slice() : [];

    const result = {
        errors: errors.concat(duringIdle, afterIdle),
        thrown,
        // What the previous sample left in a state this one had to clear up. Reported against this
        // sample because that is when it was found, and named as the previous sample's doing.
        leftBehind,
        timedOut,
        animationTimedOut,
        enumProblems: enumProblems.slice(),
        initialisers,
        bigCanvases: bigCanvases.slice(),
        drawn: { ...drawn },
        externalBytes: { ...externalBytes },
        unresolved: [...unresolved, ...missingRefs.filter(name => !unresolved.has(name))],
    };
    currentTimerOwner = 0;
    return result;
}

/**
 * The errors the renderers have collected, taken off their lists and said out loud as well as returned.
 *
 * Said out loud because of crashes. With errors collected rather than thrown, everything the renderer
 * objected to sits on its list until the load returns — and if the tab dies first, that list dies with
 * it. On the console they have left the page by the time it goes, so a crash report can carry what the
 * renderer was complaining about on the way down.
 */
function collectErrors() {
    const found = [];
    for (const each of [renderer, editorRenderer]) {
        if (each.hasErrors()) {
            for (const error of each.getErrors()) {
                found.push(error);
                console.debug(`[cr-error] ${error}`);
            }
            each.clearErrors();
        }
    }
    return found;
}

/**
 * The types in a sample that this page has no description for.
 *
 * A description module comes from a package, so a sample naming a component whose package is not
 * installed cannot be checked here — and reporting it as a failure says the sample is broken when the
 * truth is that the harness does not cover it. The renderer's own context is asked, rather than a list
 * of families kept by hand, so installing another package changes the answer without changing this.
 */
function unknownTypes(sample) {
    const found = new Set();
    const context = renderer.context;
    (function walk(node) {
        if (Array.isArray(node)) { node.forEach(walk); return; }
        if (!node || typeof node !== 'object') return;
        if (typeof node.type === 'string') {
            try {
                const properties = context.getAllProperties(node.type);
                if (!properties || properties.length === 0) found.add(node.type);
            } catch {
                found.add(node.type);
            }
        }
        for (const value of Object.values(node)) {
            if (value && typeof value === 'object') walk(value);
        }
    })(sample.descriptions ?? sample);
    return [...found];
}

window.igSampleHarness = {
    load,
    unknownTypes,
    registered: () => registered,
    itemCount: () => LibraryManager.instance.itemNames().length,
    // Read-only product state. If this remains true after CR has invoked AnimationIdleHandler, the
    // sample that just ran is the producer; continuing would only blame every later animated sample.
    animationStateActive: () => core.GlobalAnimationState?.d?.g?.() === true,
};

// Read by the runner to know the page is usable, rather than guessing with a delay.
window.igSampleHarnessReady = true;
