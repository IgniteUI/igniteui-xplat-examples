//begin imports
import { IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridTopSpeedTemplate {
//begin template
//begin content
public webGridTopSpeedTemplate = (ctx: IgcCellTemplateContext) => {
    if (ctx.cell.value < 5) {
        return html`<div><span style="color: royalblue;">${ctx.cell.value}</span></div>`;
    }
    else {
        return html`<div><span>${ctx.cell.value}</span></div>`;
    }
};   
//end content
//end template
}