//begin imports
//end imports

public class TestsAddDataLegendHeaderFormatSpecfierLongWeekday {

    //begin eventHandler
    //Swift: Action
    public func testsAddDataLegendHeaderFormatSpecfierLongWeekday() {
        // TODO: long weekday cannot currently be set in WPF
    
        let legend = CodeGenHelper.getDescription(IgsDataLegend.self, "secondary")!
        var spec1 = IgsDateTimeFormatSpecifier();
        spec1.locale = "en-US"
        spec1.dateStyle = "short"
            
        legend.headerFormatSpecifiers = [
            spec1
        ]
    }
    //end eventHandler
}
