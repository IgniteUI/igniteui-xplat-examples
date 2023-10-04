//begin imports
import { IgcCellTemplateContext, IgcTreeGridComponent } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

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
    var treeGrid = CodeGenHelper.getDescription<IgcTreeGridComponent>("content");
    treeGrid.getRowByIndex(index).pinned = !treeGrid.getRowByIndex(index).pinned;
}
//end supportingMethods
//end template
}

