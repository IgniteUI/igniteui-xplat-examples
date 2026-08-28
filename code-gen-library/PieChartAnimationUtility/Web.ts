//begin imports
import { IgcPieChartComponent } from 'igniteui-webcomponents-charts';
//end imports

//begin supportingTypes
// The animation is the pie growing from nothing to full size while it turns once, stepped by a
// timer. It lives here rather than in either entry point because both of them drive the same
// animation: the sample starts it once when the view is ready, and the button stops and restarts
// it. Two items each holding their own timer would leave the button unable to stop the one that
// started on load.
//
// The chart is handed in rather than looked up here. Asking for a description resolves, where the
// sample is generated, to the field the component was assigned to -- which only means anything
// inside the component's own instance, so the entry points do the asking and pass the answer on.
export class PieChartAnimation {

    private static chart: IgcPieChartComponent | null = null;
    private static timer: ReturnType<typeof setInterval> | null = null;

    public static get running(): boolean {
        return PieChartAnimation.timer !== null;
    }

    public static toggle(chart: IgcPieChartComponent): void {
        if (PieChartAnimation.running) {
            PieChartAnimation.stop();
        } else {
            PieChartAnimation.start(chart);
        }
    }

    public static start(chart: IgcPieChartComponent): void {
        PieChartAnimation.stop();
        PieChartAnimation.chart = chart;
        chart.startAngle = 0;
        chart.radiusFactor = 0.1;
        PieChartAnimation.timer = setInterval(() => PieChartAnimation.tick(), 15);
    }

    public static stop(): void {
        if (PieChartAnimation.timer !== null) {
            clearInterval(PieChartAnimation.timer);
            PieChartAnimation.timer = null;
        }
    }

    private static tick(): void {
        var chart = PieChartAnimation.chart;
        if (chart == null) {
            return;
        }
        if (chart.radiusFactor < 1.0) {
            chart.radiusFactor += 0.0025;
        }
        if (chart.startAngle < 360) {
            chart.startAngle++;
        }
        // Both have arrived, so there is nothing left to step.
        if (chart.radiusFactor >= 1.0 && chart.startAngle >= 360) {
            PieChartAnimation.stop();
        }
    }
}
//end supportingTypes
