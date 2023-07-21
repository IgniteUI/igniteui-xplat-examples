//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridPinRowOnRendered {
    //begin eventHandler
    public webGridPinRowOnRendered(args:any): void {
        const grid = document.getElementById("grid") as IgcGridComponent;
        grid.data = [...grid.data];
        grid.pinRow("ALFKI");
        grid.pinRow("AROUT");
    }
    //end eventHandler
}