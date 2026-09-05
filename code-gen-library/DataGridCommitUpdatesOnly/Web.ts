//begin imports
import { IgcDataGridComponent } from 'igniteui-webcomponents-data-grids';
import { TransactionType } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridCommitUpdatesOnly {

    //begin eventHandler
    /** Only an update is committed; anything else the grid proposes is refused. */
    public dataGridCommitUpdatesOnly(s: any, args: any): void {
        var grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        if (args.changes[0].transactionType === TransactionType.Update) {
            grid.acceptCommit(args.commitID);
        } else {
            grid.rejectCommit(args.commitID);
        }
    }
    //end eventHandler
}
