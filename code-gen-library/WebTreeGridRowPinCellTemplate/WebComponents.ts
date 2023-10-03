//begin imports
import { IgcCellTemplateContext, IgcTreeGridComponent } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebTreeGridRowPinCellTemplate {
//begin template
//begin content
    public webTreeGridRowPinCellTemplate = (ctx: IgcCellTemplateContext) => {
        const index = ctx.cell.id.rowIndex;
        return html`<span @pointerdown=${(e: any) => this.toggleRowPin(index)}>📌</span>`
}
//end content
//begin supportingMethods
public toggleRowPin(index: number) {
    var treeGrid = document.getElementsByTagName("igc-tree-grid")[0] as IgcTreeGridComponent;
    treeGrid.getRowByIndex(index).pinned = !treeGrid.getRowByIndex(index).pinned;
}
//end supportingMethods
//end template
}

