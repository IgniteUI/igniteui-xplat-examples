//begin imports
import { IgcCategoryChartComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

//begin supportingTypes
// A window onto a series that keeps arriving: every tick appends one reading and drops the oldest,
// so the line scrolls without the collection growing. The chart is told about each end separately --
// an insert at the tail and a remove at the head -- which is what lets it move a chart of this size
// without rebuilding it.
//
// All of it lives here because five controls drive one running chart between them: start and stop,
// how often it ticks, how many points it holds, and generating a fresh set. Each of those is a
// separate entry point, and they have to be talking about the same data and the same timer.
export class CategoryChartFrequencyItem {
    public Label: string;
    public Value: number;
}

export class CategoryChartFrequency {

    public static points: number = 100000;
    public static refreshMilliseconds: number = 10;
    public static running: boolean = false;

    private static data: CategoryChartFrequencyItem[] = [];
    private static index: number = 0;
    private static timer: ReturnType<typeof setInterval> | null = null;

    public static generate(): void {
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
        CategoryChartFrequency.chart().dataSource = CategoryChartFrequency.data;
    }

    public static toggle(): void {
        CategoryChartFrequency.running = !CategoryChartFrequency.running;
    }

    // Restarted rather than adjusted, because the interval is fixed when the timer is created.
    public static restartTimer(): void {
        if (CategoryChartFrequency.timer !== null) {
            clearInterval(CategoryChartFrequency.timer);
        }
        CategoryChartFrequency.timer = setInterval(
            () => CategoryChartFrequency.tick(), CategoryChartFrequency.refreshMilliseconds);
    }

    private static chart(): IgcCategoryChartComponent {
        return CodeGenHelper.getDescription<IgcCategoryChartComponent>("content");
    }

    private static tick(): void {
        if (!CategoryChartFrequency.running) {
            return;
        }
        var data = CategoryChartFrequency.data;
        var chart = CategoryChartFrequency.chart();

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
