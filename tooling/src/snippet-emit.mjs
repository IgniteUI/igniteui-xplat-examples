/**
 * What a json-snippet fence emits — one implementation, for the build and for the check.
 *
 * These two used to be separate: generation had this logic, and check-snippet-emission.mjs had its
 * own reading of it, down to scraping the generator's style table with a regular expression. The
 * check passed a page the build then refused to generate, because the check marked a definition one
 * way and the build marked it another, and neither was wrong about its own rules. A check that emits
 * something the pages do not is not evidence about the pages.
 *
 * So the fence is emitted here, and both callers ask this. The check may still choose what to do
 * with what comes back — it emits for platforms a page is gated away from, which generation never
 * does — but what comes back is what would be published.
 */

/** The fence language each platform's code — as opposed to its markup — is written in. */
export const CODE_FENCE_LANG = {
    Angular: 'ts',
    React: 'tsx',
    WebComponents: 'ts',
    Blazor: 'razor',
    WPF: 'csharp',
    WinUI: 'csharp',
    Uno: 'csharp',
};

/** The shorthands for region lists that keep coming up. */
export const CHANNEL_PRESETS = {
    // What a topic showing code behind almost always wants.
    codeBehind: 'bindingImports...bindingInit,bindingCode',
};

/**
 * The channels a handler contributes to — the handler itself, the region it lands in, and the
 * imports its types need. A sample's handlers are asked for these and left alone for the rest.
 */
export const HANDLER_CHANNELS = new Set([
    'handler', 'eventHandlers', 'handlersImports', 'allCode', 'supporting', 'supportingTypes']);

/** The regions a fence's channel names, presets expanded and delimiters dropped. */
export function regionsOf(channel) {
    const expanded = CHANNEL_PRESETS[channel.trim()] ?? channel;
    return expanded.split(/(?:\.\.\.|,)/).map(one => one.trim()).filter(Boolean);
}

/**
 * Whether the definition asks for part of itself, rather than all of itself.
 *
 * A sidecar whose value opens with `+` is an inclusion, wherever it sits in the tree — on an
 * element's `$type` or on one of its properties.
 */
export function hasInclusionMarker(node) {
    if (Array.isArray(node)) return node.some(hasInclusionMarker);
    if (!node || typeof node !== 'object') return false;
    for (const [key, value] of Object.entries(node)) {
        // A sidecar carries one marker, a list of them where the thing belongs to more than one
        // channel, or an object splaying either of those by platform. Any marker anywhere in that
        // counts, so the shapes are flattened rather than enumerated.
        if (key.startsWith('$') && markerStrings(value).some(one => one.startsWith('+'))) {
            return true;
        }
        if (hasInclusionMarker(value)) return true;
    }
    return false;
}

/**
 * How each platform writes a comment, in code and in the markup it emits.
 *
 * Only needed for `$comments`. The renderer writes `$comment` itself and knows each platform's
 * syntax; this is the same knowledge, needed here because a comment anchored to a property is placed
 * after the renderer has finished.
 *
 * The markup column is not decoration: an HTML comment inside JSX is rendered text rather than a
 * comment, so getting it wrong puts the explanation on the page as content.
 */
const COMMENT_SYNTAX = {
    Angular: { code: ['//', ''], markup: ['<!--', '-->'] },
    WebComponents: { code: ['//', ''], markup: ['<!--', '-->'] },
    React: { code: ['//', ''], markup: ['{/*', '*/}'] },
    Blazor: { code: ['//', ''], markup: ['@*', '*@'] },
    WPF: { code: ['//', ''], markup: ['<!--', '-->'] },
    WinUI: { code: ['//', ''], markup: ['<!--', '-->'] },
    Uno: { code: ['//', ''], markup: ['<!--', '-->'] },
};

/**
 * The lines one `$comments` entry contributes for the platform being emitted.
 *
 * Accepts the shapes every sidecar accepts — one line, several, or either splayed by platform — so an
 * explanation that only applies to some platforms says so the way a marker does. A splay naming no
 * key for this platform contributes nothing, which is how a comment is made platform specific.
 */
