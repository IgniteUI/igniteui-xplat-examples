//begin imports
import { IgcRowSelectionEventArgs } from 'igniteui-webcomponents-grids/grids';
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridRowSelectionFeedback {
    //begin eventHandler
    public webGridRowSelectionFeedback(args: CustomEvent<IgcRowSelectionEventArgs>): void {
        console.log(args.detail.newSelection.length);
        var grid = CodeGenHelper.getDescription<IgcGridComponent>("content");
        grid.allowFiltering = !grid.allowFiltering;
        grid.markForCheck();
    }
    //end eventHandler
}