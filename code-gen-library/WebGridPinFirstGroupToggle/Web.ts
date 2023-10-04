//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridPinFirstGroupToggle {
    //begin eventHandler
    public webGridPinFirstGroupToggle(args: any): void {
        const grid: IgcGridComponent = CodeGenHelper.getDescription<IgcGridComponent>("content")
        const firstColumnGroup = grid.columns.filter(c => c.header === 'General Information')[0];
        firstColumnGroup.pinned = !firstColumnGroup.pinned;
        grid.markForCheck();
    }
    //end eventHandler
}