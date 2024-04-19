//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebTreeGridRowPinStyle {

    //begin eventHandler
    public webTreeGridRowPinStyle(): void {
        //OMIT HANDLER
    }
    //end eventHandler

    public requiredStyles = `
    <!--begin styles-->
    #treeGrid {
        --ig-grid-pinned-border-width: 5px;
        --ig-grid-pinned-border-style: double;
        --ig-grid-pinned-border-color: #FFCD0F;
        --ig-grid-cell-active-border-color: #FFCD0F;
    }
    <!--end styles-->
        `;
}