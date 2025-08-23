//begin imports
//end imports

public class ScatterBubbleSeriesFillScaleSliderChanged {
    //begin eventHandler
    public func scatterBubbleSeriesFillScaleSliderChanged(sender: Any?, args: IgsPropertyEditorPropertyDescriptionChangedEventArgs?) {

        var chart = CodeGenHelper.getDescription(IgsDataChart.self, "content")

        var series = chart.series[0] as! IgsBubbleSeries

        var fillScale = series.fillScale

        if let newValue = args?.newValue as? Double, newValue >= 25000 {
            fillScale.maximumValue = newValue
        } else if let newValue = args?.newValue as? Double {
            fillScale.minimumValue = newValue
        }
    }
    //end eventHandler
}
