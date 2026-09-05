//begin imports
import { IgcCategoryChartComponent } from 'igniteui-webcomponents-charts';
//end imports

//begin supportingTypes
// A window onto a series that keeps arriving: every tick appends one reading and drops the oldest,
// so the line scrolls without the collection growing. The chart is told about each end separately --
// an insert at the tail and a remove at the head -- which is what lets it move a chart of this size
// without rebuilding it.
//
// All of it lives here because five controls drive one running chart between them: start and stop,
// how often it ticks, how many points it holds, and generating a fresh set. Each of those is a
// separate entry point, and they have to be talking about the same data and the same timer.
//
// The chart is handed in rather than looked up here. Asking for a description resolves, where the
// sample is generated, to the field the component was assigned to -- which only means anything
// inside the component's own instance, so the entry points do the asking and pass the answer on.
export class CategoryChartFrequencyItem {
    public Label: string;
    public Value: number;
}

export class CategoryChartFrequency {

    public static points: number = 100000;
    public static refreshMilliseconds: number = 10;
    public static running: boolean = false;

    private static chart: IgcCategoryChartComponent | null = null;
    private static data: CategoryChartFrequencyItem[] = [];
    private static index: number = 0;
    private static timer: ReturnType<typeof setInterval> | null = null;

    public static generate(chart: IgcCategoryChartComponent): void {
        CategoryChartFrequency.chart = chart;
        CategoryChartFrequency.data = [];
        var value = 100;
        for (var i = 0; i <= CategoryChartFrequency.points; i++) {
            value += Math.random() * 4.0 - 2.0;
            var item = new CategoryChartFrequencyItem();
            item.Label = i.toString();
            item.Value = Math.round(value);
            CategoryChartFrequency.data.push(item);
        }
        CategoryChartFrequency.index = CategoryChartFrequency.data.length;
        chart.dataSource = CategoryChartFrequency.data;
    }

    public static toggle(): void {
        CategoryChartFrequency.running = !CategoryChartFrequency.running;
    }

    // Restarted rather than adjusted, because the interval is fixed when the timer is created.
    public static restartTimer(chart: IgcCategoryChartComponent): void {
        CategoryChartFrequency.chart = chart;
        if (CategoryChartFrequency.timer !== null) {
            clearInterval(CategoryChartFrequency.timer);
        }
        CategoryChartFrequency.timer = setInterval(
            () => CategoryChartFrequency.tick(), CategoryChartFrequency.refreshMilliseconds);
    }

    private static tick(): void {
        if (!CategoryChartFrequency.running) {
            return;
        }
        var data = CategoryChartFrequency.data;
        var chart = CategoryChartFrequency.chart;
        if (chart == null) {
            return;
        }

        var previous = data[data.length - 1];
        var arrived = new CategoryChartFrequencyItem();
        arrived.Label = (++CategoryChartFrequency.index).toString();
        arrived.Value = previous.Value + Math.random() * 4.0 - 2.0;

        var leaving = data[0];
        data.push(arrived);
        chart.notifyInsertItem(data, data.length - 1, arrived);
        data.shift();
        chart.notifyRemoveItem(data, 0, leaving);
    }
}
//end supportingTypes
