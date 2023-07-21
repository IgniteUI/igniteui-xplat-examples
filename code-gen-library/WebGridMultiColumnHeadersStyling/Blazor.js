//begin eventHandler
igRegisterScript("WebGridMultiColumnHeadersStyling", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#grid {
    --ig-grid-header-background: #e0f3ff;
    --ig-grid-header-text-color: #e41c77;
    --ig-grid-header-border-width: 1px;
    --ig-grid-header-border-style: solid;
    --ig-grid-header-border-color: rgba(0, 0, 0, 0.08);
}
<!--end styles-->
`;