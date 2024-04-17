//begin eventHandler
igRegisterScript("WebGridCellSelectionStyleWithCustomCSS", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#grid {
    --cell-selected-text-color: #FFFFFF;
    --cell-active-border-color: #f2c43c;
    --cell-selected-background: #0062a3;
}
<!--end styles-->
`;