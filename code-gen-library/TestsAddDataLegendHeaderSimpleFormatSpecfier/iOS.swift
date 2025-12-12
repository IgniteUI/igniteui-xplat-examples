//begin imports
//end imports

public class TestsAddDataLegendHeaderSimpleFormatSpecfier {

    //begin eventHandler
    //Swift: Action
    public func testsAddDataLegendHeaderSimpleFormatSpecfier() {
        let legend = CodeGenHelper.getDescription(IgsDataLegend.self, "secondary")!
        var spec1 = IgsDateTimeFormatSpecifier();
        spec1.locale = "en-US"
        spec1.dateStyle = "long"
            
        legend.headerFormatSpecifiers = [
            spec1
        ]
    }
    //end eventHandler
}
