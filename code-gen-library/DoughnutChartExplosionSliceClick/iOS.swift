//begin imports
//end imports

public class DoughnutChartExplosionSliceClick {
    //begin eventHandler
    public func doughnutChartExplosionSliceClick(sender: Any?, args: IgsSliceClickEventArgs?) {
        let eventArgs = args!;
        eventArgs.isExploded = !eventArgs.isExploded;
    }
    //end eventHandler
}
