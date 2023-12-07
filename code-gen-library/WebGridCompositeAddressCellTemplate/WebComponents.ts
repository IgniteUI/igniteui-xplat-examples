//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGridComponent, IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridCompositeAddressCellTemplate {
//begin template
//begin content
public webGridCompositeAddressCellTemplate = (ctx: IgcCellTemplateContext) => {
    var cell = ctx.cell as any;
    if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
        return html``
    }

    return html`<div class="address-container">
    <div class="country-city">
        <span><strong>Country:</strong> ${cell.row.data.Country}</span>
        <br>
        <span><strong>City:</strong> ${cell.row.data.City}</span>
    </div>
    <div class="phone-pscode">
        <span><strong>Postal Code:</strong> ${cell.row.data.PostalCode}</span>
        <br>
        <span><strong>Phone:</strong> ${cell.row.data.Phone}</span>
    </div>
    <br />
</div>`;
}
//end content
//end template
}

