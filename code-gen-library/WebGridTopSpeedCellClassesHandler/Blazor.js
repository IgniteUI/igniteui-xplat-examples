//begin eventHandler
igRegisterScript("WebGridTopSpeedCellClassesHandler", () => {
    return {
        topSpeed: (rowData, columnKey) => rowData[columnKey] < 5
    };
}, true);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
.topSpeed {
    color: royalblue !important;
}
<!--end styles-->
`;