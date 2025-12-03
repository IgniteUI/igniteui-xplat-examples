//begin imports
import { IgrGridEditEventArgs } from 'igniteui-react-grids';

//end imports

export class WebGridOnEditEnter {
    //begin eventHandler
    public webGridOnEditEnter(args: IgrGridEditEventArgs): void {

        const column = args.detail.owner.getColumnByVisibleIndex(args.detail.cellID.columnID);
        if(column.field === 'ReorderLevel') {
            setTimeout(() => {
                const rowId = args.detail.cellID.rowID;
                const columnId = args.detail.cellID.columnID;
                const inputTemplateId = `edit-cell-${rowId}-${columnId}`;
                const element = document.getElementById(inputTemplateId);
                element?.focus();
            });
        }
    }
    //end eventHandler
}