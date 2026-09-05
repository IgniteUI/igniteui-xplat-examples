//begin eventHandler
igRegisterScript("WebTreeGridCellEditingStyleTemplate", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler
let requiredStyles = `
<!--begin styles-->
#treeGrid {
    --ig-grid-edit-mode-color: #FFA500;
    --ig-grid-cell-active-border-color: #AAFF00;
    --ig-grid-cell-editing-background: #ADD8E6;
}
<!--end styles-->
`;