//begin imports
//end imports

public class EditorChangeUpdateYAxisMinimumValue {
    //begin eventHandler
    public func editorChangeUpdateYAxisMinimumValue(sender: Any?, args: IgsPropertyEditorPropertyDescriptionChangedEventArgs?) {
        guard let yAxisMinimumVal = args!.newValue as? String else { return }
        CodeGenHelper.getDescription(IgsCategoryChart.self, "content")?.yAxisMinimumValue = Double(yAxisMinimumVal) ?? Double.nan
    }
    //end eventHandler
}
