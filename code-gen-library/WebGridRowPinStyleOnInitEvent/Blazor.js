//begin eventHandler
registerScript("WebGridRowPinStyleOnInitEvent", (args) => {
    //OMIT HANDLER
});
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#grid {
    --ig-grid-pinned-border-width: 5px;
    --ig-grid-pinned-border-style: double;
    --ig-grid-pinned-border-color: #FFCD0F;
    --ig-grid-cell-active-border-color: #FFCD0F;
}
<!--end styles-->
`;