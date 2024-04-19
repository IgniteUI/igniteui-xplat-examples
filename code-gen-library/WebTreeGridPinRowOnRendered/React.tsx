//begin imports
import { IgrTreeGridComponent } from 'igniteui-react-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebTreeGridPinRowOnRendered {
    //begin eventHandler
    public webTreeGridPinRowOnRendered(args:any): void {
        this.treeGrid.pinRow(1);
        this.treeGrid.pinRow(11);
    }
    //end eventHandler
}