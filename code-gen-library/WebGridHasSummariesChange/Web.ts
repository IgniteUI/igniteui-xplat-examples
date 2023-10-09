//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridHasSummariesChange {
    //begin eventHandler
    public webGridHasSummariesChange(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        let newValue = sender.primitiveValue as boolean;
        const grid = CodeGenHelper.getDescription<IgcGridComponent>("content");
        var column1 = grid.getColumnByName("UnitsInStock");
        var column2 = grid.getColumnByName("OrderDate");

        column1.hasSummary = newValue;
        column2.hasSummary = newValue;
    }
    //end eventHandler
}