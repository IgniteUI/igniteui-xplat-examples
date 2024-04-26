//begin imports
import { IgcTreeGridComponent } from 'igniteui-webcomponents-grids/grids';
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebTreeGridHasSummariesChange {
    //begin eventHandler
    public webTreeGridHasSummariesChange(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        let newValue = sender.primitiveValue as boolean;
        const grid = CodeGenHelper.getDescription<IgcTreeGridComponent>("content");
        var column1 = grid.getColumnByName("Age");
        var column2 = grid.getColumnByName("Title");
        var column3 = grid.getColumnByName("OnPTO");

        column1.hasSummary = newValue;
        column2.hasSummary = newValue;
        column3.hasSummary = newValue;
    }
    //end eventHandler
}