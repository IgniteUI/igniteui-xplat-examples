//begin imports
import { IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridTextColorTemplate {
//begin template
//begin content
public webGridTextColorTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<span style="color: red;">${ctx.cell.value}</span>`;
};
//end content
//end template
}