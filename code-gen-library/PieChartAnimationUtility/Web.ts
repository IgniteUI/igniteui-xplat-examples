//begin imports
import { IgcPieChartComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

//begin supportingTypes
// The animation is the pie growing from nothing to full size while it turns once, stepped by a
// timer. It lives here rather than in either entry point because both of them drive the same
// animation: the sample starts it once when the view is ready, and the button stops and restarts
// it. Two items each holding their own timer would leave the button unable to stop the one that
// started on load.
export class PieChartAnimation {

    private static timer: ReturnType<typeof setInterval> | null = null;

    public static get running(): boolean {
        return PieChartAnimation.timer !== null;
    }

    public static toggle(): void {
        if (PieChartAnimation.running) {
            PieChartAnimation.stop();
        } else {
            PieChartAnimation.start();
        }
    }

    public static start(): void {
        PieChartAnimation.stop();
        var chart = CodeGenHelper.getDescription<IgcPieChartComponent>("content");
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
        var chart = CodeGenHelper.getDescription<IgcPieChartComponent>("content");
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
