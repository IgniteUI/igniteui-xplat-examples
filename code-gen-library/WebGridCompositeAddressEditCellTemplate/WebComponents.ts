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

    return html`
                <div class="contact-container--edit" style="padding: 1rem">         
                    <igc-input id="Country" label='Country' type="text" name="country" value="${ctx.row.data.Country}" @keyup=${(e: any) => keyUpHandler(e, ctx)}></igc-input>
                    <igc-input id="City" label='City' type="text" name="city" value="${ctx.row.data.City}" @keyup=${(e: any) => keyUpHandler(e, ctx)}></igc-input>
                    <igc-input id="PostalCode" label='PostalCode' type="text" name="postalcode" value="${ctx.row.data.PostsalCode}" @keyup=${(e: any) => keyUpHandler(e, ctx)}></igc-input>
                    <igc-input id="Phone" label='Phone' type="text" name="phone" value="${ctx.row.data.Phone}" @keyup=${(e: any) => keyUpHandler(e, ctx)}></igc-input>
                </div>`;
    }
//end content
//end template
}

