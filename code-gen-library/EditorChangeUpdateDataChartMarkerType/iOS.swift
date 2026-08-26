//begin imports
//end imports

public class EditorChangeUpdateDataChartMarkerType {
    //begin eventHandler
    public func editorChangeUpdateDataChartMarkerType(sender: Any?, args: IgsPropertyEditorPropertyDescriptionChangedEventArgs?) {
        guard let chart = CodeGenHelper.getDescription(IgsDataChart.self, "content") else { return }
        guard let markerTypeVal = args?.newValue as? String else { return }

        let series = chart.actualSeries
        for i in 0..<series.count {
            if let markerSeries = series[i] as? IgsMarkerSeries {
                markerSeries.markerType = markerTypeVal
            }
        }
    }
    //end eventHandler
}
