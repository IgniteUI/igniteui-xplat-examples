//begin eventHandler
igRegisterScript("WebGridGrammyNominationsCellClassesHandler", () => {
    return {
        downFont: (rowData, columnKey) => rowData[columnKey] < 5,
        upFont: (rowData, columnKey) => rowData[columnKey] >= 6
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