//begin imports
//end imports

public class EditorChangeUpdateDataChartMarkerSize {
    //begin eventHandler
    public func editorChangeUpdateDataChartMarkerSize(sender: Any?, args: IgsPropertyEditorPropertyDescriptionChangedEventArgs?) {
        guard let chart = CodeGenHelper.getDescription(IgsDataChart.self, "content") else { return }
        guard let markerSizeStr = args?.newValue as? String,
              let markerSizeVal = Int(markerSizeStr) else { return }

        let series = chart.actualSeries
        for i in 0..<series.count {
            if let markerSeries = series[i] as? IgsMarkerSeries {
                markerSeries.markerSize = markerSizeVal
            }
        }
    }
    //end eventHandler
}
