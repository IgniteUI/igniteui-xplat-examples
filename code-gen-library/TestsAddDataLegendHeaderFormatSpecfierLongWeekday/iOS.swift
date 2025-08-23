//begin imports
//end imports

public class TestsAddDataLegendHeaderFormatSpecfierLongWeekday {

    //begin eventHandler
    //Swift: Action
    public func testsAddDataLegendHeaderFormatSpecfierLongWeekday() {
        // TODO: long weekday cannot currently be set in WPF

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
