//begin imports
import { IgcHierarchicalGridComponent, IgcColumnComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridRenderedExpand {
    //begin eventHandler
    public webHierarchicalGridRenderedExpand(args:any): void {
        let debutColumn = CodeGenHelper.findByName<IgcColumnComponent>("debutColumn");
        let hierarchicalGrid = CodeGenHelper.getDescription<IgcHierarchicalGridComponent>("content");
        debutColumn.formatter = (value: number) => Math.floor(value / 10) * 10 + 's';
        hierarchicalGrid.expandAll();
    }
    //end eventHandler
}