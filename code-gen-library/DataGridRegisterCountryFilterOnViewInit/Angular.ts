//begin imports
import { IgxDataGridComponent, IgxFilterOperand, IgxGridCustomFilterRequestedEventArgs, EditorType } from 'igniteui-angular-data-grids';
//end imports

import { CodeGenHelper } from 'igniteui-angular-core';

export class DataGridRegisterCountryFilterOnViewInit {
    //begin eventHandler
    public dataGridRegisterCountryFilterOnViewInit(): void {
        const grid = CodeGenHelper.getDescription<IgxDataGridComponent>("content");
        const operand = new IgxFilterOperand();
        operand.editorType = EditorType.Text;
        operand.displayName = "(Custom) In Code Filter";
        operand.filterRequested.subscribe(event => {
            const args = event.args;
            const prop = args.filterFactory.property(args.column.field);
            args.expression = prop.isEqualTo("France");
        });
        grid.actualColumns.item(0).filterOperands.add(operand);
    }
    //end eventHandler
}
