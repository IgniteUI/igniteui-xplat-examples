//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebTreeGridEditingEventsCellEdit {
    //begin eventHandler
    public webTreeGridEditingEventsCellEdit(args: any): void {
        var d = args.detail;

        if (d.column != null && d.column.field == "Name") {
            if (d.newValue > d.rowData.Name) {
                d.cancel = true;
                alert("You cannot change the 'Name' field for this record!")
            }
        }
    }
    //end eventHandler
}