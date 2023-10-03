//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcColumnComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';


export class WebGridColumnInitEvent {
    //begin eventHandler
    public webGridColumnInitEvent(args: any): void {
        var column = CodeGenHelper.getDescription<IgcColumnComponent>("name");
        column.Sortable = true;
    }
    //end eventHandler
}