//begin imports
//end imports

public class TestsUpdateTitlesInSeriesAddedEvent {

    //begin eventHandler
    var titleIndex = 0
    public func testsUpdateTitlesInSeriesAddedEvent(sender: Any?, args: IgsChartSeriesEventArgs) {
        let o = CodeGenHelper.findByName(Any.self, "SeriesAddedTitles")
        let parser = JsonDictionaryParser()
        let obj = parser.parse((o as! JsonDictionaryValue).value as! String) as! JsonDictionaryObject

        let updateAnnotations = (obj["includeAnnotations"] as! JsonDictionaryValue).value as! Bool
        let seriesTitles = obj["names"] as! JsonDictionaryArray
        var names: [String] = []
        for i in 0..<seriesTitles.items!.count {
            names.append((seriesTitles.items![i] as! JsonDictionaryValue).value as! String)
        }

        if args.series!.isAnnotationLayer && !updateAnnotations { return }
        if titleIndex >= names.count { titleIndex = 0 }
        if names.contains(args.series!.title) { return }
        args.series!.title = names[titleIndex]
        titleIndex += 1
    }
    //end eventHandler

}
