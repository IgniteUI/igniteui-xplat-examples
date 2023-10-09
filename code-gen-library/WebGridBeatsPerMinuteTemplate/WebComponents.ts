//begin imports
import { IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridBeatsPerMinuteTemplate {
//begin template
//begin content
public webGridBeatsPerMinuteTemplate = (ctx: IgcCellTemplateContext) => {
    if (ctx.cell.value > 95) {
        return html`<div><span style="color: red;">${ctx.cell.value}</span></div>`;
    }
    else {
        return html`<div><span style="color: green;">${ctx.cell.value}</span></div>`;
    }
}
//end content
//end template
}