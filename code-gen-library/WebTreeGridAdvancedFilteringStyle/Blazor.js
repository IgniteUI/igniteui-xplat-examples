//begin eventHandler
igRegisterScript("WebTreeGridAdvancedFilteringStyle", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#treeGrid {
    --ig-grid-filtering-row-background: #ffcd0f;
    --ig-grid-filtering-background-or: #d83434;
}
<!--end styles-->
`;