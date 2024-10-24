//begin eventHandler
igRegisterScript("WebGridGroupByStyleWithCustomCSS", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#grid {
    --ig-chip-text-color: rgb(248, 248, 248);
    --ig-chip-hover-text-color: rgb(225, 225, 225);
    --ig-chip-background: rgb(73, 73, 73);
    --ig-chip-hover-background: rgb(56, 56, 56);
    --ig-chip-focus-background: rgb(223, 181, 13);
    --ig-chip-selected-background: rgb(223, 181, 13);
    --ig-chip-focus-selected-background: rgb(223, 181, 13);
    --ig-grid-group-row-background: rgb(73, 73, 73);
    --ig-grid-group-row-selected-background: rgb(56, 56, 56);
    --ig-grid-group-label-column-name-text: rgb(248, 248, 248);
    --ig-grid-group-label-text: rgb(248, 248, 248);
    --ig-grid-group-count-background: rgb(255, 205, 15);
    --ig-grid-group-count-text-color: rgb(34, 34, 34);
    --ig-grid-expand-icon-color: rgb(255, 205, 15);
    --ig-grid-expand-icon-hover-color: rgb(223, 181, 13);
}
<!--end styles-->
`;