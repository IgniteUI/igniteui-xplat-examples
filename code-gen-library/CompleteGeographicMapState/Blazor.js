//begin eventHandler
// Complete the host's map state with values computed only by the live JS model.
igRegisterScript("CompleteGeographicMapState", (container, seriesNames, imageryStyleNames) => {
    const findMap = (element, depth) => {
        if (!element || depth > 6) { return null; }
        if (typeof element.getGeographicFromZoom === "function" && element.i) { return element; }
        for (const child of element.children || []) {
            const map = findMap(child, depth + 1);
            if (map) { return map; }
        }
        return null;
    };
    const map = findMap(container, 0);
    if (!map) {
        console.error("CompleteGeographicMapState: no live map in the container");
        return null;
    }
    const model = map.i;
    const background = model.backgroundContent;
    const state = {
        backgroundImageryType: background == null ? "None" :
            background.$type.name.split("Xam").join("").split("Igg").join(""),
        series: []
    };
    const styleNames = imageryStyleNames[state.backgroundImageryType];
    if (background && styleNames) {
        const style = styleNames[background.imageryStyle];
        if (style == null) {
            console.error("CompleteGeographicMapState: unknown imagery style", background.imageryStyle);
            return null;
        }
        state.backgroundImageryStyle = style;
    }
    if (state.backgroundImageryType === "ArcGISOnlineMapImagery") {
        state.backgroundImagerySourceUri = background.mapServerUri;
    }
    const series = model.series._inner;
    for (let index = 0; index < seriesNames.length; index++) {
        const name = seriesNames[index];
        const live = name ? series.find(item => item.name === name) : series[index];
        if (!live) {
            console.error("CompleteGeographicMapState: no live series for", name, index);
            return null;
        }
        state.series.push({
            actualAreaFillOpacity: live.actualAreaFillOpacity,
            actualMarkerFillOpacity: live.actualMarkerFillOpacity,
            actualHighlightingFadeOpacity: live.actualHighlightingFadeOpacity
        });
    }
    return state;
}, false);
//end eventHandler
