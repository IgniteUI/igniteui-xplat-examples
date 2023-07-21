//begin imports
import { IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridAvatarCellTemplate {
//begin template
//begin content
    public webGridAvatarCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<div>
    <igc-avatar shape="circle" src="${ctx.cell.value}">
    </igc-avatar>
</div>`;
}
//end content
//end template
}

