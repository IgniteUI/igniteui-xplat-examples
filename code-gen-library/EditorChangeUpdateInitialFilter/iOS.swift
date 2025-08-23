//begin imports
//end imports

public class EditorChangeUpdateInitialFilter {
    //begin eventHandler
    public func editorChangeUpdateInitialFilter(sender: Any?, args: IgsPropertyEditorPropertyDescriptionChangedEventArgs) {
        guard let chart = CodeGenHelper.getDescription(IgsCategoryChart.self, "content") else { return }
        let initialFilterVal = String(describing: args.newValue)
        chart.initialFilter = initialFilterVal
    }
    //end eventHandler
}
