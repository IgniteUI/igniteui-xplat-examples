//begin eventHandler
// JS-level domain-chart axis scale/unscale primitive for the Blazor test host. This is an EXACT port
// of the leaf axis operations in the translator's WC output (XSharpTestHost.WC PerformScalingHandler:
// scaleValue / unscaleValue / findAxis / findSeries + the bubble radiusScale unscale). On Blazor the
// internal MainDataChart / its axes+series live only in the JS runtime, so IgbDomainChart.
// ExportDomainChartTestingInfo() (the C# wrapper) throws and the host-side findAxis chain can't run.
// The C# PerformScalingHandler forwards each leaf operation here through the CR's generic library-item
// ref-invoke. All WC PlatformManager conversions (toPixelUnits/fromPixelUnits/toTicksValue/
// fromTicksValue) are identity, and dateFromTicks(t) = new Date(t), so the ops collapse to direct
// calls on the axis externalObject (the same object ExtractDomainChartState reads).
//
// args: (container, op, name, value)
//   op "scale"         -> axis.scaleValue(value)                 (name = axis name)
//   op "unscale"       -> type-switched unscale                  (name = axis name)
//   op "unscaleRadius" -> bubble radiusScale interpolation       (name = series name)
// returns: a number (NaN maps to JSON null on the way back, which the C# side reads as NaN).
igRegisterScript("DomainChartScaleOp", (container, op, name, value) => {

    var getInternalTypeName = (control) => {
        var n = (control.$type && !control._implementation) ? control.$type.name : control.i.$type.name;
        return n.split("Xam").join("").split("Igg").join("");
    };

    // findChart / exportDomainChartTestingInfo traversal (identical to ExtractDomainChartState).
    var findChart = (el, depth) => {
        if (!el || depth > 6) { return null; }
        if (typeof el.exportDomainChartTestingInfo === "function") { return el; }
        var kids = el.children || [];
        for (var k = 0; k < kids.length; k++) {
            var r = findChart(kids[k], depth + 1);
            if (r) { return r; }
        }
        return null;
    };
    var chart = findChart(container, 0);
    if (!chart) { return NaN; }
    var edc = chart.exportDomainChartTestingInfo();
    var idc = edc ? ((edc.i && edc.i.mainDataChart) || edc.mainDataChart || (edc.i && edc.i.a) || edc.a || null) : null;
    if (!idc) { return NaN; }

    var findAxis = (nm) => {
        var intAxes = idc.axes;
        if (!intAxes) { return null; }
        for (var i = 0; i < intAxes.count; i++) {
            var ax = intAxes._inner[i].externalObject;
            if (ax != null && ax.name == nm) { return ax; }
        }
        return null;
    };
    var findSeries = (nm) => {
        var intSeries = idc.series;
        if (!intSeries) { return null; }
        for (var s = 0; s < intSeries.count; s++) {
            var se = intSeries._inner[s].externalObject;
            if (se != null && se.name == nm) { return se; }
        }
        return null;
    };

    // PerformScalingHandler.unscaleValue (exact type switch; conversions are identity).
    var unscaleAxis = (axis) => {
        var axisType = getInternalTypeName(axis);
        switch (axisType) {
            case "CategoryXAxis":
            case "CategoryYAxis":
            case "OrdinalTimeXAxis":
                return axis.unscaleValue(value);
            case "NumericYAxis":
            case "NumericXAxis":
            case "NumericRadiusAxis":
            case "PercentChangeYAxis":
                return axis.unscaleValue(value);
            case "CategoryAngleAxis":
                return axis.getUnscaledAngle(value);
            case "NumericAngleAxis":
                return axis.getUnscaledAngle(value);
            case "TimeXAxis":
            case "CategoryDateTimeXAxis":
                return new Date(axis.unscaleValue(value)).getTime();
        }
        return NaN;
    };

    if (op === "scale") {
        var a1 = findAxis(name);
        return a1 != null ? a1.scaleValue(value) : NaN;
    }
    if (op === "unscale") {
        var a2 = findAxis(name);
        return a2 != null ? unscaleAxis(a2) : NaN;
    }
    if (op === "unscaleRadius") {
        // Bubble radiusScale unscale (PerformScalingHandler.unscaleValues radiusAxis branch).
        var series = findSeries(name);
        if (series == null || getInternalTypeName(series) != "BubbleSeries") { return NaN; }
        var radiusScale = series.radiusScale;
        if (radiusScale == null) { return value; }
        var minimumValue = radiusScale.minimumValue;
        var maximumValue = radiusScale.maximumValue;
        var minimumDataValue = Number.MAX_VALUE;
        var maximumDataValue = -Number.MAX_VALUE;
        var radiuspath = series.radiusMemberPath;
        var lds = new window.igLocalDataSource();
        lds.dataSource = series.dataSource;
        lds.flushAutoRefresh();
        var schema = lds.actualSchema;
        // Resolve the schema property name matching the radius member path (with/without brackets).
        var propName = radiuspath;
        if (schema != null && schema.propertyNames != null) {
            var stripped = (radiuspath && radiuspath.charAt(0) === "[") ? radiuspath.substring(1, radiuspath.length - 1) : radiuspath;
            for (var pi = 0; pi < schema.propertyNames.length; pi++) {
                var pn = schema.propertyNames[pi];
                var pnStripped = (pn.charAt(0) === "[") ? pn.substring(1, pn.length - 1) : pn;
                if (pn === radiuspath || pnStripped === stripped) { propName = pn; break; }
            }
        }
        var nonNumeric = false;
        for (var di = 0; di < lds.actualCount; di++) {
            var currRadiusValue = lds.getItemPropertyAtIndex(di, propName);
            if (currRadiusValue == null) { currRadiusValue = NaN; }
            if (typeof currRadiusValue !== "number") { nonNumeric = true; break; }
            if (isNaN(currRadiusValue)) { continue; }
            minimumDataValue = Math.min(minimumDataValue, currRadiusValue);
            maximumDataValue = Math.max(maximumDataValue, currRadiusValue);
        }
        if (nonNumeric) { return value; }
        var p = (value - minimumValue) / (maximumValue - minimumValue);
        return minimumDataValue + p * (maximumDataValue - minimumDataValue);
    }
    return NaN;
}, false);
//end eventHandler
