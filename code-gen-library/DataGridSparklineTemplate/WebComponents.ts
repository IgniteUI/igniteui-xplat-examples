//begin imports
import { IgcTemplateCellInfo } from 'igniteui-webcomponents-grids';
import { html } from 'lit';
//end imports

export class DataGridSparklineTemplate {
//begin template
//begin content
    public dataGridSparklineTemplate = (ctx: { dataContext: IgcTemplateCellInfo }) => {
        const info = ctx.dataContext;
        return html`<div style="width: 100%; height: 70px; background: transparent">
    <igc-sparkline
        width="100%"
        height="100%"
        display-type="Line"
        value-member-path="Sold"
        label-member-path="Week"
        brush="rgb(21, 190, 6)"
        .dataSource="${info.rowItem.OrderHistory}">
    </igc-sparkline>
</div>`;
    }
//end content
//end template
}
