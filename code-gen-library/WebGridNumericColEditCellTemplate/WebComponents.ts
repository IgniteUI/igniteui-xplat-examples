//begin imports
import { IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html } from 'lit-html';
//end imports

export class WebGridNumericColEditCellTemplate {
//begin template
//begin content
public webGridNumericColEditCellTemplate = (ctx: IgcCellTemplateContext) => {
    const cell = ctx.cell;
    const columnName = cell.column.field;
    const cellValue = cell.row.data[columnName];
    
    return html`
        <igc-input 
            type="number"
            name="${cell.id.rowID}"
            style="width: 100%;"
            value="${cellValue}"
            @igcChange=${(e: any) => {
                cell.editValue = e.detail;
            }}>
        </igc-input>`;
}
//end content
//end template
}

