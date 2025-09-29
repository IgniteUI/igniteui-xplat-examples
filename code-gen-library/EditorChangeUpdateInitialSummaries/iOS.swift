//begin imports
//end imports

public class EditorChangeUpdateInitialSummaries {
    //begin eventHandler
    public func editorChangeUpdateInitialSummaries(sender: Any?, args: IgsPropertyEditorPropertyDescriptionChangedEventArgs?) {
        guard let chart = CodeGenHelper.getDescription(IgsCategoryChart.self, "content") else { return }
        let initialSummaryVal = String(describing: args.newValue)
        chart.initialSummaries = initialSummaryVal
    }
    //end eventHandler
}
