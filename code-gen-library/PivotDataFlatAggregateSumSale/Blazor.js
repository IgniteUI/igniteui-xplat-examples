//begin eventHandler
igRegisterScript("PivotDataFlatAggregateSumSale", (members, data) => {
    return data.reduce((accumulator, value) => accumulator + value.ProductUnitPrice * value.NumberOfUnits, 0);
}, false);
//end eventHandler
