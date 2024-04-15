//begin eventHandler
igRegisterScript("WebHGridFilteringStyle", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#hierarchicalGrid1 {
    --ig-grid-filtering-row-background: #ffcd0f;
    --ig-grid-filtering-background-or: #d83434;
    --ig-grid-cell-active-border-color: #ffcd0f;
    --ig-grid-cell-selected-background: #6f6f6f;
    --ig-grid-row-hover-background: #f8e495;
    --ig-grid-row-selected-background: #8d8d8d;
    --ig-grid-header-background: #494949;
    --ig-grid-header-text-color: #fff;
    --ig-grid-expand-icon-color: #ffcd0f;
    --ig-grid-expand-icon-hover-color: #e0b710;
    --ig-grid-resize-line-color: #ffcd0f;
    --ig-grid-row-highlight: #ffcd0f
}
<!--end styles-->
`;