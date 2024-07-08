//begin imports
import { IgrTreeGridComponent } from 'igniteui-react-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebTreeGridPinRowOnRendered {
    //begin eventHandler
    public webTreeGridPinRowOnRendered(args:any): void {
        var treeGrid = CodeGenHelper.getDescription<IgrTreeGrid>("content");
        treeGrid.pinRow(1);
        treeGrid.pinRow(11);
    }
    //end eventHandler
}