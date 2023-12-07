//begin imports
import { IgcTreeGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebTreeGridPinRowOnRendered {
    //begin eventHandler
    public webTreeGridPinRowOnRendered(args:any): void {
        const treeGrid = document.getElementById("treeGrid") as IgcTreeGridComponent;
        treeGrid.data = [...treeGrid.data];
        treeGrid.pinRow(1);
        treeGrid.pinRow(11);
    }
    //end eventHandler
}