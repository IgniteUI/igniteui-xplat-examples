//begin imports
//end imports

public class DoughnutChartSelectionOnViewInit {
    //begin eventHandler
    //Swift: Action
    public func doughnutChartSelectionOnViewInit() {
        DoughnutChartSelectionReadout.show(
            series: CodeGenHelper.findByName(IgsRingSeries.self, "ringSeries")!,
            field: CodeGenHelper.findByName(IgsPropertyEditorPropertyDescription.self, "SelectedSlice")!,
            index: 0);
    }
    //end eventHandler
}
