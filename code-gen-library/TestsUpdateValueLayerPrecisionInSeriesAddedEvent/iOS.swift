//begin imports
//end imports

class TestsUpdateValueLayerPrecisionInSeriesAddedEvent {

    //begin eventHandler
    func testsUpdateValueLayerPrecisionInSeriesAddedEvent(sender: Any?, args: IgsChartSeriesEventArgs) {
        let o = CodeGenHelper.findByName(Any.self, "SeriesAddedValueLayerPrecision")
        let parser = JsonDictionaryParser()
        let obj = parser.parse((o as! JsonDictionaryValue).value as! String) as! JsonDictionaryObject
        let precision = (obj["precision"] as! JsonDictionaryValue).value as! Int
        if let layer = args.series as? IgsValueLayer {
            layer.yAxisAnnotationInterpolatedValuePrecision = precision
        }
    }
    //end eventHandler

}
