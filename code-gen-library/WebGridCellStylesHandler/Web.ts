//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGridComponent, IgcRowType } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridCellStylesHandler {
//begin template
//begin content
    public webGridCellStylesHandler = {
        background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
        color: (rowData, columnKey, cellValue, rowIndex) => {
            if (columnKey === "Position") {
                switch (cellValue) {
                    case "up": return "#28a745";
                    case "down": return "#dc3545";
                    case "current": return "#17a2b8"
                }
            }
        }
    };
//end content
//end template
}