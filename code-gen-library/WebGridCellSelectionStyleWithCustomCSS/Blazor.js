//begin eventHandler
igRegisterScript("WebGridCellSelectionStyleWithCustomCSS", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#grid {
    --cell-selected-text-color: #FFFFFF;
    --cell-active-border-color: #0578c4;
    --cell-selected-background: #0578c4;
}
<!--end styles-->
`;