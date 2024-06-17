//begin imports
import { IgcGridComponent, IgcGridEditEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebTreeGridCellEdit {
    //begin eventHandler
    public webTreeGridCellEdit(args: CustomEvent<IgcGridEditEventArgs>): void {
        const column = args.detail.column;

        if (column.field === 'Age') {
            if (args.detail.newValue < 18) {
                args.detail.cancel = true;
                alert('Employees must be at least 18 years old!');
            }
        } else if (column.field === 'HireDate') {
            if (args.detail.newValue > new Date().getTime()) {
                args.detail.cancel = true;
                alert('The employee hire date must be in the past!');
            }
        }
    }
    //end eventHandler
}