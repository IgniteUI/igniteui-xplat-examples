//begin imports
import { IgcCellTemplateContext, IgcHierarchicalGridComponent, IgcRowType } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridRowPinCellTemplate {
//begin template
//begin content
    public webHierarchicalGridRowPinCellTemplate = (ctx: IgcCellTemplateContext) => {
		const row = ctx.cell.row;
        return html`<span @pointerdown=${(e: any) => this.toggleRowPin(row)}>📌</span>`
}
//end content
//begin supportingMethods
public toggleRowPin(row: IgcRowType) {
    row.pinned = !row.pinned;
}
//end supportingMethods
//end template
}

