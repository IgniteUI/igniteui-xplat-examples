//begin imports
import { IgcGridComponent, IgcGridKeydownEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridEditingExcelStyle {
    //begin eventHandler
    public webGridEditingExcelStyle(args: CustomEvent<IgcGridKeydownEventArgs>): void {
        var key = args.detail.event.keyCode;
        var grid = args.detail.target.grid;
        var activeElem = grid.navigation.activeNode;
    
        if ((key >= 48 && key <= 57) || (key >= 65 && key <= 90) || (key >= 97 && key <= 122)) {
            var columnName = grid.getColumnByVisibleIndex(activeElem.column).field;
            var cell = grid.getCellByColumn(activeElem.row, columnName);
    
            if (cell && !grid.crudService.cellInEditMode) {
                grid.crudService.enterEditMode(cell);
                cell.editValue = key;
            }
        }
    
        if (key == 13) {
            var thisRow = activeElem.row;
            var column = activeElem.column;
            var rowInfo = grid.dataView;

            var nextRow = this.getNextEditableRowIndex(thisRow, rowInfo, args.detail.event.shiftKey);

            grid.navigateTo(nextRow, column, (obj: any) => {
                obj.target.activate();
                grid.clearCellSelection();
            });
        }
    }

    public getNextEditableRowIndex(currentRowIndex: number, dataView: any, previous: boolean) {
        if (currentRowIndex < 0 || (currentRowIndex === 0 && previous) || (currentRowIndex >= dataView.length - 1 && !previous)) {
            return currentRowIndex;
        }
        if (previous) {
            return dataView.findLastIndex((rec: any, index: number) => index < currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
        }
        return dataView.findIndex((rec: any, index: number) => index > currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
    }

    public isEditableDataRecordAtIndex(dataViewIndex: number, dataView: any) {
        const rec = dataView[dataViewIndex];
        return !rec.expression && !rec.summaries && !rec.childGridsData && !rec.detailsData;
    }
    //end eventHandler
}

