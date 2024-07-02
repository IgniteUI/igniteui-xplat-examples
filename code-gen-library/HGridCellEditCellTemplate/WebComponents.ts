//begin imports
import { IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
import { IgcHierarchicalGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

export class HGridCellEditCellTemplate {
//begin template
//begin content
public hGridCellEditCellTemplate = (ctx: IgcCellTemplateContext) => {
    let cellValues: any = [];
    let uniqueValues: any = [];
    let hGridDndData = CodeGenHelper.getDescription<IgcHierarchicalGridComponent>("content").data;
    for(const i of (hGridDndData as any)){
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
    <igc-select style="width:100%; height:100%" size="large" @igcChange=${(e: any) => ctx.cell.editValue = e.detail.value}>
          ${cellValues}
    </igc-select>
`;
}
//end content
//end template
}

