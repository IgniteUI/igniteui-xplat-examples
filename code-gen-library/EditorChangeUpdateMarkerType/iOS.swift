//begin imports
//end imports

public class EditorChangeUpdateMarkerType {
    //begin eventHandler
    public func editorChangeUpdateMarkerType(sender: Any?, args: IgsPropertyEditorPropertyDescriptionChangedEventArgs?) {
        guard let item = sender as? IgsPropertyEditorPropertyDescription else { return }
        guard let chart = CodeGenHelper.getDescription(IgsCategoryChart.self, "content") else { return }

        let markerVal = item.primitiveValue
        chart.markerTypes = markerVal
    }
    //end eventHandler
}
