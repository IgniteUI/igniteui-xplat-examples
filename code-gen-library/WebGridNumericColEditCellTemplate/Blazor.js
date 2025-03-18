//begin template
igRegisterScript("WebGridNumericColEditCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    const cell = ctx.cell;
    const columnName = cell.column.field;
    const cellValue = cell.row.data[columnName];
    const rowId = cell.id.rowID;
    const columnId = cell.id.columnID;
    const inputTemplateId = `edit-cell-${rowId}-${columnId}`;

    return html`
        <igc-input 
            type="number"
            name="${cell.id.rowID}"
            style="width: 100%;"
            value="${cellValue}"
            id="${inputTemplateId}"
            @igcChange=${(e) => {
                cell.editValue = e.detail;
            }}>
        </igc-input>`
}, false);
//end template