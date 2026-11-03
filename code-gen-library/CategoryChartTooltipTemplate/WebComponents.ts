//begin imports
import { html } from 'lit';
//end imports

export class CategoryChartTooltipTemplate {
//begin template
//begin content
    public categoryChartTooltipTemplate = (ctx: { dataContext: any }) => {
        const item = ctx.dataContext.item;
        if (item == null) {
            return html``;
        }
        return html`<div class="tooltipVertical">
    <div class="tooltipTitle">Franchise: ${item.franchise}</div>
    <div class="tooltipLbl">Revenue of All Movies: ${item.totalRevenue}</div>
    <div class="tooltipLbl">Highest Grossing Movie: $${item.highestGrossing}</div>
</div>`;
    }
//end content
//end template
}
