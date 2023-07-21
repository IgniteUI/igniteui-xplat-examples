//begin eventHandler
igRegisterScript("WebTreeGridCellEditingStyleTemplate", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler
let requiredStyles = `
<!--begin styles-->
#treeGrid {
    --cell-editing-background: #4567bb;
    --cell-active-border-color: #4567bb;
    --cell-edited-value-color: #fff;
}
<!--end styles-->
`;