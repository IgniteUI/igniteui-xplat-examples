//begin eventHandler
igRegisterScript("WebTreeGridSizeSmallTemplate", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#treeGrid {
    --ig-size: var(--ig-size-small);
}
<!--end styles-->
`;