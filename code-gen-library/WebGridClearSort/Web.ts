//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridClearSort {
    //begin eventHandler
    public webGridClearSort(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        var grid = CodeGenHelper.getDescription<IgcGridComponent>("content");
        grid.clearSort("");
    }
    //end eventHandler
}