//begin imports
//end imports

public class PieChartSelectionSliceClick {
    //begin eventHandler
    public func pieChartSelectionSliceClick(sender: Any?, args: IgsSliceClickEventArgs?) {
        guard let args = args else { return }
        // Selecting a slice also moves it out of the pie, so that the selection the chart is
        // tracking is visible from the shape as well as from the styling.
        args.isExploded = !args.isExploded
        args.isSelected = true
    }
    //end eventHandler
}
