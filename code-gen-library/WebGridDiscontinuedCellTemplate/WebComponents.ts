//begin imports
import { IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridDiscontinuedCellTemplate {
//begin template
//begin content
public webGridDiscontinuedCellTemplate = (ctx: IgcCellTemplateContext) => {
    if (ctx.cell.value) {
        return html`<img src="https://www.infragistics.com/angular-demos-lob/assets/images/grid/active.png" title="Continued" alt="Continued" />`
    } else {
        return html`<img src="https://www.infragistics.com/angular-demos-lob/assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />`;
    }
};
//end content
//end template
}