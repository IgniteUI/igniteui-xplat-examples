//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcColumnComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';


export class WebGridColumnInitEvent {
    //begin eventHandler
    public webGridColumnInitEvent(args: CustomEvent<IgcColumnComponent>): void {
        var column = args.detail;
        column.sortable = true;
    }
    //end eventHandler
}