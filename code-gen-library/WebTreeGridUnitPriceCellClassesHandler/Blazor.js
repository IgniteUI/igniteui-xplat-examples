//begin eventHandler
igRegisterScript("WebTreeGridUnitPriceCellClassesHandler", () => {
    return {
        downPrice: (rowData, columnKey) => rowData[columnKey] <= 5,
        upPrice: (rowData, columnKey) => rowData[columnKey] > 5,
    };
}, true);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
.upPrice {
    color: red !important;
}

.downPrice {
    color: green !important;
}
<!--end styles-->
`;