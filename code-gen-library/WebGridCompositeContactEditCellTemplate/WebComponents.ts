//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGridComponent, IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridCompositeContactEditCellTemplate {
//begin template
//begin content
public webGridCompositeContactEditCellTemplate = (ctx: IgcCellTemplateContext) => {
    var cell = ctx.cell as any;
    if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
        return html``
    }

    function keyUpHandler(event: any, ctx: IgcCellTemplateContext) {
        var cell = ctx.cell as any;
        if (cell !== undefined && cell.row !== undefined && cell.row.data !== undefined) {
            cell.row.data[event.target.id] = event.target.value;
        }
    }

    return html`<div class="contact-container--edit" style="padding: 1rem">         
                    <igc-input id="ContactName" label='Name' type="text" name="name" value="${ctx.cell.row.data.ContactName}" @keyup=${(e: any) => keyUpHandler(e, ctx)}></igc-input>
                    <igc-input id="ContactTitle" label='Title' type="text" name="title" value="${ctx.cell.row.data.ContactTitle}" @keyup=${(e: any) => keyUpHandler(e, ctx)}></igc-input>
                    <igc-input id="CompanyName" label='Company' type="text" name="company" value="${ctx.cell.row.data.CompanyName}" @keyup=${(e: any) => keyUpHandler(e, ctx)}></igc-input>
                </div>`;
}
//end content
//end template
}