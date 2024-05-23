//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridHideFirstGroupToggle {
    //begin eventHandler
    public webGridHideFirstGroupToggle(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const grid: IgcGridComponent = CodeGenHelper.getDescription<IgcGridComponent>("content");
        const firstColumnGroup = grid.getColumnByName("Company").parent;
        firstColumnGroup.hidden = !firstColumnGroup.hidden;
        grid.markForCheck();
    }
    //end eventHandler
}