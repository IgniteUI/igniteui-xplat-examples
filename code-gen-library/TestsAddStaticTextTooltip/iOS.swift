//begin imports
import UIKit;
//end imports

public class TestsAddStaticTextTooltip {

    //begin eventHandler
    //Swift: Action
    public func testsAddStaticTextTooltip() {
        let content = CodeGenHelper.getDescription(AnyObject.self, "content")!
        // A category chart makes its own series, so they get the tooltip as it adds them;
        // any it has already made are reached through its data chart.
        if let categoryChart = content as? IgsCategoryChart {
            categoryChart.seriesAdded = { [weak self] sender, args in
                self?.addStaticTextTooltip(args!.series!)
            }
            for series in categoryChart.dataChart!.series!.toArray() {
                addStaticTextTooltip(series!)
            }
            return
        }
        let chart = content as! IgsDataChart
        for series in chart.series!.toArray() {
            addStaticTextTooltip(series!)
        }
    }

    private func addStaticTextTooltip(_ series: IgsSeries) {
        if !series.isLayer {
            series.chartToolTipUpdating = { sender, args in
                guard let args = args else { return }
                var cv = args.currentView
                if cv == nil {
                    let tv = UILabel()
                    cv = tv
                    args.currentView = cv
                }
                (cv as? UILabel)?.text = "text"
            }
        }
    }
    //end eventHandler
}
