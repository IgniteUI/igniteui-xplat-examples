//begin imports
import { IgcSliceClickEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class PieChartExplosionSliceClick {

    //begin eventHandler
    public pieChartExplosionSliceClick(sender: any, args: IgcSliceClickEventArgs): void {
        // Explosion is state the chart keeps for each slice, so a click toggles what the slice
        // already has rather than assigning the chart's exploded list. Selection is cleared so
        // that moving out is the only thing the click does.
        args.isExploded = !args.isExploded;
        args.isSelected = false;
    }
    //end eventHandler
}
