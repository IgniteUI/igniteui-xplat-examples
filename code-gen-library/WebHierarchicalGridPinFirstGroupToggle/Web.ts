//begin imports
import { IgcHierarchicalGridComponent } from 'igniteui-webcomponents-grids/grids';
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridPinFirstGroupToggle {
    //begin eventHandler
    public webHierarchicalGridPinFirstGroupToggle(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const hgrid: IgcHierarchicalGridComponent = CodeGenHelper.getDescription<IgcHierarchicalGridComponent>("content");
        const firstColumnGroup = hgrid.getColumnByName("Company").parent;
        firstColumnGroup.pinned = !firstColumnGroup.pinned;
        hgrid.markForCheck();
    }
    //end eventHandler
}