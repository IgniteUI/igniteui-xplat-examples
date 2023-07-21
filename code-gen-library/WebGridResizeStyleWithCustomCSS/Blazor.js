//begin eventHandler
igRegisterScript("WebGridResizeStyleWithCustomCSS", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#grid {
    --ig-grid-resize-line-color: #f35b04;
}
<!--end styles-->
`;