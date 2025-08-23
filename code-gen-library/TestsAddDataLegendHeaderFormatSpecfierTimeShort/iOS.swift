//begin imports
//end imports

public class TestsAddDataLegendHeaderFormatSpecfierTimeShort {

    //begin eventHandler
    //Swift: Action
    public func testsAddDataLegendHeaderFormatSpecfierTimeShort() {
        let legend = CodeGenHelper.getDescription(IgsDataLegend.self, "secondary")!
        legend.headerFormatSpecifiers = [
            IgsDateTimeFormatSpecifier().apply {
                $0.locale = "en-US"
                $0.timeStyle = "short"
            }
        ]
    }
    //end eventHandler
}
