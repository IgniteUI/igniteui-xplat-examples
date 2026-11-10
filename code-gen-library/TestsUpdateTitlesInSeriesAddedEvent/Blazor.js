// SeriesAdded handler that cycles series titles from the "SeriesAddedTitles" eventData config. Ported
// from Web.ts. Like the sibling TestsUpdateGroupsInSeriesAddedEvent, the Web.ts per-instance state
// (titleIndex/names) can't live on a shared registered script, so we (a) re-read the config every call
// -> the current test's titles are always used, never stale, and (b) key titleIndex off the sender (the
// chart) via a WeakMap -> a second test's chart starts at 0. Reads eventData via the host CodeGenHelper
// shim; guarded so a missing shim/config degrades to a no-op instead of throwing during SeriesAdded.
const tutisae_indexBySender = new WeakMap();

igRegisterScript("TestsUpdateTitlesInSeriesAddedEvent", (sender, args) => {
    if (typeof CodeGenHelper === "undefined" || !CodeGenHelper || !CodeGenHelper.findByName) {
        return;
    }
    const o = CodeGenHelper.findByName("SeriesAddedTitles");
    if (o == null || o["value"] == null) {
        return;
    }
    const obj = JSON.parse(o["value"]);
    const updateAnnotations = obj.includeAnnotations;
    const names = obj.names;

    if (args.series.isAnnotationLayer && !updateAnnotations) {
        return;
    }

    const key = (sender !== null && typeof sender === "object") ? sender : tutisae_indexBySender;
    let titleIndex = tutisae_indexBySender.get(key) || 0;
    if (titleIndex >= names.length) {
        titleIndex = 0;
    }

    if (names.includes(args.series.title)) {
        tutisae_indexBySender.set(key, titleIndex); // already set; keep the (clamped) index
        return;
    }
    args.series.title = names[titleIndex];
    tutisae_indexBySender.set(key, titleIndex + 1);
}, false);
