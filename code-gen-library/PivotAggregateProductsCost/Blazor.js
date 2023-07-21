//begin eventHandler
igRegisterScript("PivotAggregateProductsCost", (members, data) => {
    return data.reduce((accumulator, value) => accumulator + (value.SalePrice * value.UnitsSold), 0);
}, false);
//end eventHandler
