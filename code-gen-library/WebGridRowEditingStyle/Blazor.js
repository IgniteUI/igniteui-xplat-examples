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
}

#grid .igx-button {
    color: #ffcd0f;
}

#grid .igx-button:hover {
    color: white;
    font-weight: 600;
}
<!--end styles-->
`;