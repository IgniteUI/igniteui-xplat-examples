//begin eventHandler
registerScript("WebPivotCustomMaxAggregator", (members, data) => {
    if (!data) {
        return [];
    }
    return data.map(x => x.Sales).reduce((a, b) => Math.max(a, b));
});
//end eventHandler
