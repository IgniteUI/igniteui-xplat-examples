//begin imports
import { IgcTreeGridComponent } from 'igniteui-webcomponents-grids/grids';
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebTreeGridHideFirstGroupToggle {
    //begin eventHandler
    public webTreeGridHideFirstGroupToggle(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const grid: IgcTreeGridComponent = CodeGenHelper.getDescription<IgcTreeGridComponent>("content");
        const firstColumnGroup = grid.getColumnByName("HireDate").parent;
        firstColumnGroup.hidden = !firstColumnGroup.hidden;
        grid.markForCheck();
    }
    //end eventHandler
}