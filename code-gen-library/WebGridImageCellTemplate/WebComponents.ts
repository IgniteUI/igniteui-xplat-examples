//begin imports
import { IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridImageCellTemplate {
//begin template
//begin content
public webGridImageCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<div>
        <img src="${ctx.cell.value}"
        style="border: 1px solid black;
        object-fit: fill;
        height: 2rem;
        width: 3rem;"/>
    </div>`;
};
//end content
//end template
}