//begin imports
import { IgcSliceClickEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class DoughnutChartExplosionSliceClick {

    //begin eventHandler
    public doughnutChartExplosionSliceClick(sender: any, args: IgcSliceClickEventArgs): void {
        // Runs in the host: the chart consumes this event argument synchronously.
        args.isExploded = !args.isExploded;
    }
    //end eventHandler
}
