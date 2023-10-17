//begin eventHandler
igRegisterScript("WebGridBeatsPerMinuteCellClassesHandler", () => {
    return {
        upFont: (rowData, columnKey) => rowData[columnKey] > 95,
        downFont: (rowData, columnKey) => rowData[columnKey] <= 95
    };
}, true);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
.upFont {
    color: green !important;
}

.downFont {
    color: red !important;
}
<!--end styles-->
`;