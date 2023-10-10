//begin imports
import { IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebTreeGridUnitPriceTemplate {
//begin template
//begin content
public webTreeGridUnitPriceTemplate = (ctx: IgcCellTemplateContext) => {
    if (ctx.cell.value <= 25) {
        return html`<span style="color: green">${ctx.cell.value}</span>`;
    }
    else {
        return html`<span style="color: red">${ctx.cell.value}</span>`;
    }
};   
//end content
//end template
}