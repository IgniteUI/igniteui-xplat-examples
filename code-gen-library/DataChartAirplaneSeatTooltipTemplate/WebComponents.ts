//begin imports
import { html } from 'lit';
//end imports

export class DataChartAirplaneSeatTooltipTemplate {
//begin template
//begin content
    public dataChartAirplaneSeatTooltipTemplate = (ctx: { dataContext: any }) => {
        const item = ctx.dataContext.item;
        if (item == null) {
            return html``;
        }
        // A seat is identified by where it is and what it costs, and the two things the plan is
        // coloured by -- its cabin class and whether it is sold -- are named here as well, so the
        // colour under the pointer can be read rather than guessed at from the legend.
        return html`<div class="ui-tooltip-content">
    <div>Class: ${item.class}</div>
    <div>Seat: ${item.seat}</div>
    <div>Price: $${item.price}</div>
    <div>Status: ${item.status}</div>
</div>`;
    }
//end content
//end template
}
