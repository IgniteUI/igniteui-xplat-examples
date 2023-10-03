//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridRedo {
    //begin eventHandler
    public webGridRedo(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        //TODO

        var grid = CodeGenHelper.getDescription<IgcGridComponent>("content");

        //grid.endEdit(true);
        //grid.transactions.redo();

    }
    //end eventHandler
}