//begin eventHandler
igRegisterScript("WebHierarchicalGridCellSelectionStyling", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#hGrid {
    --ig-grid-cell-selected-text-color: #FFFFFF;
    --ig-grid-cell-active-border-color: #f2c43c;
    --ig-grid-cell-selected-background: #0062a3;
}
<!--end styles-->
`;