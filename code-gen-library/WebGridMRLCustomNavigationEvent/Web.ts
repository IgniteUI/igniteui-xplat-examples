//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridMRLCustomNavigationEvent {
    //begin eventHandler
    public webGridMRLCustomNavigationEvent(args: any): void {
        const target = args.detail.target;
        const grid = document.getElementsByTagName("igc-grid")[0] as any;
        if (args.detail.event.key.toLowerCase() === 'enter') {
           args.detail.event.preventDefault();
           args.detail.cancel = true;
           const rowIndex = target.row.index === undefined ? target.index : target.row.index;
           grid.navigateTo(args.detail.event.shiftKey ? rowIndex - 1 : rowIndex + 1, target.column.visibleIndex,
                (obj: any) => {
                   obj.target.activate();
               });
        }
    }
    //end eventHandler
}