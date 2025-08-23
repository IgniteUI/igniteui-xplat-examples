//begin imports
//end imports

public class SelectionMatcherOnViewInit {

    //begin eventHandler
    //Swift: Action
    public func selectionMatcherOnViewInit() {

        let chart = CodeGenHelper.getDescription(IgsCategoryChart.self, "content")!
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
            let data = CodeGenHelper.findByName([Any?].self, "energyRenewableConsumption")!

            let matcher = IgsSeriesMatcher()
            let selection = IgsChartSelection()
            selection.item = data[1]
            matcher.memberPath = "hydro"
            matcher.memberPathType = "ValueMemberPath"
            selection.matcher = matcher
            chart.selectedSeriesItems?.append(selection)

            let matcher2 = IgsSeriesMatcher()
            let selection2 = IgsChartSelection()
            selection2.item = data[2]
            matcher2.memberPath = "wind"
            matcher2.memberPathType = "ValueMemberPath"
            selection2.matcher = matcher2

            chart.selectedSeriesItems?.append(selection2)
        }
    }
    //end eventHandler
}
