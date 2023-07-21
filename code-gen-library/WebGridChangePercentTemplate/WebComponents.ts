//begin imports
import { IgcBadgeComponent } from "igniteui-webcomponents";
import { IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridChangePercentTemplate {
//begin template
//begin content
    public webGridChangePercentTemplate = (ctx: IgcCellTemplateContext) => {
        if (ctx.cell.value > 0) {
            return html`<div>
            <span style="color:green;">${ctx.cell.value.toFixed(2)}%</span>
            </div>`;
        } else {
            return html`<div>
            <span style="color:red;">${ctx.cell.value.toFixed(2)}%</span>
            </div>`;
        }
    }
//end content

    public requiredStyles = `
<!--begin styles-->
.cellAlignStyle {
    text-align: right;
    float:right;
}
.cellAlignStyle > span {
    float:right;
}
.up {
    color: green;
}
.down {
    color: red;
}
.grid__wrapper {
  padding: 16px;
}
<!--end styles-->
`;
//end template
}
