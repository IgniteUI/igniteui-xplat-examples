//begin imports
import { IgrRowDragEndEventArgs } from 'igniteui-react-grids';
//end imports

export class WebGridRowPinningDragEndHandler {
//begin template
//begin content


public webGridRowPinningDragEndHandler(args: IgrRowDragEndEventArgs): void {
        const ghostElement = (args as any).detail.dragDirective.ghostElement;
        if (!ghostElement) { return; }

        const dragElementPos = ghostElement.getBoundingClientRect();
        const grid = this.grid as any;
        const detail = (args as any).detail;

        const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-grid-row"));

        const targetRowElement = this.getRowElementAtPosition(rows, {
            x: dragElementPos.x + dragElementPos.width / 2,
            y: dragElementPos.y + dragElementPos.height / 2
        });
        if (!targetRowElement) { return; }

        const currRowIndex = parseInt(targetRowElement.getAttribute("data-rowindex"), 10);
        const targetRow = grid.getRowByIndex(currRowIndex);
        if (!targetRow) { return; }
        const currRowID = targetRow.key;
        const draggedRowPinned = detail.dragData.pinned;
        const targetRowPinned = targetRow?.pinned;

        let currRowPinnedIndex = 0;
        if (targetRowPinned && grid.pinnedRows) {
            const pinnedRows = grid.pinnedRows;
            for (let i = 0; i < pinnedRows.length; i++) {
                if (pinnedRows[i].key === currRowID) {
                    currRowPinnedIndex = i;
                    break;
                }
            }
        }

        // Remove the dragged row and insert at new position
        grid.deleteRow(detail.dragData.key);
        this._customersDataLocal.splice(currRowIndex, 0, detail.dragData.data);

        if (targetRowPinned && !draggedRowPinned) {
            // Drop unpinned row into pinned area
            grid.pinRow(detail.dragData.key, currRowPinnedIndex);
        } else if (!targetRowPinned && draggedRowPinned) {
            // Drop pinned row into unpinned area
            grid.unpinRow(detail.dragData.key);
        } else if (targetRowPinned && draggedRowPinned) {
            // Reordering within pinned rows
            grid.unpinRow(detail.dragData.key);
            grid.pinRow(detail.dragData.key, currRowPinnedIndex);
        }
    }

    private getRowElementAtPosition(rowList: Element[], cursorPosition: { x: number, y: number }): Element | null {
        for (const row of rowList) {
            const rowRect = row.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top && cursorPosition.y < rowRect.bottom &&
                cursorPosition.x > rowRect.left && cursorPosition.x < rowRect.right) {
                return row;
            }
        }
        return null;
    }

    //end content
    //end template
}