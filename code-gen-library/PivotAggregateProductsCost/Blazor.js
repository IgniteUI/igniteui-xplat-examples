//begin eventHandler
registerScript("PivotAggregateProductsCost", (members, data) => {
    return data.reduce((accumulator, value) => accumulator + (value.SalePrice * value.UnitsSold), 0);
});
//end eventHandler
