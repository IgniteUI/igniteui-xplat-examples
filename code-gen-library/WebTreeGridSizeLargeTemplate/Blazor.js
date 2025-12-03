//begin eventHandler
igRegisterScript("WebTreeGridSizeLargeTemplate", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#treeGrid {
    --ig-size: var(--ig-size-large);
}
<!--end styles-->
`;