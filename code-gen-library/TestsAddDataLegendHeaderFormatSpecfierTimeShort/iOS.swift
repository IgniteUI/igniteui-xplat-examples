//begin imports
//end imports

public class TestsAddDataLegendHeaderFormatSpecfierTimeShort {

    //begin eventHandler
    //Swift: Action
    public func testsAddDataLegendHeaderFormatSpecfierTimeShort() {
        let legend = CodeGenHelper.getDescription(IgsDataLegend.self, "secondary")!
        var spec1 = IgsDateTimeFormatSpecifier();
        spec1.locale = "en-US"
        spec1.timeStyle = "short"
            
        legend.headerFormatSpecifiers = [
            spec1
        ]
    }
    //end eventHandler
}
