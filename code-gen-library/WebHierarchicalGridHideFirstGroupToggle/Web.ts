//begin imports
import { IgcHierarchicalGridComponent } from 'igniteui-webcomponents-grids/grids';
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridHideFirstGroupToggle {
    //begin eventHandler
    public webHierarchicalGridHideFirstGroupToggle(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const hgrid: IgcHierarchicalGridComponent = CodeGenHelper.getDescription<IgcHierarchicalGridComponent>("content");
        const firstColumnGroup = hgrid.getColumnByName("CompanyName").parent;
        firstColumnGroup.hidden = !firstColumnGroup.hidden;
        hgrid.markForCheck();
    }
    //end eventHandler
}