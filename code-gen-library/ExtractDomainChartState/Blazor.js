//begin eventHandler
// JS-level domain-chart state extractor for the Blazor test host. This is an EXACT port of the
// translator's TS output for the WC host (XSharpTestHost.WC/src/ig/igniteui-testing:
// CategoryChartExtended.getState + ChartStateHelper.getAxisState/getSeriesState + DataHelper.toJsonArray +
// PlatformManager.getInternalTypeName/fromPixelUnits/getTotalMillisecondsFromEpoch). On Blazor the
// internal MainDataChart / its series+axes / their live data sources exist only in the JS runtime,
// so the extraction runs here and returns the same {axes,series} JSON the C# state objects produce.
// Invoked by name through the CR's generic library-item ref-invoke.
igRegisterScript("ExtractDomainChartState", (container) => {

    // --- manager shims (exact WC PlatformManager behaviour) ---
    var getInternalTypeName = (control) => {
        var name = (control.$type && !control._implementation) ? control.$type.name : control.i.$type.name;
        return name.split("Xam").join("").split("Igg").join("");
    };
    var fromPixelUnits = (v) => v;                          // PlatformManager.fromPixelUnits: identity
    var getTotalMillisecondsFromEpoch = (dt) => +dt;        // PlatformManager.getTotalMillisecondsFromEpoch
    var getName = (axis) => (axis == null ? null : axis.name);      // DataChartExtended.getName
    var getName1 = (series) => (series == null ? null : series.name); // DataChartExtended.getName1

    // --- DataHelper.toJsonArray (exact) ---
    var toJsonArray = (dataSource) => {
        var lds = new window.igLocalDataSource();
        lds.dataSource = dataSource;
        lds.flushAutoRefresh();
        var ret = [];
        var schema = lds.actualSchema;
        if (schema == null || schema.propertyNames == null) { return ret; }
        for (var i = 0; i < lds.actualCount; i++) {
            var item = lds.getItemAtIndex(i);
            if (item == null) { ret.push(null); continue; }
            var obj = {};
            for (var j = 0; j < schema.propertyNames.length; j++) {
                var name = schema.propertyNames[j];
                var displayName = name;
                if (displayName.charAt(0) === "[") { displayName = displayName.substring(1, displayName.length - 1); }
                var val = lds.getItemPropertyAtIndex(i, name);
                if (val instanceof Date) { val = +val; }
                obj[displayName] = val;
            }
            ret.push(obj);
        }
        return ret;
    };

    // --- ChartStateHelper.getAxisState (exact) ---
    var getAxisState = (axis) => {
        var type = getInternalTypeName(axis);
        var data = { name: getName(axis), type: type, isInverted: axis.isInverted, labelFormat: axis.labelFormat, interval: NaN, minorInterval: NaN };
        if (axis.isNumeric) {
            data.referenceValue = axis.referenceValue;
            data.isLogarithmic = axis.isLogarithmic;
            data.logarithmBase = axis.logarithmBase;
            data.interval = axis.actualInterval;
            data.minorInterval = axis.actualMinorInterval;
            data.minimumValue = axis.actualMinimumValue;
            data.maximumValue = axis.actualMaximumValue;
        }
        if (axis.isCategory) {
            if (axis.label != null) { data.label = axis.label; }
            if (axis.dataSource != null) { data.datasource = toJsonArray(axis.dataSource); }
            data.minimumValue = 0;
            data.maximumValue = axis.itemsCount;
        }
        if (axis.isDateTime) {
            data.datetimepath = axis.dateTimeMemberPath;
            data.minimumValue = getTotalMillisecondsFromEpoch(axis.actualMinimumValue);
            data.maximumValue = getTotalMillisecondsFromEpoch(axis.actualMaximumValue);
            if (type != "TimeXAxis") { data.interval = axis.actualInterval; }
        }
        return data;
    };

    // --- ChartStateHelper.getSeriesState (exact) ---
    var getSeriesState = (series, index) => {
        var type = getInternalTypeName(series);
        var data = {
            name: getName1(series), type: type, index: index,
            actualAreaFillOpacity: series.actualAreaFillOpacity,
            actualMarkerFillOpacity: series.actualMarkerFillOpacity,
            actualHighlightingFadeOpacity: series.actualHighlightingFadeOpacity
        };
        if (series.dataSource != null) { data.datasource = toJsonArray(series.dataSource); }
        if (series.highlightedDataSource != null) { data.highlightDatasource = toJsonArray(series.highlightedDataSource); }
        if (series.isCategory && !series.isRange && !series.isStacked) {
            data.valuePath = series.valueMemberPath;
            data.highlightedValuePath = series.highlightedValueMemberPath;
            if (series.xAxis != null) { data.xAxis = getName(series.xAxis); }
            if (series.yAxis != null) { data.yAxis = getName(series.yAxis); }
            if (data.yAxis != null && data.xAxis != null) {
                data.categoryWidth = fromPixelUnits(series.getCategoryWidth());
                data.offset = fromPixelUnits(series.getOffsetValue());
            }
        } else {
            if (series.isRange) {
                data.highPath = series.highMemberPath;
                data.lowPath = series.lowMemberPath;
                if (series.xAxis != null) { data.xAxis = getName(series.xAxis); }
                if (series.yAxis != null) { data.yAxis = getName(series.yAxis); }
                if (data.yAxis != null && data.xAxis != null) {
                    data.categoryWidth = fromPixelUnits(series.getCategoryWidth());
                    data.offset = fromPixelUnits(series.getOffsetValue());
                }
            } else if (series.isFinancial) {
                data.openPath = series.openMemberPath;
                data.closePath = series.closeMemberPath;
                data.lowPath = series.lowMemberPath;
                data.highPath = series.highMemberPath;
                if (series.xAxis != null) { data.xAxis = getName(series.xAxis); }
                if (series.yAxis != null) { data.yAxis = getName(series.yAxis); }
            } else if (series.isScatter) {
                if (series.xAxis != null) { data.xAxis = getName(series.xAxis); }
                if (series.yAxis != null) { data.yAxis = getName(series.yAxis); }
                if (series.radiusScale != null) {
                    data.radiusScale = {
                        minimumValue: series.radiusScale.minimumValue,
                        maximumValue: series.radiusScale.maximumValue,
                        isLogarithmic: series.radiusScale.isLogarithmic
                    };
                }
            } else if (series.isStacked && !series.isVertical) {
                if (series.xAxis != null) { data.xAxis = getName(series.xAxis); }
                if (series.yAxis != null) { data.yAxis = getName(series.yAxis); }
                if (data.xAxis != null && data.yAxis != null) {
                    data.categoryWidth = fromPixelUnits(series.getCategoryWidth());
                    data.offset = fromPixelUnits(series.getOffsetValue());
                }
            } else if (series.isStacked && series.isVertical) {
                if (series.yAxis != null) { data.xAxis = getName(series.xAxis); }
                if (series.yAxis != null) { data.yAxis = getName(series.yAxis); }
                data.categoryWidth = fromPixelUnits(series.getCategoryWidth());
                data.offset = fromPixelUnits(series.getOffsetValue());
            } else if (series.isRadial) {
                if (series.angleAxis != null) { data.xAxis = getName(series.angleAxis); }
                if (series.valueAxis != null) { data.yAxis = getName(series.valueAxis); }
                data.valuePath = series.valueMemberPath;
                data.highlightedValuePath = series.highlightedValueMemberPath;
                if (data.xAxis != null && data.yAxis != null) {
                    data.categoryWidth = fromPixelUnits(series.getCategoryWidth());
                    data.offset = fromPixelUnits(series.getOffsetValue());
                }
            } else if (series.isPolar) {
                if (series.angleAxis != null) { data.xAxis = getName(series.angleAxis); }
                if (series.radiusAxis != null) { data.yAxis = getName(series.radiusAxis); }
            } else if (series.isAnnotationLayer && type == "CrosshairLayer") {
                data.targetSeriesName = series.targetSeries != null ? getName1(series.targetSeries) : "";
            } else if (series.isAnnotationLayer && type == "FinalValueLayer") {
                data.targetSeriesName = series.targetSeries != null ? getName1(series.targetSeries) : "";
            } else if (series.isAnnotationLayer && type == "CalloutLayer") {
                data.targetSeriesName = series.targetSeries != null ? getName1(series.targetSeries) : "";
            }
        }
        return data;
    };

    // --- CategoryChartExtended.extractAxes / extractSeries (exact) ---
    // The chart custom element (the one exposing exportDomainChartTestingInfo) may be nested inside
    // the container rather than being its immediate first child, so search for it.
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
    var result = { axes: [], series: [] };
    var chart = findChart(container, 0);
    if (!chart) { return result; }
    var edc = chart.exportDomainChartTestingInfo();
    // The Blazor chart custom element returns a testing-info whose internal DataChart is reached via
    // a slightly different shape than the WC readable proxy (edc.i.mainDataChart), so fall back
    // across the equivalent accessors.
    var idc = edc ? ((edc.i && edc.i.mainDataChart) || edc.mainDataChart || (edc.i && edc.i.a) || edc.a || null) : null;
    if (!idc) { return result; }
    var intAxes = idc.axes;
    var intSeries = idc.series;
    for (var i = 0; i < intAxes.count; i++) {
        result.axes.push(getAxisState(intAxes._inner[i].externalObject));
    }
    for (var s = 0; s < intSeries.count; s++) {
        result.series.push(getSeriesState(intSeries._inner[s].externalObject, s));
    }
    return result;
}, false);
//end eventHandler
