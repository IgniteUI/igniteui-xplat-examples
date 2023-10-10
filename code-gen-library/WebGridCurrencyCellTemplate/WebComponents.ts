//begin imports
import { IgcBadgeComponent } from "igniteui-webcomponents";
import { IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridCurrencyCellTemplate {
//begin template
//begin content
    public webGridCurrencyCellTemplate = (ctx: IgcCellTemplateContext) => {
        if (ctx.cell.value > 0) {
            return html`<div style='width: 80px;
            float: right;'>
            <igc-badge variant="success" style="float: left;"><span>▲</span></igc-badge>
            <span style='color:green;float: right;'>${ctx.cell.value.toFixed(2)}</span>
            </div>`;
        } else {
            return html`<div style='width: 80px;
            float: right;'>
            <igc-badge variant="danger" style="float: left;"><span>▼</span></igc-badge>
            <span style='color:red;float: right;'>${ctx.cell.value.toFixed(2)}</span>
            </div>`;
        };
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

.currency-badge-container {
    width: 80px;
    float: right;
}

.badge-left {
    float: left;
}
<!--end styles-->
`;
//end template
}
