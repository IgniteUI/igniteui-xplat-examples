//begin imports
import { IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridBooleanCellTemplate {
//begin template
//begin content
    public webGridBooleanCellTemplate = (ctx: IgcCellTemplateContext) => {
        if (ctx.cell.value) {
            return html`<img src="https://static.infragistics.com/xplatform/images/grid/active.png" title="Continued" alt="Continued" />`
        } else {
            return html`<img src="https://static.infragistics.com/xplatform/images/grid/expired.png" title="Discontinued" alt="Discontinued" />`;
        }
}
//end content
//end template
}

