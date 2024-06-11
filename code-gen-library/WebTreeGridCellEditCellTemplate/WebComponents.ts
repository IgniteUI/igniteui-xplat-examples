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
    for(const i of (this.roleplayDataStats as any)){
        const field: string = ctx.cell.column.field;
        if(uniqueValues.indexOf(i[field]) === -1 )
        {
            if (ctx.cell.value == i[field]) {
                cellValues.push(html`<igc-select-item selected value=${i[field]}>${(i[field])}</igc-select-item>`);
            } else cellValues.push(html`<igc-select-item value=${i[field]}>${(i[field])}</igc-select-item>`);
            uniqueValues.push(i[field]);
        }
    }
    return html`
    <igc-select style="width:100%; height:100%" @igcChange=${(e: any) => ctx.cell.editValue = e.detail.value}>
          ${cellValues}
    </igc-select>
`;
}
//end content
//end template
}

