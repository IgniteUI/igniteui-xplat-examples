//begin imports
//end imports

public class TestsAddDataLegendHeaderSimpleFormatSpecfier {

    //begin eventHandler
    //Swift: Action
    public func testsAddDataLegendHeaderSimpleFormatSpecfier() {
        let legend = CodeGenHelper.getDescription(IgsDataLegend.self, "secondary")!
        legend.headerFormatSpecifiers = [
            IgsDateTimeFormatSpecifier().apply {
                $0.locale = "en-US"
                $0.dateStyle = "long"
            }
        ]
    }
    //end eventHandler
}
