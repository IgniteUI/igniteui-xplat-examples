//begin eventHandler
igRegisterScript("WebHierarchicalGridCellSelectionStyling", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#hGrid {
    --ig-grid-cell-selected-text-color: #FFFFFF;
    --ig-grid-cell-active-border-color: #0578c4;
    --ig-grid-cell-selected-background: #0578c4;
}
<!--end styles-->
`;