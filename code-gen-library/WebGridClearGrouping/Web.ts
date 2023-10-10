//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridClearGrouping {
    //begin eventHandler
    public webGridClearGrouping(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        var grid = CodeGenHelper.getDescription<IgcGridComponent>("content");
        grid.clearGrouping("");
    }
    //end eventHandler
}