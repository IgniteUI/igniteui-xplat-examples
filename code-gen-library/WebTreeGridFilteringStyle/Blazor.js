//begin eventHandler
igRegisterScript("WebTreeGridFilteringStyle", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler
let requiredStyles = `
<!--begin styles-->
#treeGrid {
    --ig-grid-filtering-row-text-color: #292826;
    --ig-grid-filtering-row-background: #ffcd0f;
    --ig-grid-filtering-header-text-color: #292826;
    --ig-grid-filtering-header-background: #ffcd0f;
}
<!--end styles-->
`;