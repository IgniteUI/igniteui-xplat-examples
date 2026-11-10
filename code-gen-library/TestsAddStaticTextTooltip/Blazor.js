// JS-only Blazor init item (mirrors WebComponents.ts). Invoked at page init by the test host
// (TestAppSurface.GetInitHandlers routes a *script* init item through MainCR.InvokeLibraryItemJsonSync).
// Sets each non-layer series' tooltipTemplate to a fixed-text tooltip. The tooltipTemplate is a JS
// function that builds the tooltip DOM, so it can only be assigned from JS.
igRegisterScript("TestsAddStaticTextTooltip", function (container) {
    var chart = CodeGenHelper.getDescription("content");
    var template = function (context) {
        var tooltip = document.createElement("div");
        tooltip.className = "ui-chart-default-tooltip-content";
        tooltip.innerHTML = "text";
        return tooltip;
    };
    // A category chart makes its own series and gives each of them its tooltip template.
    if (chart.i.$type.name == "XamCategoryChart") {
        chart.tooltipTemplate = template;
        return null;
    }
    for (var i = 0; i < chart.series.count; i++) {
        var series = chart.series.item(i);
        if (series != null && !series.isLayer) {
            series.tooltipTemplate = template;
        }
    }
    return null;
}, false);
