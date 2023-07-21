//begin eventHandler
igRegisterScript("WebTreeGridOverviewStyleWithCustomCSS", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#treeGrid {
    --ig-grid-header-background: #494949;
    --ig-grid-header-text-color: #FFF;
    --ig-grid-expand-icon-color: #FFCD0F;
    --ig-grid-expand-icon-hover-color: #E0B710;
    --ig-grid-row-hover-background: #F8E495;
}
<!--end styles-->
`;