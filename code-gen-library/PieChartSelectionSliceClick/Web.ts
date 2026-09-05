//begin imports
import { IgcSliceClickEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class PieChartSelectionSliceClick {

    //begin eventHandler
    public pieChartSelectionSliceClick(sender: any, args: IgcSliceClickEventArgs): void {
        // Selecting a slice also moves it out of the pie, so that the selection the chart is
        // tracking is visible from the shape as well as from the styling.
        args.isExploded = !args.isExploded;
        args.isSelected = true;
    }
    //end eventHandler
}
