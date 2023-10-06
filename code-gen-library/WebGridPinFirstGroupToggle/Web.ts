//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridPinFirstGroupToggle {
    //begin eventHandler
    public webGridPinFirstGroupToggle(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const grid: IgcGridComponent = CodeGenHelper.getDescription<IgcGridComponent>("content")
        const firstColumnGroup = grid.visibleColumns.filter((c: any) => c.header === 'General Information')[0];
        firstColumnGroup.pinned = !firstColumnGroup.pinned;
        grid.markForCheck();
    }
    //end eventHandler
}