//begin imports
import { IgcGridBaseDirective, IgcGridEditEventArgs } from 'igniteui-webcomponents-grids/grids';

//end imports

export class WebGridOnEditEnter {
    //begin eventHandler
    public webGridOnEditEnter(args: any): void {
        const column = args.detail.column;
        if(column.field === 'ReorderLevel') {      
            setTimeout(() => {
                const rowId = args.detail.cellID.rowID;
                const columnId = args.detail.cellID.columnID;
                const inputTemplateId = `edit-cell-${rowId}-${columnId}`;
                const x = document.getElementById(inputTemplateId);
                x?.focus();
            });
        }
    }
    //end eventHandler
}