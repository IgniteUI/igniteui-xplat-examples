//begin imports
import { html } from 'lit';
//end imports

export class DataChartProductionTooltipTemplate {
//begin template
//begin content
    public dataChartProductionTooltipTemplate = (ctx: { dataContext: any }) => {
        const item = ctx.dataContext.item;
        const series = ctx.dataContext.series;
        if (item == null || series == null) {
            return html``;
        }
        // Every fuel is listed whichever column is hovered, so the reader sees the country's whole
        // mix; the one the hovered series draws is tinted with that series' own brush so it can be
        // picked out of the five.
        const fuels = ["Coal", "Hydro", "Nuclear", "Gas", "Oil"];
        return html`<div class="ui-tooltip-content">
    <div class="tooltipTitle">${item.country} Production</div>
    ${fuels.map((fuel) => html`
    <div class="tooltipHorizontal"
         style="color: ${series.valueMemberPath === fuel ? series.actualBrush : 'black'}">
        <label class="tooltipLbl" style="width: 4rem">${fuel}:</label>
        <label class="tooltipVal">${item[fuel.toLowerCase()]}</label>
    </div>`)}
</div>`;
    }
//end content
//end template
}
