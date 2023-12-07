//begin imports
//end imports

export class WebGridColumnPinningStyleWithCustomCSS {
    //begin eventHandler
    public webGridColumnPinningStyleWithCustomCSS(): void {
        //OMIT HANDLER
    }
    //end eventHandler
    public requiredStyles = `
<!--begin styles-->
#grid {
    --ig-grid-pinned-border-width: 5px;
    --ig-grid-pinned-border-color: #FFCD0F;
    --ig-grid-pinned-border-style: double;
    --ig-grid-cell-active-border-color: #FFCD0F;
}
<!--end styles-->
    `;
}