//begin imports
import UIKit;
//end imports

public class TestsAddNameTooltip {

    //begin eventHandler
    //Swift: Action
    public func testsAddNameTooltip() {
        let chart = CodeGenHelper.getDescription(IgsDataChart.self, "content")!
        for series in chart.series?.toArray() ?? [] {
            if !series!.isLayer {
                series!.chartToolTipUpdating = { sender, args in
                    guard let args = args else { return }
                    var cv = args.currentView
                    if cv == nil {
                        let tv = UILabel()
                        cv = tv
                        args.currentView = cv
                    }
                    if let item = args.currentData?.item as? DictionaryDataItem$2<String?, Any?>,
                       let name = item["Name"] as? String {
                        (cv as? UILabel)?.text = name
                    }
                }
            }
        }
    }
    //end eventHandler
}
