//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridCustomKBNav {
    //begin eventHandler
    public webGridCustomKBNav(evtArgs: any): void {
        const args = evtArgs.detail;
        const target = args.target;
        const evt = args.event;
        const type = args.targetType;
        var grid = CodeGenHelper.getDescription<IgcGridComponent>("content") as any;

        if (type === 'dataCell' && target.editMode && evt.key.toLowerCase() === 'tab') {
            // Value validation for number column.
            // This covers both 'tab' and 'shift+tab' key interactions.
            args.event.preventDefault();
            args.cancel = true;
            if (target.column.dataType === 'number' && target.editValue < 10) {
                alert('The value should be bigger than 10');
                return;
            }
            const cell = evt.shiftKey ?
            grid.getPreviousCell(target.row.index, target.column.visibleIndex, (col) => col.editable) :
            grid.getNextCell(target.row.index, target.column.visibleIndex, (col) => col.editable);

            grid.navigateTo(cell.rowIndex, cell.visibleColumnIndex,
                (obj) => { obj.target.activate(); });
        } else if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
            // Perform column based kb navigation with 'enter' key press
            args.cancel = true;
            grid.navigateTo(target.row.index + 1, target.column.visibleIndex, (obj) => {
                obj.target.activate();
            });
        }
    }
    //end eventHandler
}