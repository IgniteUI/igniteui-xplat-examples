//begin imports
import { IgcDataGridComponent, IgcFilterOperand, IgcGridCustomFilterRequestedEventArgs, EditorType } from 'igniteui-webcomponents-data-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridRegisterCustomAgeFilterOnViewInit {
    //begin eventHandler
    public dataGridRegisterCustomAgeFilterOnViewInit(): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        const customAgeFilter = new IgcFilterOperand();
        customAgeFilter.displayName = "Filter As Class";
        customAgeFilter.isInputRequired = false;
        customAgeFilter.editorType = EditorType.Numeric;
        (customAgeFilter.i as any)["filterRequested"] = (sender: any, args: any) => {
            const prop = args.filterFactory.property(args.column.field);
            args.expression = prop.isEqualTo(30);
        };
        grid.actualColumns.item(1).filterOperands.add(customAgeFilter);

        const salesFilter = new IgcFilterOperand();
        salesFilter.editorType = EditorType.Numeric;
        salesFilter.isInputRequired = false;
        salesFilter.displayName = "(Custom) In-Line Filter";
        (salesFilter.i as any)["filterRequested"] = (sender: any, args: any) => {
            args.expression = args.filterFactory.property("Sales").isLessThanOrEqualTo(300000);
        };
        grid.actualColumns.item(2).filterOperands.add(salesFilter);
    }
    //end eventHandler
}
