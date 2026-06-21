//begin imports
import { IgcRowSelectorTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridRowSelectorExcelTemplate {
//begin template
//begin content
public webGridRowSelectorExcelTemplate = (ctx: IgcRowSelectorTemplateContext) => {
    return html`<span style='width:30px;display: flex;justify-content: center;'> ${ctx.implicit.index}</span>`;
}
//end content
//end template
}