//begin imports
import { IgxGridComponent } from 'igniteui-angular-grids';
//end imports

import { CodeGenHelper } from 'igniteui-angular-core';

export class WebGridTestOnInit {

    //begin eventHandler
    public webGridTestOnInit(): void {
        var grid = CodeGenHelper.getDescription<IgxGridComponent>("content");
        grid.allowFiltering = true;
        grid.filterMode = "excelStyleFilter";
    }
    //end eventHandler

}