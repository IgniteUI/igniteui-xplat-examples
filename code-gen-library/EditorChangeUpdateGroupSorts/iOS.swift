//begin imports
//end imports

public class EditorChangeUpdateGroupSorts {
    //begin eventHandler
    public func editorChangeUpdateGroupSorts(sender: Any?, args: IgsPropertyEditorPropertyDescriptionChangedEventArgs?) {
        guard let chart = CodeGenHelper.getDescription(IgsCategoryChart.self, "content") else { return }
        let groupSortsVal = String(describing: args!.newValue)
        chart.groupSorts = groupSortsVal
    }
    //end eventHandler
}
