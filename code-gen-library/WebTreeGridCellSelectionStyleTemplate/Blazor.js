//begin eventHandler
igRegisterScript("WebTreeGridCellSelectionStyleTemplate", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler
let requiredStyles = `
<!--begin styles-->
#treeGrid {
    --cell-selected-text-color: #fff;
    --cell-active-border-color: #f2c43c;
    --cell-selected-background: #0062a3;
    --cell-editing-background: #0062a3;
}
<!--end styles-->
`;