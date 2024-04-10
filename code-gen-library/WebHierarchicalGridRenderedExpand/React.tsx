//begin imports
import { IgrHierarchicalGridComponent, IgrColumnComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridRenderedExpand {
    //begin eventHandler
    public webHierarchicalGridRenderedExpand(args:any): void {
        this.hierarchicalGrid.getColumnByName("Debut").formatter = (value: number) => Math.floor(value / 10) * 10 + 's';
        this.hierarchicalGrid.expandAll();
    }
    //end eventHandler
}