// A tooltip template must produce DOM synchronously, as the existing TestsAddNameTooltip item does.
igRegisterScript("TestsDoughnutTooltips", function (container) {
    const data = CodeGenHelper.findByName("TestsDoughnutTooltipBindings");
    if (data == null || typeof data.value !== "string") {
        throw new Error("Doughnut tooltip bindings were not provided");
    }
    const bindings = JSON.parse(data.value);
    const chart = CodeGenHelper.getDescription(container) || CodeGenHelper.getDescription("content");
    if (chart == null || chart.series == null) throw new Error("Missing doughnut chart");
    const seriesByName = new Map();
    for (let i = 0; i < chart.series.count; i++) {
        const series = chart.series.item(i);
        seriesByName.set(series.name, series);
    }
    const templates = new Map();
    for (const name of Object.keys(bindings)) {
        const series = seriesByName.get(name);
        if (series == null) throw new Error("Missing tooltip series: " + name);
        const member = bindings[name];
        series.showDefaultTooltip = false;
        if (member == null) {
            series.tooltipTemplate = null;
            continue;
        }
        if (member !== "Value" && member !== "Label") {
            throw new Error("Unsupported tooltip member: " + member);
        }
        const valuePath = series.valueMemberPath;
        const key = JSON.stringify([member, valuePath]);
        if (!templates.has(key)) {
            templates.set(key, function (context) {
                const value = member === "Label" ? context.itemLabel : context.item[valuePath];
                const tooltip = document.createElement("div");
                tooltip.textContent = value == null ? "" : String(value);
                return tooltip;
            });
        }
        series.tooltipTemplate = templates.get(key);
    }
    return null;
}, false);
