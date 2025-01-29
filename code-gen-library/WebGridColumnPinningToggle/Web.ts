//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridAdvancedFilteringToggle {
    //begin eventHandler
    public advancedFilteringToggle(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const grid: IgcGridComponent = CodeGenHelper.getDescription<IgcGridComponent>("content");
        grid.allowFiltering = !grid.allowFiltering;
        grid.markForCheck();
    }
    //end eventHandler
}