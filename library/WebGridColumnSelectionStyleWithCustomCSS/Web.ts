//begin imports
//end imports

export class WebGridColumnSelectionStyleWithCustomCSS {
    //begin eventHandler
    public webGridColumnSelectionStyleWithCustomCSS(): void {
        //OMIT HANDLER
    }
    //end eventHandler
    public requiredStyles = `
<!--begin styles-->
#grid {
    --ig-grid-row-selected-background: #0062A3;
    --ig-grid-row-selected-text-color: #ecaa53;
    --ig-grid-row-selected-hover-background: #0062A3;
    --ig-grid-header-selected-text-color: #ecaa53;
    --ig-grid-header-selected-background: #0062A3;
    --ig-grid-row-selected-hover-text-color: #ecaa53;
    --ig-grid-row-selected-hover-background: #0062A3;
}
<!--end styles-->
    `;
}