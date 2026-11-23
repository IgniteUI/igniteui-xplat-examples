//begin imports
//end imports

public class DoughnutChartSelectionSliceClick {
    //begin eventHandler
    public func doughnutChartSelectionSliceClick(sender: Any?, args: IgsSliceClickEventArgs?) {
        DoughnutChartSelectionReadout.show(
            series: CodeGenHelper.findByName(IgsRingSeries.self, "ringSeries")!,
            field: CodeGenHelper.findByName(IgsPropertyEditorPropertyDescription.self, "SelectedSlice")!,
            index: args!.isSelected ? args!.index : -1);
    }
    //end eventHandler
}
