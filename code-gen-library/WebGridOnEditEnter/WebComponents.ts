//begin imports
import { IgcGridBaseDirective, IgcGridEditEventArgs } from 'igniteui-webcomponents-grids/grids';

//end imports

export class WebGridOnEditEnter {
    //begin eventHandler
    public webGridOnEditEnter(s: IgcGridBaseDirective, e: IgcGridEditEventArgs): void {
        const column = s.getColumnByVisibleIndex(e.detail.cellID.columnID);
        if(column.field === 'ReorderLevel') {      
            setTimeout(() => {
                const rowId = e.detail.cellID.rowID;
                const columnId = e.detail.cellID.columnID;
                const inputTemplateId = `edit-cell-${rowId}-${columnId}`;
                const x = document.getElementById(inputTemplateId);
                x?.focus();
            });
        }
    }
    //end eventHandler
}