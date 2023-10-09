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
        --igx-grid-pinned-border-width: 5px;
        --igx-grid-pinned-border-style: double;
        --igx-grid-pinned-border-color: red;
        --igx-grid-cell-active-border-color: red;
    }
    <!--end styles-->
        `;
}