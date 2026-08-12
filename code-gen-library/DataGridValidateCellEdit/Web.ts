//begin imports
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridValidateCellEdit {

    //begin eventHandler
    /** A cell left empty is refused with a message; anything else is taken. */
    public dataGridValidateCellEdit(s: any, args: any): void {
        var grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        if (args.newValue === "") {
            grid.setEditError(args.editID, "Error, cell is empty");
            grid.rejectEdit(args.editID);
        } else {
            grid.acceptEdit(args.editID);
        }
    }
    //end eventHandler
}
