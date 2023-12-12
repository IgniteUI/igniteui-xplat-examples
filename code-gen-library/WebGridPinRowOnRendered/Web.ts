//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridPinRowOnRendered {
    //begin eventHandler
    public webGridPinRowOnRendered(args: any): void {
        var grid = CodeGenHelper.getDescription<IgcGridComponent>("content") as any;
        grid.pinRow("ALFKI");
        grid.pinRow("AROUT");
    }
    //end eventHandler
}