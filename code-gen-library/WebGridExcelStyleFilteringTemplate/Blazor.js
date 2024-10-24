//begin eventHandler
igRegisterScript("WebGridExcelStyleFilteringTemplate", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#grid {
    --ig-grid-filtering-row-background: #ffcd0f;
    --ig-button-background: #FFCD0F;
    --ig-button-foreground: #292826;
    --ig-button-hover-background: #292826;
    --ig-button-hover-foreground: #ffcd0f;

    --ig-list-background: #FFCD0F;
    --ig-list-item-background: #FFCD0F;
    --ig-list-item-background-hover: #c2b1b1bd;

    --ig-checkbox-empty-color: #292826;
    --ig-checkbox-fill-color: #292826;
    --ig-checkbox-tick-color: #FFCD0F;
    --ig-checkbox-label-color: #292826;

    --ig-drop-down-background-color: #FFCD0F;
    --ig-drop-down-item-text-color: #292826;
    --ig-drop-down-item-background: #FFCD0F;
    --ig-drop-down-item-text-color: #292826;
    --ig-drop-down-focused-item-background: #c2b1b1bd;
}
<!--end styles-->
`;