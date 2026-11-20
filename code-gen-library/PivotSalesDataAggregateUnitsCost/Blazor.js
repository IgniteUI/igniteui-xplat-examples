//begin eventHandler
registerScript("PivotSalesDataAggregateUnitsCost", (members, data) => {
    if (!data) {
        return [];
    }
    return data.reduce((accumulator, item) => accumulator + (item.UnitsSold * item.ManufacturingPrice), 0);
});
//end eventHandler
