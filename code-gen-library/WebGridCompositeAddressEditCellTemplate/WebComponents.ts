//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGridComponent, IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridCompositeAddressEditCellTemplate {
//begin template
//begin content
public webGridCompositeAddressEditCellTemplate = (ctx: IgcCellTemplateContext) => {

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

    return html`<div class="address-container--edit" style="display: inline-grid">
         <div>
             <span><strong>Country:</strong></span>
             <input id='Country' @keyup=${(e: any) => keyUpHandler(e, ctx)} value="${cell.row.data.Country}"></input>
             <br>
             <span><strong>City:</strong></span>
             <input id='City' @keyup=${(e: any) => keyUpHandler(e, ctx)} value="${cell.row.data.City}"></input>
         </div>
         <div>
             <span><strong>Postal Code:</strong></span>
             <input id='PostalCode' @keyup=${(e: any) => keyUpHandler(e, ctx)} value="${cell.row.data.PostalCode}"></input>
             <br>
             <span><strong>Selected:</strong></span>
             <input id='Phone' @keyup=${(e: any) => keyUpHandler(e, ctx)} value="${cell.row.data.Phone}"></input>
         </div>
         <br>
     </div>`;
    }
//end content
//end template
}

