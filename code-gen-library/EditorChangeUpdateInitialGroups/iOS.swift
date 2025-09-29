//begin imports
//end imports

public class EditorChangeUpdateInitialGroups {
    //begin eventHandler
    public func editorChangeUpdateInitialGroups(sender: Any?, args: IgsPropertyEditorPropertyDescriptionChangedEventArgs?) {
        guard let chart = CodeGenHelper.getDescription(IgsCategoryChart.self, "content") else { return }
        chart.initialGroups = String(describing: args.newValue)
    }
    //end eventHandler
}
