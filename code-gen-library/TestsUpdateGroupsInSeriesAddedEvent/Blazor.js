//begin eventHandler
// Blazor JS handler for the domain chart's SeriesAdded event. On Blazor the event fires in the JS
// chart and its args (args.series.dataLegendGroup) cannot be mutated from the C# side, so this must
// run as a JS handler (registered via igRegisterScript). Ported from Web.ts. The registered name must
// match DomainChartSeriesBasicSteps: chart.SeriesAddedScript = "TestsUpdateGroupsInSeriesAddedEvent".
//
// State: Web.ts keeps groupIndex/groups as per-instance state (fresh per test, since each test builds a
// new handler instance). A registered JS script is a single shared function with no per-instance "this",
// so instead we (a) RE-READ the config every call -> the current test's groups are always used, never a
// stale cache from a previous test, and (b) key groupIndex off the sender (the chart) via a WeakMap ->
// a second test's chart starts at 0 while still cycling across one chart's SeriesAdded events.
//
// Reads the "SeriesAddedGroups" eventData via CodeGenHelper.findByName, like Web.ts. On Blazor that
// global is provided by a host-injected shim (MainLayout defines window.CodeGenHelper + populates
// window.igEventData per page load). Guarded below so a missing shim/eventData degrades to a no-op
// rather than throwing inside SeriesAdded (which would abort the chart render).
const tugisae_indexBySender = new WeakMap();

igRegisterScript("TestsUpdateGroupsInSeriesAddedEvent", (sender, args) => {
    if (typeof CodeGenHelper === "undefined" || !CodeGenHelper || !CodeGenHelper.findByName) {
        return;
    }
    const o = CodeGenHelper.findByName("SeriesAddedGroups");
    if (o == null || o["value"] == null) {
        return;
    }
    const obj = JSON.parse(o["value"]);
    const updateAnnotations = obj.includeAnnotations;
    const groups = obj.names;

    if (args.series.isAnnotationLayer && !updateAnnotations) {
        return;
    }

    // Per-chart groupIndex so different tests (different sender/chart) don't share state.
    const key = (sender !== null && typeof sender === "object") ? sender : tugisae_indexBySender;
    let groupIndex = tugisae_indexBySender.get(key) || 0;
    if (groupIndex >= groups.length) {
        groupIndex = 0;
    }
    if (groups.includes(args.series.dataLegendGroup)) {
        tugisae_indexBySender.set(key, groupIndex); // already set; keep the (clamped) index
        return;
    }
    args.series.dataLegendGroup = groups[groupIndex];
    tugisae_indexBySender.set(key, groupIndex + 1);
}, false);
//end eventHandler
