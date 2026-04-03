//begin imports
import { IgcCellTemplateContext, IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridRowPinCellTemplate {
//begin template
//begin content
    public webGridRowPinCellTemplate = (ctx: IgcCellTemplateContext) => {
        const index = ctx.cell.id.rowIndex;
        return html`<span @pointerdown=${(e: any) => this.toggleRowPin(index)}>📌</span>`
}
//end content
//begin supportingMethods
public toggleRowPin(index: number) {
    var grid = CodeGenHelper.getDescription<IgcGridComponent>("content");
    grid.getRowByIndex(index).pinned = !grid.getRowByIndex(index).pinned;
}
//end supportingMethods
//end template
}

