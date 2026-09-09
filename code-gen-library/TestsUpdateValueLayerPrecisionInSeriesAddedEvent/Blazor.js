igRegisterScript("TestsUpdateValueLayerPrecisionInSeriesAddedEvent", (sender, args) => {
        const o = CodeGenHelper.findByName("SeriesAddedValueLayerPrecision");
        const obj = JSON.parse(o.value.toString());
        const precision = obj.precision;
        var valueLayer = args.series;
        if (valueLayer) {
            valueLayer.yAxisAnnotationInterpolatedValuePrecision = precision;
        }
}, false);
