//begin imports
//end imports

public class EditorChangeUpdateValueLines {
    //begin eventHandler
    public func editorChangeUpdateValueLines(sender: Any?, args: IgsPropertyEditorPropertyDescriptionChangedEventArgs?) {
        guard let item = sender as? IgsPropertyEditorPropertyDescription else { return }
        guard let chart = CodeGenHelper.getDescription(IgsCategoryChart.self, "content") else { return }

        let valueLineType = item.primitiveValue
        chart.valueLines = valueLineType
    }
    //end eventHandler
}
