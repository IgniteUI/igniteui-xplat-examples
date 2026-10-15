//begin eventHandler
// JS-level DataChart state extractor for the Blazor test host. This is a port of the translator's TS
// output for the WC host (XSharpTestHost.WC/src/ig/igniteui-testing: DataChartExtended.getState +
// ChartStateHelper.getAxisState/getSeriesState/getFragmentState + DataHelper.toJsonArray +
// PlatformManager.getInternalTypeName/fromPixelUnits/getTotalMillisecondsFromEpoch). On Blazor the
// chart's axes/series and their live data sources carry their computed/actual values only in the JS
// runtime (the .NET IgbDataChart wrappers don't), so the extraction runs here and returns the same
// {axes,series} JSON the C# ChartStateData produces. Invoked by name through the CR's generic
// library-item ref-invoke. Sibling of ExtractDomainChartState (which handles the domain charts whose
// series/axes live on an internal MainDataChart instead of directly on the element).
igRegisterScript("ExtractDataChartState", (container) => {

    // DIAGNOSTIC marker: bump this string on each edit so you can confirm the browser loaded the
    // latest emitted copy (vs a cached one). If you don't see this log, the deployed JS is stale.
    console.log("ExtractDataChartState: invoked (diag v5 - dates as round-trip strings)", container && container.tagName);

    // --- manager shims (exact WC PlatformManager behaviour) ---
    var getInternalTypeName = (control) => {
        if (control == null) { console.warn("ExtractDataChartState: null control in getInternalTypeName"); return ""; }
        var t = (control.$type && !control._implementation) ? control.$type : (control.i ? control.i.$type : null);
        if (t == null) { console.warn("ExtractDataChartState: control has no $type", control); return ""; }
        return t.name.split("Xam").join("").split("Igg").join("");
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
                // Emit dates as a LOCAL-time round-trip string (YYYY-MM-DDTHH:mm:ss), matching the WC host's
                // DataHelper.toRoundTripFormat, so the extracted state carries dates as strings like the
                // other web platforms (the analyzer parses these to DateTime). The prior "+val" emitted a
                // numeric ms timestamp, which the label analyzer rejects ("labelKey is not a string").
                if (val instanceof Date) {
                    val = val.getFullYear() + '-' + String(val.getMonth() + 1).padStart(2, '0') + '-' +
                        String(val.getDate()).padStart(2, '0') + 'T' + String(val.getHours()).padStart(2, '0') +
                        ':' + String(val.getMinutes()).padStart(2, '0') + ':' + String(val.getSeconds()).padStart(2, '0');
                }
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

    // --- ChartStateHelper.getSeriesState (exact; runtime casts are no-ops so the horizontal/vertical
    // variant accessors collapse to direct property reads on the series externalObject) ---
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
            if (!series.isVertical) {
                if (series.xAxis != null) { data.xAxis = getName(series.xAxis); }
                if (series.yAxis != null) { data.yAxis = getName(series.yAxis); }
            } else {
                data.isBar = true;
                if (series.xAxis != null) { data.xAxis = getName(series.xAxis); }
                if (series.yAxis != null) { data.yAxis = getName(series.yAxis); }
            }
            if (data.yAxis != null && data.xAxis != null) {
                data.categoryWidth = fromPixelUnits(series.getCategoryWidth());
                data.offset = fromPixelUnits(series.getOffsetValue());
            }
        } else {
            if (series.isRange) {
                data.highPath = series.highMemberPath;
                data.lowPath = series.lowMemberPath;
                if (series.isVertical) {
                    data.isBar = true;
                    if (series.xAxis != null) { data.xAxis = getName(series.xAxis); }
                    if (series.yAxis != null) { data.yAxis = getName(series.yAxis); }
                } else {
                    if (series.xAxis != null) { data.xAxis = getName(series.xAxis); }
                    if (series.yAxis != null) { data.yAxis = getName(series.yAxis); }
                }
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
                data.isBar = true;
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

    // --- ChartStateHelper.getFragmentState (exact) ---
    var getFragmentState = (series, index) => {
        var type = getInternalTypeName(series);
        return {
            name: series.name,
            type: type,
            index: index,
            valuePath: series.valueMemberPath,
            actualAreaFillOpacity: series.actualAreaFillOpacity,
            actualMarkerFillOpacity: series.actualMarkerFillOpacity,
            actualHighlightingFadeOpacity: series.actualHighlightingFadeOpacity
        };
    };

    // Resolve a chart collection (axes / series / stacked fragments) to an array of EXTERNAL objects.
    // The proven shape on Blazor -- matching ExtractDomainChartState, which reads the domain chart's
    // internal MainDataChart -- is the internal collection's _inner[i].externalObject. The top-level
    // DataChart element's readable .axes/.series can hand back null entries on Blazor (a null series is
    // what crashed getInternalTypeName), so read _inner/externalObject and skip nulls; fall back to
    // toArray()/item() only if the internal shape isn't present.
    var toExternalArray = (coll) => {
        var out = [];
        if (coll == null) { return out; }
        if (typeof coll.count === "number" && coll._inner) {
            for (var i = 0; i < coll.count; i++) {
                var it = coll._inner[i];
                if (it == null) { continue; }
                out.push(it.externalObject != null ? it.externalObject : it);
            }
            return out;
        }
        if (typeof coll.toArray === "function") {
            var arr = null;
            try { arr = coll.toArray(); } catch (e) { arr = null; }
            if (arr) { for (var j = 0; j < arr.length; j++) { if (arr[j] != null) { out.push(arr[j]); } } }
            return out;
        }
        if (typeof coll.count === "number" && typeof coll.item === "function") {
            for (var k = 0; k < coll.count; k++) { var v = coll.item(k); if (v != null) { out.push(v); } }
            return out;
        }
        return out;
    };

    // The DataChart element is a readable proxy; its axes/series live on the internal implementation
    // (element.i) in the _inner[i].externalObject shape ExtractDomainChartState relies on. Prefer that;
    // fall back to the element's own property if the internal side isn't populated.
    var collectionsFor = (owner, prop) => {
        var res = [];
        if (owner != null && owner.i != null) { res = toExternalArray(owner.i[prop]); }
        if (res.length === 0 && owner != null) { res = toExternalArray(owner[prop]); }
        return res;
    };

    // Find the DataChart custom element within the container. It may be nested rather than the
    // immediate first child, so search (bounded). The DataChart exposes its axes/series directly
    // (unlike a domain chart, whose axes/series live on an internal MainDataChart).
    var findChart = (el, depth) => {
        if (!el || depth > 6) { return null; }
        if (el.axes != null && el.series != null && typeof el.exportDomainChartTestingInfo !== "function") { return el; }
        var kids = el.children || [];
        for (var k = 0; k < kids.length; k++) {
            var r = findChart(kids[k], depth + 1);
            if (r) {
                console.log("DataChart found to get state");
                return r;
            }
        }
        return null;
    };

    // DIAGNOSTIC: log a collection's shape so we can see how axes/series are actually exposed.
    var dumpColl = (label, coll) => {
        if (coll == null) { console.log("ExtractDataChartState:", label, "= null/undefined"); return; }
        var first0 = null;
        try { first0 = (coll._inner && coll._inner[0]) || (typeof coll.toArray === "function" && coll.toArray()[0]) || null; } catch (e) {}
        console.log("ExtractDataChartState:", label, {
            hasCount: typeof coll.count, count: coll.count,
            hasInner: !!coll._inner, innerLen: coll._inner ? coll._inner.length : undefined,
            hasToArray: typeof coll.toArray, hasItem: typeof coll.item,
            firstInner: coll._inner ? coll._inner[0] : undefined,
            firstInnerExternal: (coll._inner && coll._inner[0]) ? coll._inner[0].externalObject : undefined,
            first: first0
        });
    };

    var result = { axes: [], series: [] };
    try {
        var chart = findChart(container, 0);
        console.log("ExtractDataChartState: chart found?", !!chart, chart && chart.tagName,
            "hasI:", chart ? !!chart.i : undefined);
        if (!chart) { console.warn("ExtractDataChartState: no DataChart element under container", container); return result; }

        // Dump both the element's own and the internal (.i) collections so we can see which carries
        // real external axis/series objects on Blazor.
        dumpColl("chart.axes (element)", chart.axes);
        dumpColl("chart.series (element)", chart.series);
        if (chart.i) { dumpColl("chart.i.axes (internal)", chart.i.axes); dumpColl("chart.i.series (internal)", chart.i.series); }

        var axes = collectionsFor(chart, "axes");
        console.log("ExtractDataChartState: resolved axes count", axes.length, axes);
        for (var ai = 0; ai < axes.length; ai++) {
            try { result.axes.push(getAxisState(axes[ai])); }
            catch (e) { console.error("ExtractDataChartState: getAxisState failed for axis", ai, axes[ai], e); }
        }

        var idx = 0;
        var series = collectionsFor(chart, "series");
        console.log("ExtractDataChartState: resolved series count", series.length, series);
        for (var si = 0; si < series.length; si++) {
            var ser = series[si];
            try {
                var seriesData = getSeriesState(ser, idx++);
                result.series.push(seriesData);
                if (ser.isStacked) {
                    var fragIndx = 0;
                    var frags = collectionsFor(ser, "series");
                    for (var fi = 0; fi < frags.length; fi++) {
                        var fragData = getFragmentState(frags[fi], fragIndx++);
                        fragData.categoryWidth = seriesData.categoryWidth;
                        fragData.offset = seriesData.offset;
                        fragData.xAxis = seriesData.xAxis;
                        fragData.yAxis = seriesData.yAxis;
                        result.series.push(fragData);
                    }
                }
            } catch (e) { console.error("ExtractDataChartState: getSeriesState failed for series", si, ser, e); }
        }
    } catch (e) {
        console.error("ExtractDataChartState: extraction failed", e);
    }
    return result;
}, false);
//end eventHandler
