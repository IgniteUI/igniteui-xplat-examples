//begin imports
//end imports

public class TestsUpdateGroupsInSeriesAddedEvent {

    //begin eventHandler
    var groupIndex = 0
    public func testsUpdateGroupsInSeriesAddedEvent(sender: Any?, args: IgsChartSeriesEventArgs?) {
        let o = CodeGenHelper.findByName(Any.self, "SeriesAddedGroups")
        let parser = JsonDictionaryParser()
        let obj = parser.parse(json_: (o as! JsonDictionaryValue).value as! String) as! JsonDictionaryObject
        let updateAnnotations = (obj["includeAnnotations"] as! JsonDictionaryValue).value as! Bool
        let seriesGroups = obj["names"] as! JsonDictionaryArray
        var groups: [String] = []
        for i in 0..<seriesGroups.items!.count {
            groups.append((seriesGroups.items![i] as! JsonDictionaryValue).value as! String)
        }

        if args!.series!.isAnnotationLayer && !updateAnnotations {
            return
        }

        if groupIndex >= groups.count { groupIndex = 0 }
        if args!.series!.dataLegendGroup != nil && groups.contains(args!.series!.dataLegendGroup!) { return }
        args!.series!.dataLegendGroup = groups[groupIndex]
        groupIndex += 1
    }
    //end eventHandler

}
