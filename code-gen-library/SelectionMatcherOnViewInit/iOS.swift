//begin imports
//end imports

public class SelectionMatcherOnViewInit {

    //begin eventHandler
    //Swift: Action
    public func selectionMatcherOnViewInit() {
    
        // Shared by the category chart and data chart samples, which bind the same data.
        let content = CodeGenHelper.getDescription(AnyObject.self, "content")!
        let selectedItems = (content as? IgsCategoryChart)?.selectedSeriesItems ?? (content as! IgsDataChart).selectedSeriesItems
        // The data the charts are bound to: the library holds it as an IgsDataAdapter.
        let data = CodeGenHelper.findByName(IgsDataAdapter.self, "energyRenewableConsumption")!

        let matcher = IgsSeriesMatcher()
        let selection = IgsChartSelection()
        selection.item = data[1]
        matcher.memberPath = "Hydro"
        matcher.memberPathType = "ValueMemberPath"
        selection.matcher = matcher
        selectedItems!.add(item: selection)

        let matcher2 = IgsSeriesMatcher()
        let selection2 = IgsChartSelection()
        selection2.item = data[2]
        matcher2.memberPath = "Wind"
        matcher2.memberPathType = "ValueMemberPath"
        selection2.matcher = matcher2

        selectedItems!.add(item: selection2)
    }
    //end eventHandler
}
