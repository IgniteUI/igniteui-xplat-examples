/*
 * Minimal DOM shim, loaded with `node -r ./dom-shim.js`.
 *
 * CodeGeneratingComponentRenderer constructs a CodeGenerationRendererAdapter, which drags
 * in the Web Components rendering classes (igc-html-element and friends). Those touch
 * `window`, `document` and `customElements` at module scope. Code *generation* never
 * renders anything, so stubs are enough — this exists only to let the modules load.
 *
 * Deliberately not jsdom: no real DOM behaviour is required, and a stub keeps the spike
 * dependency-free.
 */

class StubHTMLElement {
    constructor() {
        this.children = [];
        this.style = {};
        this.attributes = {};
        this.shadowRoot = null;
    }
    setAttribute(name, value) { this.attributes[name] = value; }
    getAttribute(name) { return this.attributes[name] ?? null; }
    removeAttribute(name) { delete this.attributes[name]; }
    appendChild(child) { this.children.push(child); return child; }
    removeChild(child) { this.children = this.children.filter(c => c !== child); return child; }
    addEventListener() { }
    removeEventListener() { }
    dispatchEvent() { return true; }
    attachShadow() { this.shadowRoot = new StubHTMLElement(); return this.shadowRoot; }
    getBoundingClientRect() { return { x: 0, y: 0, width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }; }
}

const documentStub = {
    createElement: () => new StubHTMLElement(),
    createElementNS: () => new StubHTMLElement(),
    createTextNode: () => new StubHTMLElement(),
    createDocumentFragment: () => new StubHTMLElement(),
    // lit-html walks a template it makes at module scope, so the walk has to answer — with nothing.
    createTreeWalker: () => ({ currentNode: null, nextNode: () => null, parentNode: () => null }),
    createComment: () => new StubHTMLElement(),
    importNode: (node) => node,
    adoptNode: (node) => node,
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: () => { },
    removeEventListener: () => { },
    head: new StubHTMLElement(),
    body: new StubHTMLElement(),
    documentElement: new StubHTMLElement(),
};

const customElementsStub = {
    define: () => { },
    get: () => undefined,
    whenDefined: () => Promise.resolve(),
};

const windowStub = {
    document: documentStub,
    customElements: customElementsStub,
    HTMLElement: StubHTMLElement,
    navigator: { userAgent: "node" },
    location: { href: "about:blank", hostname: "localhost" },
    addEventListener: () => { },
    removeEventListener: () => { },
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    devicePixelRatio: 1,
    requestAnimationFrame: cb => setTimeout(() => cb(Date.now()), 0),
    cancelAnimationFrame: id => clearTimeout(id),
    matchMedia: () => ({ matches: false, addListener() { }, removeListener() { } }),
};

const g = globalThis;
g.window = g.window ?? windowStub;
g.document = g.document ?? documentStub;
g.customElements = g.customElements ?? customElementsStub;
g.HTMLElement = g.HTMLElement ?? StubHTMLElement;
g.Element = g.Element ?? StubHTMLElement;
g.Node = g.Node ?? StubHTMLElement;
g.CustomEvent = g.CustomEvent ?? class CustomEvent { constructor(type, init) { this.type = type; this.detail = init && init.detail; } };
g.Event = g.Event ?? class Event { constructor(type) { this.type = type; } };
g.getComputedStyle = g.getComputedStyle ?? windowStub.getComputedStyle;
g.requestAnimationFrame = g.requestAnimationFrame ?? windowStub.requestAnimationFrame;
g.cancelAnimationFrame = g.cancelAnimationFrame ?? windowStub.cancelAnimationFrame;
g.ShadyDOM = g.ShadyDOM ?? undefined;
