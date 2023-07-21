//begin imports
import { IgcGridMasterDetailContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridMasterDetailTemplate {
//begin template
//begin content
public webGridMasterDetailTemplate = (ctx: IgcGridMasterDetailContext) => {
    var data = ctx.implicit;
    return html` <div class="contact-container">
    <span><strong>Name:</strong> ${data.ContactName}</span>
    <br />
    <span><strong>Title:</strong> ${data.ContactTitle}</span>
    <br />
    <span><strong>Company:</strong> ${data.CompanyName}</span>
    <br />
</div>`;
}
//end content
//end template
}

