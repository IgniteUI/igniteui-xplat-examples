//begin imports
import { IgcDataGridComponent, IgcFilterOperand, IgcGridCustomFilterRequestedEventArgs, EditorType } from 'igniteui-webcomponents-data-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridRegisterCustomAgeFilterOnViewInit {
    //begin eventHandler
    public dataGridRegisterCustomAgeFilterOnViewInit(): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        grid.actualColumns.item(1).filterOperands.add(new CustomAgeFilter());
    }
    //end eventHandler
}

export class CustomAgeFilter extends IgcFilterOperand {
    constructor() {
        super();
        this.displayName = "Filter As Class";
        this.isInputRequired = false;
        this.editorType = EditorType.Numeric;
        this.filterRequested = this.onFilter;
    }

    private onFilter(sender: any, args: IgcGridCustomFilterRequestedEventArgs): void {
        const prop = args.filterFactory.property(args.column.field);
        args.expression = prop.isEqualTo(30);
    }
}
