//begin imports
import { IgcGridComponent, IgcGridKeydownEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridMRLCustomNavigationEvent {
    //begin eventHandler
    public webGridMRLCustomNavigationEvent(args: CustomEvent<IgcGridKeydownEventArgs>): void {
        const target = args.detail.target;
        const grid: IgcGridComponent = CodeGenHelper.getDescription<IgcGridComponent>("content");
        if (args.detail.event.key.toLowerCase() === 'enter') {
           args.detail.event.preventDefault();
           args.detail.cancel = true;
           const rowIndex = target.row.index === undefined ? target.index : target.row.index;
           (grid as any).navigateTo(args.detail.event.shiftKey ? rowIndex - 1 : rowIndex + 1, target.column.visibleIndex,
                (obj: any) => {
                   obj.target.activate();
               });
        }
    }
    //end eventHandler
}