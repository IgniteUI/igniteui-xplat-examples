//begin imports
import { IgrGridBaseDirective, IgrGridEditEventArgs } from 'igniteui-react-grids';

//end imports

export class WebGridOnEditEnter {
    //begin eventHandler
    public webGridOnEditEnter(s: IgrGridBaseDirective, e: IgrGridEditEventArgs): void {

        const column = s.getColumnByVisibleIndex(e.detail.cellID.columnID);
        if(column.field === 'ReorderLevel') {
            setTimeout(() => {
                const rowId = e.detail.cellID.rowID;
                const columnId = e.detail.cellID.columnID;
                const inputTemplateId = `edit-cell-${rowId}-${columnId}`;
                const element = document.getElementById(inputTemplateId);
                element?.focus();
            });
        }
    }
    //end eventHandler
}