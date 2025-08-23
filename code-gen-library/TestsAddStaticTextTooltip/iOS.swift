//begin imports
//end imports

public class TestsAddStaticTextTooltip {

    //begin eventHandler
    //Swift: Action
    public func testsAddStaticTextTooltip() {
        let chart = CodeGenHelper.getDescription(IgsDataChart.self, "content")!
        for series in chart.series ?? [] {
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
    }
    //end eventHandler
}
