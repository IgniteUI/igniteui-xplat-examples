//begin eventHandler
igRegisterScript("WebGridSizeSmallTemplate", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#grid {
    --ig-size: var(--ig-size-small);
}
<!--end styles-->
`;