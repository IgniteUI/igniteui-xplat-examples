//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGridComponent, IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridCompositeContactCellTemplate {
//begin template
//begin content
public webGridCompositeContactCellTemplate = (ctx: IgcCellTemplateContext) => {
    var cell = ctx.cell as any;
    if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
        return html``
    }

    return html` <div class="contact-container">
    <span><strong>Name:</strong> ${cell.row.data.ContactName}</span>
    <br />
    <span><strong>Title:</strong> ${cell.row.data.ContactTitle}</span>
    <br />
    <span><strong>Company:</strong> ${cell.row.data.CompanyName}</span>
    <br />
</div>`;
}
//end content
//end template
}

