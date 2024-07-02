//begin imports
import { IgrPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-react-layouts';
import { IgrColumn, IgrGrid } from 'igniteui-react-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-react-core';


export class WebGridColumnInitEvent {
    //begin eventHandler
    public webGridColumnInitEvent(args: CustomEvent<IgrColumn>): void {
        var column = args;
        column.sortable = true;
    }
    //end eventHandler
}