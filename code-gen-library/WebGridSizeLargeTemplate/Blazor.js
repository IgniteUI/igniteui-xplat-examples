//begin eventHandler
igRegisterScript("WebGridSizeLargeTemplate", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#grid {
    --ig-size: var(--ig-size-large);
}
<!--end styles-->
`;