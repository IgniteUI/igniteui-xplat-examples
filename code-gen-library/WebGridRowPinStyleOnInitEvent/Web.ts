//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridRowPinStyleOnInitEvent {

    //begin eventHandler
    public webGridRowPinStyleOnInitEvent(): void {
        //OMIT HANDLER
    }
    //end eventHandler

    public requiredStyles = `
    <!--begin styles-->
    #grid {
        --ig-grid-pinned-border-width: 5px;
        --ig-grid-pinned-border-style: double;
        --ig-grid-pinned-border-color: red;
        --ig-grid-cell-active-border-color: red;
    }
    <!--end styles-->
        `;
}