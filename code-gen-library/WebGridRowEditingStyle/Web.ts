//begin imports
//end imports

export class WebGridRowEditingStyle {
    //begin eventHandler
    public webGridRowEditingStyle(): void {
        //OMIT HANDLER
    }
    //end eventHandler
    public requiredStyles = `
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
}