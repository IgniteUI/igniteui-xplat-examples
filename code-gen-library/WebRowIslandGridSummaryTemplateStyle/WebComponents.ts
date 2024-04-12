//begin imports
import { IgcSummaryResult, IgcSummaryTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebRowIslandGridSummaryTemplateStyle {
//begin template
//begin content
public webRowIslandGridSummaryTemplateStyle = (ctx: IgcSummaryTemplateContext) => {
    const summaryResults = ctx.implicit as IgcSummaryResult[];
    return html`<div class="summary-temp">
        <span><strong>${ summaryResults[0].label }</strong><span>${ summaryResults[0].summaryResult }</span></span>
        <span><strong>${ summaryResults[1].label }</strong><span>${ new Date(summaryResults[1].summaryResult) }</span></span>
    </div>`;
}
//end content
//end template
}