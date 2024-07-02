//begin imports
import { IgcGridComponent, FilterMode } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridTestOnInit {

    //begin eventHandler
    public webGridTestOnInit(): void {
        var grid = CodeGenHelper.getDescription<IgcGridComponent>("content");
        grid.allowFiltering = true;
        grid.filterMode = FilterMode.ExcelStyleFilter;
    }
    //end eventHandler

}