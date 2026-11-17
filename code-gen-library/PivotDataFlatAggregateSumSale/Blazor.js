//begin eventHandler
registerScript("PivotDataFlatAggregateSumSale", (members, data) => {
    return data.reduce((accumulator, value) => accumulator + value.ProductUnitPrice * value.NumberOfUnits, 0);
});
//end eventHandler
