//begin imports
//end imports

class TestsUpdateValueLayerPrecisionInSeriesAddedEvent {

    //begin eventHandler
    func testsUpdateValueLayerPrecisionInSeriesAddedEvent(sender: Any?, args: IgsChartSeriesEventArgs?) {
        let o = CodeGenHelper.findByName(Any.self, "SeriesAddedValueLayerPrecision")
        let parser = JsonDictionaryParser()
        let obj = parser.parse(json_: (o as! JsonDictionaryValue).value as! String) as! JsonDictionaryObject
        let rawVal = (obj["precision"] as! JsonDictionaryValue).value
        let precision: Int = (rawVal as? Double).map { Int($0) } ?? (rawVal as! Int)
        if let layer = args!.series as? IgsValueLayer {
            layer.yAxisAnnotationInterpolatedValuePrecision = precision
        }
    }
    //end eventHandler

}
