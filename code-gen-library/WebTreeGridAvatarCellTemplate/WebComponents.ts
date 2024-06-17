//begin imports
import { IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebTreeGridAvatarCellTemplate {
//begin template
//begin content
    public webTreeGridAvatarCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<div class="cell__inner">
    <igc-avatar shape="circle" src="${ctx.cell.row.data.Avatar}">
    </igc-avatar>
    <span class="name">${ctx.cell.value}</span>
</div>`;
}
//end content
//end template
public requiredStyles = `
<!--begin styles-->
.cell__inner {
    display: flex;
    align-items: center;
}

.name {
    margin-left: 30px;
}
<!--end styles-->
`;
}