//begin imports
import { IgcDataGridComponent, IgcFilterOperand, IgcGridCustomFilterRequestedEventArgs, EditorType } from 'igniteui-webcomponents-data-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridRegisterCountryFilterOnViewInit {
    //begin eventHandler
    public dataGridRegisterCountryFilterOnViewInit(): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        const operand = new IgcFilterOperand();
        operand.editorType = EditorType.Text;
        operand.displayName = "(Custom) In Code Filter";
        operand.filterRequested = this.onFilter;
        grid.actualColumns.item(0).filterOperands.add(operand);
    }

    private onFilter(sender: any, args: IgcGridCustomFilterRequestedEventArgs): void {
        const prop = args.filterFactory.property(args.column.field);
        args.expression = prop.isEqualTo("France");
    }
    //end eventHandler
}
