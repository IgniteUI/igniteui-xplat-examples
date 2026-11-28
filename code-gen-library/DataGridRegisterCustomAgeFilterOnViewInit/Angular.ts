//begin imports
import { IgxDataGridComponent, IgxFilterOperand, IgxGridCustomFilterRequestedEventArgs, EditorType } from 'igniteui-angular-data-grids';
//end imports

import { CodeGenHelper } from 'igniteui-angular-core';

export class DataGridRegisterCustomAgeFilterOnViewInit {
    //begin eventHandler
    public dataGridRegisterCustomAgeFilterOnViewInit(): void {
        const grid = CodeGenHelper.getDescription<IgxDataGridComponent>("content");
        const customAgeFilter = new IgxFilterOperand();
        customAgeFilter.displayName = "Filter As Class";
        customAgeFilter.isInputRequired = false;
        customAgeFilter.editorType = EditorType.Numeric;
        customAgeFilter.filterRequested.subscribe(event => {
            const args = event.args;
            const prop = args.filterFactory.property(args.column.field);
            args.expression = prop.isEqualTo(30);
        });
        grid.actualColumns.item(1).filterOperands.add(customAgeFilter);

        const salesFilter = new IgxFilterOperand();
        salesFilter.editorType = EditorType.Numeric;
        salesFilter.isInputRequired = false;
        salesFilter.displayName = "(Custom) In-Line Filter";
        salesFilter.filterRequested.subscribe(event => {
            const args = event.args;
            args.expression = args.filterFactory.property("Sales").isLessThanOrEqualTo(300000);
        });
        grid.actualColumns.item(2).filterOperands.add(salesFilter);
    }
    //end eventHandler
}
