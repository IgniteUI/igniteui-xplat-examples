//begin imports
import { IgcHierarchicalGridComponent } from 'igniteui-webcomponents-grids/grids';
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridHasSummariesChange {
    //begin eventHandler
    public webHierarchicalGridHasSummariesChange(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        let newValue = sender.primitiveValue as boolean;
        const grid = CodeGenHelper.getDescription<IgcHierarchicalGridComponent>("content");
        var column1 = grid.getColumnByName("Photo");
        var column2 = grid.getColumnByName("GrammyNominations");
        var column3 = grid.getColumnByName("GrammyAwards");

        column1.hasSummary = newValue;
        column2.hasSummary = newValue;
        column3.hasSummary = newValue;
    }
    //end eventHandler
}