//begin imports
import { IgrGridComponent, IgrGridKeydownEventArgs, GridKeydownTargetType } from 'igniteui-webcomponents-grids/grids';

//end imports

export class WebGridCustomKBNav {
    //begin eventHandler
    //begin eventHandler
    public webGridCustomKBNav(grid: IgrGridComponent, eventArgs: IgrGridKeydownEventArgs): void {
        const args = eventArgs.detail;
        const target = args.target;
        const evt = args.event;
        const type = args.targetType;

        if (type === GridKeydownTargetType.DataCell && target.editMode && evt.key.toLowerCase() === 'tab') {
            // Value validation for number column.
            // This covers both 'tab' and 'shift+tab' key interactions.
            args.event.preventDefault();
            args.cancel = true;
            if (target.column.dataType === 'number' && target.editValue < 10) {
                alert('The value should be bigger than 10');
                return;
            }
            const cell = evt.shiftKey ?
            grid.getPreviousCell(target.row.index, target.column.visibleIndex, (col: any) => col.editable) :
            grid.getNextCell(target.row.index, target.column.visibleIndex, (col: any) => col.editable);

            grid.navigateTo(cell.rowIndex, cell.visibleColumnIndex,
                (obj: any) => { obj.target.activate(); });
        } else if (type === GridKeydownTargetType.DataCell && evt.key.toLowerCase() === 'enter') {
            // Perform column based kb navigation with 'enter' key press
            args.cancel = true;
            grid.navigateTo(target.row.index + 1, target.column.visibleIndex, (obj: any) => {
                obj.target.activate();
            });
        }
    }
    //end eventHandler
    //end eventHandler
}