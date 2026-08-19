//begin imports
import { html } from 'lit';
//end imports

export class TestsAddNameTooltip {
//begin template
//begin content
    public testsAddNameTooltip = (context: any) => {
        return html`<div class="ui-chart-default-tooltip-content">${context.item.Name}</div>`;
    }
//end content
//end template
}
