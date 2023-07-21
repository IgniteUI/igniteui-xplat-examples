//begin eventHandler
igRegisterScript("WebGridRowPinStyleOnInitEvent", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#grid {
    --igx-grid-pinned-border-width: 5px;
    --igx-grid-pinned-border-style: double;
    --igx-grid-pinned-border-color: #FFCD0F;
    --igx-grid-cell-active-border-color: #FFCD0F;
}
<!--end styles-->
`;