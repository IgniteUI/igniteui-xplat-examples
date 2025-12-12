//begin imports
//end imports

public class EditorChangeUpdateYAxisMaximumValue {
    //begin eventHandler
    public func editorChangeUpdateYAxisMaximumValue(sender: Any?, args: IgsPropertyEditorPropertyDescriptionChangedEventArgs?) {
        guard let yAxisMaximumVal = args.newValue as? String,
              let yAxisMax = Int(yAxisMaximumVal) else { return }

        CodeGenHelper.getDescription(IgsCategoryChart.self, "content")?.yAxisMaximumValue = yAxisMax
    }
    //end eventHandler
}
