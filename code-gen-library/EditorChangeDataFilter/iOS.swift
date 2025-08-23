//begin imports
//end imports

public class EditorChangeDataFilter {
    //begin eventHandler
    public func editorChangeDataFilter(sender: Any?, args: IgsPropertyEditorPropertyDescriptionChangedEventArgs) {
        guard let chart = CodeGenHelper.getDescription(IgsCategoryChart.self, "content") else { return }
        let filter = String(describing: args.newValue)
        chart.initialFilter = "(contains(Year,'" + filter + "'))"
    }
    //end eventHandler
}
