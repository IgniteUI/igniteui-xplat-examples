//begin imports
import { IgcCellTemplateContext, IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridCellEditCellTemplate {
//begin template
//begin content
public webGridCellEditCellTemplate = (ctx: IgcCellTemplateContext) => {
    let cellValues: any = [];
    let uniqueValues: any = [];
    let roleplayDataStats = CodeGenHelper.getDescription<IgcGridComponent>("content").data;
    for(const i of (roleplayDataStats as any)){
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
    <igc-select style="width:100%; height:100%; --ig-size: var(--ig-size-large);" @igcChange=${(e: any) => ctx.cell.editValue = e.detail.value}>
          ${cellValues}
    </igc-select>
`;
}
//end content
//end template
}

