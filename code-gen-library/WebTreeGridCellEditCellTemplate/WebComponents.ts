//begin imports
import { IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebTreeGridCellEditCellTemplate {
//begin template
//begin content
public webTreeGridCellEditCellTemplate = (ctx: IgcCellTemplateContext) => {
    let cellValues: any = [];
    let uniqueValues: any = [];
    for(const item of (this.ordersTreeData as any)){
        const field: string = ctx.cell.column.field;
        const value = item[field];

        if(uniqueValues.indexOf(value) === -1 && value !== "")
        {
            if (ctx.cell.value == value) {
                cellValues.push(html`<igc-select-item selected value=${value}>${(value)}</igc-select-item>`);
            } else {
                 cellValues.push(html`<igc-select-item value=${value}>${(value)}</igc-select-item>`);
            }
            uniqueValues.push(value);
        }
    }
    return html`
    <igc-select style="width:100%; height:100%" size="large" @igcChange=${(e: any) => ctx.cell.editValue = e.detail.value}>
          ${cellValues}
    </igc-select>
`;
}
//end content
//end template
}

