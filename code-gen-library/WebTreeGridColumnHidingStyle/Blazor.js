//begin eventHandler
igRegisterScript("WebTreeGridColumnHidingStyle", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler
let requiredStyles = `
<!--begin styles-->
#treeGrid {
    --ig-column-actions-background-color: #292826;
    --ig-column-actions-title-color: #ffcd0f;
    --ig-checkbox-tick-color: #292826;
    --ig-checkbox-label-color: #ffcd0f;
    --ig-checkbox-empty-color: #ffcd0f;
    --ig-checkbox-fill-color: #ffcd0f;
    --ig-input-group-idle-text-color: white;
    --ig-input-group-filled-text-color: #ffcd0f;
    --ig-input-group-focused-text-color: #ffcd0f;
    --ig-input-group-focused-border-color: #ffcd0f;
    --ig-input-group-focused-secondary-color: #ffcd0f;
    --igx-button-foreground: #292826;
    --igx-button-background: #ffcd0f;
    --igx-button-hover-background: #404040;
    --igx-button-hover-foreground: #ffcd0f;
    --igx-button-focus-background: #ffcd0f;
    --igx-button-focus-foreground: black;
    --igx-button-focus-visible-background: #ffcd0f;
    --igx-button-focus-visible-foreground: black;
    --igx-button-disabled-foreground: #ffcd0f;
}
<!--end styles-->
`;