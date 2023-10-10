//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcColumnComponent, IgcColumnComponentEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';


export class WebGridColumnInitEvent {
    //begin eventHandler
    public webGridColumnInitEvent(args: CustomEvent<IgcColumnComponentEventArgs>): void {
        var column = CodeGenHelper.getDescription<IgcColumnComponent>("name");
        column.Sortable = true;
    }
    //end eventHandler
}