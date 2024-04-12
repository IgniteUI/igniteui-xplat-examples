//begin eventHandler
igRegisterScript("WebHierarchicalGridCellSelectionStyling", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#hGrid {
    --cell-selected-text-color: #FFFFFF;
    --cell-active-border-color: #0578c4;
    --cell-selected-background: #0578c4;
}
<!--end styles-->
`;