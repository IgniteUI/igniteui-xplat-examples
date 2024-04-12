//begin imports
import { IgcCellTemplateContext, IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
import { IgcButtonComponent } from "igniteui-webcomponents";
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridDeleteCellTemplate {
//begin template
//begin content
    public webGridDeleteCellTemplate = (ctx: IgcCellTemplateContext) => {
        var grid = CodeGenHelper.getDescription<IgcGridComponent>("content");
        var id = ctx.cell.id.rowID;
        return html`<igc-button @click=${(e: any) => grid.deleteRow(id)}>Delete</igc-button>`;
    }
//end content
//end template
}