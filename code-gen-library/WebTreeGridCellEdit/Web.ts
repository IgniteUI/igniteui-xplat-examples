//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebTreeGridCellEdit {
    //begin eventHandler
    public webTreeGridCellEdit(args: any): void {
		const column = args.detail.column;
		
		if (column.field === 'Age') {
			if (args.newValue < 18) {
				args.cancel = true;
				alert('Employees must be at least 18 years old!');
			}
		} else if (column.field === 'HireDate') {
			if (args.newValue > new Date().getTime()) {
				args.cancel = true;
				alert('The employee hire date must be in the past!');
			}
		}
    }
    //end eventHandler
}