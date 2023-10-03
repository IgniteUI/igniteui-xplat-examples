//begin imports
import { IgcRowDragEndEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

export class WebGridReorderRowHandler {
    //begin eventHandler
    public webGridReorderRowHandler(args: CustomEvent<IgcRowDragEndEventArgs>): void {
        const ghostElement = args.detail.dragDirective.ghostElement;
        const dragElementPos = ghostElement.getBoundingClientRect();
        const grid = document.getElementsByTagName("igc-grid")[0] as any;
        const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-grid-row"));
        const currRowIndex = this.getCurrentRowIndex(rows,
        { x: dragElementPos.x, y: dragElementPos.y });
        if (currRowIndex === -1) { return; }
        // remove the row that was dragged and place it onto its new location
        grid.deleteRow(args.detail.dragData.key);
        grid.data.splice(currRowIndex, 0, args.detail.dragData.data);
    }
    
    public getCurrentRowIndex(rowList: any[], cursorPosition) {
        for (const row of rowList) {
            const rowRect = row.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                // return the index of the targeted row
                return parseInt(row.attributes["data-rowindex"].value);
            }
        }    
        return -1;
    }
    //end eventHandler
}