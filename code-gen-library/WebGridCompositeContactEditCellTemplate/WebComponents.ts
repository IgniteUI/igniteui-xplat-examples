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

    return html`<div class="contact-container--edit" style="display: inline-grid">         
             <div>
                 <strong>Name:</strong>
                 <input id='ContactName' @keyup=${(e: any) => keyUpHandler(e, ctx)} value="${cell.row.data.ContactName}"></input>
             </div>
             <div>
                 <strong>Title:</strong>
                 <input id='ContactTitle' @keyup=${(e: any) => keyUpHandler(e, ctx)} value='${cell.row.data.ContactTitle}'></input>
             </div>         
         <div>
             <strong>Company:</strong>
             <input id='CompanyName' @keyup=${(e: any) => keyUpHandler(e, ctx)} value='${cell.row.data.CompanyName}'></input>
         </div>
     </div>`;
}
//end content
//end template
}