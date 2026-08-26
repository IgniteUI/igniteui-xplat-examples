// JS-only Blazor init item (mirrors WebComponents.ts). Invoked at page init by the test host
// (TestAppSurface.GetInitHandlers routes a *script* init item through MainCR.InvokeLibraryItemJsonSync).
// The series' tooltipTemplate is a JS function that builds the tooltip DOM, so it can only be assigned
// from JS -- hence this runs entirely here rather than in a C# init Action.
igRegisterScript("TestsAddNameTooltip", function (container) {
    // CodeGenHelper.getDescription(name) returns the control in the named slot (any control, not just
    // charts) -- the Blazor host's reusable analog of the WC CodeGenHelper. "content" is the slot's
    // wrapper <div id='content'>; the shim walks it to the actual control web component.
    var chart = CodeGenHelper.getDescription("content");
    if (chart == null || chart.series == null) {
        return null;
    }
    for (var i = 0; i < chart.series.count; i++) {
        var series = chart.series.item(i);
        if (series != null && !series.isLayer) {
            series.tooltipTemplate = function (context) {
                if (!context || !context.item) {
                    return null;
                }
                var tooltip = document.createElement("div");
                tooltip.className = "ui-chart-default-tooltip-content";
                tooltip.innerHTML = context.item.Name;
                return tooltip;
            };
        }
    }
    return null;
}, false);
