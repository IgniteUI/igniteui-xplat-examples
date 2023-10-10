//begin eventHandler
igRegisterScript("WebGridMultiRowLayoutStyles", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#grid {
    --ig-grid-cell-active-border-color: #ffcd0f;
    --ig-grid-cell-selected-background: #6f6f6f;
    --ig-grid-row-hover-background: #fde069;
    --ig-grid-row-selected-background: #8d8d8d;
    --ig-grid-header-background: #494949;
    --ig-grid-header-text-color: #fff;
}
<!--end styles-->
`;