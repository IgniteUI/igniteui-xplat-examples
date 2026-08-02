//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';
import { FilterFactory } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridApplyFilterExpressions {
    //begin eventHandler
    public dataGridApplyFilterExpressions(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        const columnEditor = CodeGenHelper.findByName<IgcPropertyEditorPropertyDescriptionComponent>("FilterColumnEditor");
        const modeEditor = CodeGenHelper.findByName<IgcPropertyEditorPropertyDescriptionComponent>("FilterModeEditor");
        const textEditor = CodeGenHelper.findByName<IgcPropertyEditorPropertyDescriptionComponent>("FilterTextEditor");

        const filterColumn = columnEditor.primitiveValue as string;
        const filterMode = modeEditor.primitiveValue as string;
        const filterText = (textEditor.primitiveValue as string) || "";

        grid.filterExpressions.clear();
        if (filterText === "") {
            return;
        }

        const expression = filterText.toUpperCase();
        const factory = new FilterFactory();
        const column = factory.property(filterColumn).toUpper();

        let filter;
        switch (filterMode) {
            case "Contains":   filter = column.contains(expression);   break;
            case "StartsWith": filter = column.startsWith(expression); break;
            case "EndsWith":   filter = column.endsWith(expression);   break;
            default:           filter = column.contains(expression);   break;
        }

        grid.filterExpressions.add(filter);
    }
    //end eventHandler
}
