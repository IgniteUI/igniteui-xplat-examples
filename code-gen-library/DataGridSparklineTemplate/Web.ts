//begin imports
import { IgcSparklineComponent, SparklineDisplayType } from 'igniteui-webcomponents-charts';
//end imports

export class DataGridSparklineTemplate {

    //begin eventHandler
    /**
     * A sparkline drawn in the cell from the row's own order history. The grid reuses its cells as
     * it scrolls, so the chart is built once and given the new row's data on every pass.
     */
    public dataGridSparklineTemplate(s: any, e: any): void {
        var content = e.content as HTMLDivElement;
        var info = e.cellInfo;
        var chart: IgcSparklineComponent;

        if (content.childElementCount === 0) {
            chart = new IgcSparklineComponent();
            chart.width = '100%';
            chart.height = '100%';
            chart.valueMemberPath = 'Sold';
            chart.labelMemberPath = 'Week';
            chart.displayType = SparklineDisplayType.Line;
            chart.brush = 'rgb(21, 190, 6)';

            var container = document.createElement("div") as HTMLDivElement;
            container.style.width = "100%";
            container.style.height = "70px";
            container.style.background = "transparent";
            container.append(chart);

            content.appendChild(container);
        } else {
            var existing = content.children[0] as HTMLDivElement;
            chart = existing.children[0] as IgcSparklineComponent;
        }

        chart.dataSource = info.rowItem.OrderHistory;
    }
    //end eventHandler
}
