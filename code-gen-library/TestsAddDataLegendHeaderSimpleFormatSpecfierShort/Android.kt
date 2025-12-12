//begin imports
//end imports

public class TestsAddDataLegendHeaderSimpleFormatSpecfierShort {

    //begin eventHandler
    //Kotlin: Action
    public func testsAddDataLegendHeaderSimpleFormatSpecfierShort() {
        let legend = CodeGenHelper.getDescription(IgsDataLegend.self, "secondary")!
        legend.headerFormatSpecifiers = [
            IgsDateTimeFormatSpecifier().apply {
                $0.locale = "en-US"
                $0.dateStyle = "short"
            }
        ]
    }
    //end eventHandler
}
