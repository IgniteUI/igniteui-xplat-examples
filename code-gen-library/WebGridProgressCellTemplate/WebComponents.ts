//begin imports
import { IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridProgressCellTemplate {
//begin template
//begin content
public webGridProgressCellTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<div style="width: 4rem">
        <igc-linear-progress value="${ctx.cell.value}"></igc-linear-progress>
    </div>`;
};
//end content
//end template
}