export function commentLinesFor(value, platformKey) {
    if (value == null) return [];
    if (typeof value === 'string') return value.split('\n');
    if (Array.isArray(value)) return value.flatMap(one => commentLinesFor(one, platformKey));
    if (typeof value === 'object') {
        return Object.hasOwn(value, platformKey) ? commentLinesFor(value[platformKey], platformKey) : [];
    }
    return [];
}

/**
 * Whether an emitted line is the one a property's comment belongs above.
 *
 * Matched on the name with everything but letters and digits removed, because the same property is
 * `markerTypes` in TypeScript, `MarkerTypes` in C# and `marker-types` in markup, while the comment is
 * written once against the name the definition uses.
 *
 * The line also has to be an assignment of that property rather than any mention of it: without that,
 * a comment on `resolution` lands above the line that declares the chart the property belongs to,
 * because the emitted variable name contains the type name and often the property name too.
 */
function assignsProperty(line, property) {
    const flat = s => s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const target = flat(property);
    // Code: `chart.markerTypes = …`, `chart.markerTypes.add(…)`. Markup: `marker-types="…"`.
    const match = /^\s*(?:[\w.]*\.)?([\w-]+)\s*(?:=|\.[\w-]+\s*\(|:)/.exec(line)
        ?? /^\s*([\w-]+)\s*=\s*["'{]/.exec(line);
    return match !== null && flat(match[1]) === target;
}

/**
 * A region as its own block, flush left.
 *
 * The obvious `.trim()` is wrong here and was: it strips the leading whitespace of the *string*,
 * which is the first line's indentation and no other line's. A method lifted out of a class then
 * emits with its signature flush and its body still indented four spaces — and where a doc comment
 * sits above the signature, the comment goes flush and the signature stays indented, which is what a
 * reader sees first.
 *
 * Taking the smallest indentation any line has and removing that from all of them keeps the block's
 * internal shape while moving it out of whatever it was nested in.
 */
function dedent(text) {
    const lines = String(text).replace(/\s+$/, '').split('\n');
    while (lines.length > 0 && lines[0].trim() === '') lines.shift();
    if (lines.length === 0) return '';

    const indentOf = one => /^[ \t]*/.exec(one)[0].length;
    const body = lines.slice(1).filter(one => one.trim() !== '');

    // The renderer hands back a region whose first line is already flush while every other line still
    // carries the indentation it had in the file. A minimum taken across all of them is then zero and
    // nothing moves — which is how a doc comment ends up against the margin with the method it
    // documents indented beneath it. So the first line is judged on its own, and when it is already
    // flush the rest are brought up to meet it.
    const flushHead = indentOf(lines[0]) === 0 && body.length > 0;
    const measured = flushHead ? body : lines.filter(one => one.trim() !== '');
    const strip = Math.min(...measured.map(indentOf));
    if (strip === 0) return lines.join('\n');

    return [flushHead ? lines[0] : lines[0].slice(strip),
            ...lines.slice(1).map(one => one.slice(strip))].join('\n');
}

/** Every marker string a sidecar value holds, whichever of the three shapes it is written in. */
function markerStrings(value) {
    if (typeof value === 'string') return [value];
    if (Array.isArray(value)) return value.flatMap(markerStrings);
    if (value && typeof value === 'object') return Object.values(value).flatMap(markerStrings);
    return [];
}

/**
 * An emitter bound to one platform and one examples checkout.
 *
 * `knownItem` answers whether a name is a library item this platform has, which is how `item=` can
 * name something that is not a handler. Callers that cannot answer say so by leaving it out, and
 * then `item=` means what it always meant: one of the handlers the sample runs.
 */
export function fenceEmitter({ api, platform, examplesRoot, styleDefaults, knownItem = null, onWarn = () => {} }) {

    /**
     * The definition with all but the named items left out of its init lists.
     *
     * What a fence's `item=` asks for. A sample's handlers can include ones the topic is not
     * teaching — a set of shared helpers another handler calls, say — and there is no way to mark
     * one entry of a list, so the copy handed to the emitter lists only what the block should show.
     *
     * A name can also be a supporting item rather than a handler. Those are not in the init lists at
     * all: they are pulled in by the `requires` of the items that are, and the block asks for a
     * region of one. There is nothing to narrow for those, so the lists are left as they stand and
     * the region marker below is what selects the block.
     */
    function withOnlyTheseItems(parsed, only) {
        const wanted = only.split(',').map(one => one.trim()).filter(Boolean);
        const copy = JSON.parse(JSON.stringify(parsed));
        const lists = ['onInit', 'onViewInit'];

        const handlers = new Set();
        for (const list of lists) {
            for (const name of [].concat(copy[list] ?? [])) {
                if (wanted.includes(name)) handlers.add(name);
            }
        }

        // A name that is neither a handler this sample runs nor an item the library has is a mistake
        // worth stopping for: the block would otherwise come out empty, or hold the wrong handler,
        // and read as though that were the sample.
        const unaccounted = wanted.filter(name => !handlers.has(name) &&
                                                  !(knownItem !== null && knownItem(name)));
        if (unaccounted.length > 0) {
            throw new Error(`item="${only}" names nothing this sample uses: ${unaccounted.join(', ')}`);
        }
        if (handlers.size === 0) return copy;

        for (const list of lists) {
            const names = copy[list];
            if (names === undefined) continue;
            const kept = [].concat(names).filter(name => handlers.has(name));
            if (kept.length === 0) delete copy[list];
            else copy[list] = kept;
        }
        return copy;
    }

    /**
     * One named channel of a definition — the part that did not fit in the markup.
     *
     * Asked for by recording a zone over the whole element on that channel, which is the same
     * mechanism a sample uses to name its own snippets.
     */
    function emitChannel(json, channel, only) {
        let parsed;
        try {
            parsed = JSON.parse(json);
        } catch (e) {
            throw new Error(`not valid JSON: ${e.message}`);
        }
        // A sample may run several handlers where the topic teaches one of them. Marking the list
        // asks for all of them, so the ones not wanted are dropped from the copy being emitted; the
        // fence still states the whole sample, and only the block is narrowed.
        if (only) parsed = withOnlyTheseItems(parsed, only);
        // Asking for a component's code is asking for it built rather than declared, which is what
        // forcing code behind does. The performance topics show a property being set on a chart the
        // reader already has, and that is the lesson — not the same property written in markup.
        const asCode = channel === 'code';
        // Every description, not just the one called content. A sample places components around the
        // one in the middle -- a toolbar above it, a legend beside it -- and those carry the
        // properties that tie them to it: the toolbar's target is on the toolbar. Marking content
        // alone left them out of whatever channel was asked for, so their markup appeared and the
        // code that wires them did not.
        const described = parsed && parsed.descriptions && typeof parsed.descriptions === 'object'
            ? Object.values(parsed.descriptions).filter(one => one && typeof one === 'object')
            : [];
        const roots = described.length > 0 ? described : [parsed];
        // Marking the root includes everything under it, which is what a topic showing a whole
        // sample wants. A definition that marks parts of itself is asking for those parts instead,
        // so leave its own markers to say what is included and let the rest stay closed.
        if (!roots.some(hasInclusionMarker)) {
            for (const one of roots) one['$type'] = `+doc:${channel}`;
        }

        // A handler is not written where its name appears, so marking the element does not reach it.
        // The list of handler names carries its own sidecar, which registers the request the handler
        // emitter answers when it gets there.
        //
        // Only for the channels a handler writes to. Asking one for markup, or for the binding code
        // the companion fence probes, leaves the library item requested and never emitted, which is
        // an error — so a sample can keep its handlers listed while a fence shows only its markup.
        //
        // A fence naming one item asks for that item's code whatever the channel is called: a region
        // of it is a channel token too, and the set above cannot list names an item invents.
        if (HANDLER_CHANNELS.has(channel) || only) {
            for (const list of ['onInit', 'onViewInit']) {
                if (parsed[list] !== undefined) parsed[`$${list}`] = `+doc:${channel}`;
            }
        }

        const snippets = api.emitSnippets(JSON.stringify(parsed), platform, {
            examplesRoot, styleDefaults, forceCodeBehind: asCode,
        });
        // The definition may also produce the whole-sample snippet the emitter makes by default. The
        // one asked for here is the one keyed to this request.
        return snippets.find(s => s.key === `doc:${channel}`)?.content
            ?? snippets.find(s => s.channel === channel)?.content ?? '';
    }

    /**
     * The regions a fence asked for, in order, with whatever it asked to go between them.
     *
     * A topic showing code behind rarely wants one region: it wants the imports, then how the
     * component was reached, then the lines that do the work — and the hand written blocks it
     * replaces put an elision between those, because they are excerpts from different parts of a
     * file rather than one run of statements. Rather than a separate option for that, the delimiter
     * between two names says which it is:
     *
     *     channel="bindingImports...bindingInit,bindingCode"
     *
     * where "," joins two regions directly and "..." puts the platform's own comment ellipsis
     * between them. A region this platform writes nothing to drops out, and takes its delimiter with
     * it, so a block never opens or ends with a stray mark.
     */
    function composeChannels(json, spec, only) {
        const expanded = CHANNEL_PRESETS[spec.trim()] ?? spec;
        // Split on either delimiter, keeping which one it was.
        const parts = expanded.split(/(\.\.\.|,)/).map(one => one.trim()).filter(one => one !== '');

        let out = '';
        let pending = null;
        for (const part of parts) {
            if (part === ',' || part === '...') {
                pending = part;
                continue;
            }
            const content = dedent(emitChannel(json, part, only));
            if (content === '') continue;
            if (out !== '') {
                out += '\n';
                // "the rest was left out", as a comment. Composed blocks are code, so the line
                // comment is right for every one of them; a markup fence never composes.
                if (pending === '...') out += '// ...\n';
            }
            out += content;
            pending = null;
        }
        return out;
    }

    /**
     * The platform key a splayed sidecar uses for the platform being emitted. The renderer spells
     * these out in PlatformKeyFor; they are the platform name with a lower case first letter.
     */
    const platformSidecarKey = () => platform.charAt(0).toLowerCase() + platform.slice(1);

    /**
     * The channels this platform's inclusion markers name, anywhere in the definition.
     *
     * Reads the same sidecars the renderer does, including the per platform form, and applies the
     * same rule: a platform's own entry wins, "default" covers the platforms that have none.
     */
    function markedChannelsFor(node, found = new Set()) {
        if (Array.isArray(node)) {
            for (const item of node) markedChannelsFor(item, found);
            return [...found];
        }
        if (!node || typeof node !== 'object') return [...found];

        for (const [key, value] of Object.entries(node)) {
            if (key.startsWith('$') && value && typeof value === 'object' && !Array.isArray(value)) {
                // The per platform form: this platform's entry, or the default when it has none.
                const key_ = platformSidecarKey();
                const named = Object.keys(value).find(one => one.toLowerCase() === key_.toLowerCase());
                const chosen = value[named ?? Object.keys(value).find(one => one.toLowerCase() === 'default')];
                for (const marker of [].concat(chosen ?? [])) addMarkedChannel(marker, found);
                continue;
            }
            if (key.startsWith('$')) {
                for (const marker of [].concat(value)) addMarkedChannel(marker, found);
                continue;
            }
            markedChannelsFor(value, found);
        }
        return [...found];
    }

    function addMarkedChannel(marker, found) {
        if (typeof marker !== 'string' || !marker.startsWith('+')) return;
        // "+doc:code" — the channel follows the id, and no channel at all means markup.
        const [, channel] = marker.replace(/^\+>?/, '').split(':');
        found.add(channel ?? 'markup');
    }

    /**
     * The order `auto` reads channels in, whichever of them it is asking for.
     *
     * A reader meets the declaration first, then the imports the code beside it needs, then the
     * code: the fields, what runs on init, the binding itself, and the handlers it wires.
     */
    const AUTO_ORDER = [
        'markup', 'code',
        'bindingImports', 'handlersImports', 'modulesImports',
        'bindingFields', 'bindingInit', 'bindingCode',
        'eventHandlers',
    ];

    /**
     * What `auto` asks for when the fence says nothing more.
     *
     * The declaration and the code that completes it. Imports and field declarations are left out:
     * some topics showed them and some left them implied, and which is right is a property of the
     * topic rather than of the platform -- so a fence that wants them says `include="bindingImports"`
     * and one that does not is not given them merely because this platform has content there.
     * `code` sits beside `markup` because the two are ways of saying the same component, never both.
     */
    const AUTO_DEFAULT = ['markup', 'code', 'bindingInit', 'bindingCode', 'eventHandlers'];

    /**
     * The channels one `auto` fence asks for: what it asks for by default, what the definition
     * marked, and what the fence added, less anything it dropped.
     *
     * `include` and `omit` take channel names, the same ones a fence could have named outright, so
     * matching a prior teach is naming the difference from the default rather than restating the
     * whole list.
     */
    function autoChannelsFor(marked, include, omit) {
        const asked = new Set([...AUTO_DEFAULT, ...marked, ...regionsOfMaybe(include)]);
        for (const one of regionsOfMaybe(omit)) asked.delete(one);

        // Known channels in reading order, then anything asked for that this list has never heard
        // of -- a region an item invents is a channel token too.
        const known = AUTO_ORDER.filter(one => asked.has(one));
        const rest = [...asked].filter(one => !AUTO_ORDER.includes(one));
        return [...known, ...rest];
    }

    function regionsOfMaybe(value) {
        return value ? regionsOf(value) : [];
    }

    /**
     * Everything this platform has to say about the definition, in the order above.
     *
     * A topic teaches one thing, and which parts carry it differs by platform: a value written as
     * an attribute on one is assigned in code on another, and a component declared in markup still
     * needs the binding that attaches it to its data. Asking for a single channel means whichever
     * parts fall outside it are simply absent -- a page saying "as shown in the code below" above a
     * block that does not show it.
     *
     * So every channel is asked, and the ones with content are kept. A definition that marks what
     * it wants is asked for those first, since the marks are the author saying which parts are the
     * lesson; the rest are still looked in, because a mark says what to include and not what to
     * leave out.
     */
    function emitAutoParts(json, only, include, omit) {
        const marked = markedChannelsFor(JSON.parse(json));
        const order = autoChannelsFor(marked, include, omit);

        const parts = [];
        const seen = new Set();
        for (const channel of order) {
            // Whichever of the pair came first is the form this platform teaches in.
            if (channel === 'code' && parts.some(one => one.channel === 'markup')) continue;
            if (channel === 'markup' && parts.some(one => one.channel === 'code')) continue;

            let content;
            try {
                content = emitChannel(json, channel, only);
            } catch (e) {
                // A channel a definition cannot answer for is not an error here: `auto` is asking
                // what there is, and a handler channel on a sample with no handlers throws.
                continue;
            }
            content = (content ?? '').trim();
            // Channels overlap -- a region asked for by name can come back identical to the whole
            // it belongs to -- so the same block is not shown twice.
            if (content === '' || seen.has(content)) continue;
            seen.add(content);
            parts.push({ channel, content });
        }
        return parts;
    }

    /**
     * The definitions in a snippet body, which is usually one and occasionally several.
     *
     * A few topics show two components side by side because the point is the comparison — chart
     * performance sets an ordinal axis on a FinancialChart and on a DataChart in the same breath,
     * and neither is a child of the other. Written as a JSON array, emitted in order, one blank line
     * between them, which is what the hand written block did.
     */
    function definitionsOf(json) {
        let parsed;
        try {
            parsed = JSON.parse(json);
        } catch {
            return [json];   // let the emitter report it, with the message it would have given anyway
        }
        return Array.isArray(parsed) ? parsed.map(one => JSON.stringify(one)) : [json];
    }

    function marksPartOfItself(json) {
        try {
            const parsed = JSON.parse(json);
            const root = parsed && parsed.descriptions && parsed.descriptions.content
                ? parsed.descriptions.content
                : parsed;
            return hasInclusionMarker(root);
        } catch {
            // Not this function's error to report; emitting it says the same thing with the text.
            return false;
        }
    }

    /**
     * The code that has to run beside this markup, when the markup could not say everything.
     *
     * Some properties cannot be written as an attribute on some platforms — a data source or a
     * tooltip template on Web Components is assigned in script — and the emitter is the thing that
     * knows which, because it is what decided. So a topic does not have to declare that a code block
     * is needed: if anything was left out of the markup, it appears here, and if nothing was,
     * nothing appears. Angular binds its data source in the template and gets no block; Web
     * Components gets two lines.
     *
     * What that block shows is the assignments alone, which is what 149 of the 192 code blocks in
     * the hand written topics show. The 36 that also show how the reference was obtained, and the 27
     * that declare a field, are the introductory pages; `code="allCode"` gets that fuller form, and
     * `code="none"` turns the whole thing off for a topic that would rather write its own.
     */
    function companionCode(json, attrs) {
        const mode = attrs.code || 'auto';
        if (mode === 'none') return '';

        // The assignments decide whether anything is shown at all, even when the fuller form is
        // asked for: field declarations and element lookups on their own teach nothing.
        const bindings = emitChannel(json, 'bindingCode');
        if (bindings.trim() === '') return '';

        const body = mode === 'auto' ? bindings : emitChannel(json, mode);
        return body.trim();
    }

    /**
     * What a fence emits: the channel it turned out to be, its content, and the code that has to run
     * beside it. Empty content means this platform writes nothing here, which is not an error — a
     * fence for a channel a platform does not use drops out the way a foreign code block does.
     */

    /**
     * `$comments` put back into the code the definition produced.
     *
     * The renderer's own `$comment` writes a remark ahead of an element, which covers a block's
     * opening line and — because elements nest — a remark ahead of a series or an axis inside one.
     * What it cannot do is annotate a single property, and that is what a hand written block used
     * most: a line saying what the next assignment is for.
     *
     *     "$comments": { "markerTypes": "on CategoryChart or FinancialChart" }
     *
     * Keyed by property, so it cannot be confused with the per platform splay a value may itself be.
     * Each entry lands immediately above the line that property produced, indented to match it, in
     * the platform's own comment syntax.
     *
     * An entry that anchors to nothing is reported rather than dropped. A property renamed out from
     * under its comment would otherwise take the explanation with it silently, which is the failure
     * this whole mechanism exists to stop.
     */
    function interleaveComments(json, content, isMarkup) {
        if (content === null || content.trim() === '') return content;
        if (!content.includes('\n') && !/\$comments/.test(json)) return content;

        const roots = definitionsOf(json)
            .map(one => { try { return JSON.parse(one); } catch { return null; } })
            .filter(Boolean);
        if (!roots.length) return content;

        const key = platformSidecarKey();
        const [open, close] = (COMMENT_SYNTAX[platform] ?? COMMENT_SYNTAX.WebComponents)[isMarkup ? 'markup' : 'code'];

        // Every $comments entry anywhere in the tree, not only on the root: a definition nests, and
        // the property worth explaining is as often on a series as on the chart.
        const wanted = [];
        (function walk(node) {
            if (node === null || typeof node !== 'object') return;
            if (Array.isArray(node)) { node.forEach(walk); return; }
            for (const [property, value] of Object.entries(node.$comments ?? {})) {
                const lines = commentLinesFor(value, key);
                if (lines.length) wanted.push({ property, lines });
            }
            for (const [k, v] of Object.entries(node)) if (k !== '$comments') walk(v);
        })(roots.length === 1 ? roots[0] : roots);

        if (!wanted.length) return content;

        const out = [];
        const placed = new Set();
        for (const line of content.split('\n')) {
            for (const entry of wanted) {
                if (placed.has(entry) || !assignsProperty(line, entry.property)) continue;
                const indent = /^\s*/.exec(line)[0];
                for (const text of entry.lines) {
                    out.push(`${indent}${open} ${text.trim()}${close ? ` ${close}` : ''}`);
                }
                placed.add(entry);
            }
            out.push(line);
        }

        for (const entry of wanted) {
            if (!placed.has(entry)) {
                onWarn(`$comments entry for "${entry.property}" matched no emitted line on ${platform};`
                    + ' the comment was left out.');
            }
        }
        return out.join('\n');
    }


    /**
     * The elision between a block's field declarations and the statements below them.
     *
     * A region can hold both. A handler that requires a supporting item is emitted with the field
     * that holds it — a class member — followed by the handler's own body, which is statements inside
     * a method. They are excerpts from two different parts of a file, exactly what the `...` between
     * two channel names marks, but here they arrive inside one region and that delimiter has nothing
     * to sit between.
     *
     * Without the mark the block reads as one run of statements, and a reader copying it puts a field
     * declaration in the middle of a method.
     */
    /**
     * The import for `ModuleManager`, when a block calls it and nothing brought it in.
     *
     * `moduleRegistration` emits `ModuleManager.register(...)` and `modulesImports` lists the modules
     * being registered -- but neither contributes the import of `ModuleManager` itself, so 12 of the 17
     * Web Components pages that show a registration shipped code that fails on an undefined name. Only
     * five had it, and those by accident, from another block on the same page.
     *
     * Compensating for that here rather than in the renderer, which is where it belongs: the region is
     * the renderer's to fill and a fix there needs a product release, while these pages are wrong now.
     * Remove this once `modulesImports` carries it.
     *
     * Web Components only. Angular, React and Blazor register through the modules themselves --
     * `mods.forEach(m => m.register())` -- and never name `ModuleManager`.
     */
    const MODULE_MANAGER_PACKAGE = { WebComponents: 'igniteui-webcomponents-core' };

    function withModuleManagerImport(content) {
        const pkg = MODULE_MANAGER_PACKAGE[platform];
        if (!pkg || content === null) return content;
        if (!/\bModuleManager\s*\./.test(content)) return content;
        if (/import\s*\{[^}]*\bModuleManager\b/.test(content)) return content;
        return `import { ModuleManager } from '${pkg}';\n` + content;
    }

    /**
     * The harness calling the handler, dropped from a block that shows the handler.
     *
     * A sample invokes its handler from the component's init, and the recorded region takes that call
     * in along with the body -- so a block teaching `mapBindingShpFileLoad` ended by calling
     * `this.mapBindingShpFileLoad()`, which reads as part of the lesson and is not.
     *
     * Matched against the item's own name, so the only thing it can remove is the handler calling
     * itself. A call to anything else is code the reader needs.
     */
    function withoutSelfInvocation(content, only, json) {
        if (content === null) return content;

        // `item=` names them when a block shows one handler. Without it the block shows whatever the
        // sample runs, so the init lists are the same answer.
        let names = only ? only.split(',').map(one => one.trim()).filter(Boolean) : [];
        if (names.length === 0) {
            for (const root of definitionsOf(json)) {
                try {
                    const parsed = JSON.parse(root);
                    for (const list of ['onInit', 'onViewInit']) {
                        names = names.concat([].concat(parsed[list] ?? []));
                    }
                } catch { /* the emitter reports a bad definition with a better message */ }
            }
        }
        if (names.length === 0) return content;
        let out = content;
        for (const name of names) {
            const camel = name.charAt(0).toLowerCase() + name.slice(1);
            out = out.replace(new RegExp(`^[ \\t]*this\\.${camel}\\(\\);[ \\t]*\\r?\\n?`, 'gmi'), '');
        }
        return out.replace(/\n{3,}/g, '\n\n').replace(/\s+$/, '');
    }

    function elideAfterFields(content) {
        if (content === null || content.trim() === '') return content;
        const lines = content.split('\n');

        // A field: an access modifier, then a name and optional type, then an initialiser. Nothing
        // bracketed before the `=`, which is what keeps a method signature out.
        const isField = one => /^\s*(?:private|protected|public|internal)\s+[^(){}=]*=[^;]*;\s*$/.test(one);
        const isImport = one => /^\s*(?:import\b|using\b|@using\b)/.test(one);
        const isElision = one => /^\s*(?:\/\/|<!--|@\*|\{\/\*)\s*\.\.\./.test(one);

        // Fields do not have to open the block. A composed channel can put the imports first, with
        // their own elision after them, and the field then sits in the middle — so the preamble is
        // walked rather than assumed to start at line one.
        let lastField = -1;
        let i = 0;
        for (; i < lines.length; i++) {
            const one = lines[i];
            if (isField(one)) { lastField = i; continue; }
            if (one.trim() === '' || isImport(one) || isElision(one)) continue;
            break;
        }
        if (lastField === -1) return content;

        const after = lines.slice(lastField + 1);
        while (after.length > 0 && after[0].trim() === '') after.shift();
        // Nothing below it to be separated from, or already separated.
        if (after.length === 0 || isElision(after[0])) return content;

        return [...lines.slice(0, lastField + 1), '// ...', ...after].join('\n');
    }

    function emitFence(json, attrs) {
        const channel = attrs.channel || 'markup';

        if (channel === 'auto') {
            // The fence names no channel and takes what this platform has, because the topic does
            // not teach the same thing everywhere: a value written as an attribute on one platform
            // is assigned in code on another, and a component declared in markup still needs the
            // binding that attaches it to its data. Naming one channel left whichever parts fell
            // outside it absent -- a page saying "as shown in the code below" above a block that
            // did not show it.
            const parts = emitAutoParts(json, attrs.item, attrs.include, attrs.omit);
            if (parts.length === 0) {
                throw new Error(`channel="auto" found nothing for ${platform} in this definition`);
            }

            // Markup and code are two fences, in that order, which is the shape a fence already
            // has: one block and its companion. What decides which a part belongs to is the content
            // rather than the channel's name -- a template item is markup on the XAML platforms and
            // a function on the web, under the one channel name.
            const dressed = parts.map(part => {
                const isMarkup = part.channel === 'markup' || part.content.trimStart().startsWith('<');
                return {
                    channel: part.channel,
                    isMarkup,
                    content: isMarkup
                        ? interleaveComments(json, part.content, true)
                        : interleaveComments(json, withModuleManagerImport(elideAfterFields(withoutSelfInvocation(part.content, attrs.item, json))), false),
                };
            });

            const join = list => list.map(one => one.content.trim()).filter(Boolean).join('\n\n');
            const markupParts = dressed.filter(one => one.isMarkup);
            const codeParts = dressed.filter(one => !one.isMarkup);

            if (markupParts.length > 0) {
                return { channel: 'markup', content: join(markupParts), companion: join(codeParts) };
            }
            return { channel: codeParts[0].channel, content: join(codeParts), companion: '' };
        }

        if (channel === 'markup') {
            const content = definitionsOf(json)
                // A definition that marks part of itself is emitted twice — once whole, and once as
                // the part asked for. The part is the block the topic wants.
                .map(one => marksPartOfItself(one)
                    ? emitChannel(one, 'markup')
                    : api.emitSingleSnippet(one, platform, {
                        examplesRoot, styleDefaults, defaultSnippetId: 'main',
                    }))
                .filter(one => one !== null && one.trim() !== '')
                // Trimmed before joining: several definitions in one block are separated by one
                // blank line, not by however many the last of them happened to end with.
                .map(dedent)
                .join('\n\n');
            return {
                channel,
                content: interleaveComments(json, content, true),
                companion: content.trim() === '' ? '' : companionCode(json, attrs),
            };
        }

        // Several regions can be asked for at once, and the delimiter between their names says what
        // goes between them in the block. See composeChannels.
        return {
            channel,
            content: interleaveComments(json, withModuleManagerImport(elideAfterFields(withoutSelfInvocation(composeChannels(json, channel, attrs.item), attrs.item, json))), false),
            companion: '',
        };
    }

    return { emitFence, emitChannel, composeChannels, companionCode, definitionsOf };
}

/**
 * Whether a name is a library item this platform has, memoised.
 *
 * Asked once per name: the answer needs the library loaded and the item's content resolved for the
 * platform, and a page can name the same supporting item on every fence in a section.
 */
export function libraryItemLookup(api, platform, examplesRoot) {
    const answered = new Map();
    return (name) => {
        if (!answered.has(name)) {
            let known = false;
            try {
                known = api.itemsMissingForPlatform(platform, { examplesRoot, items: [name] })
                           .length === 0;
            } catch {
                // An emitter that cannot answer is not evidence the item is missing; the emission
                // itself will say so, with a message about the thing that actually failed.
                known = false;
            }
            answered.set(name, known);
        }
        return answered.get(name);
    };
}
