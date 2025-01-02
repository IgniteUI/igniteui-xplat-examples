//begin eventHandler
igRegisterScript("WebGridRowEditingStyle", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#grid {
    --ig-banner-banner-background: #292826;
    --ig-banner-banner-message-color: #ffcd0f;
    --ig-button-foreground: #ffcd0f; 
    --ig-button-hover-foreground: white;
    --ig-button-font-weight: 600;
}
    
<!--end styles-->
`;