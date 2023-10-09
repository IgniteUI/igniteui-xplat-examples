//begin eventHandler
igRegisterScript("WebGridGroupByStyleWithCustomCSS", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#grid {
    --ig-grid-group-row-background: #969799;
    --ig-grid-group-row-selected-background: #969799;
    --ig-grid-group-label-column-name-text: #f8f8f8;
    --ig-grid-group-label-text: #f8f8f8;
    --ig-grid-group-count-text-color: #222;
    --ig-grid-expand-icon-color: #f8f8f8;
    --ig-grid-expand-icon-hover-color: #f8f8f8;
}
<!--end styles-->
`;