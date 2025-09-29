//begin imports
//end imports

public class TestsAddDataLegendValueFormatSpecifier {

    //begin eventHandler
    //Swift: Action
    public func testsAddDataLegendValueFormatSpecifier() {
        let dataPie = CodeGenHelper.getDescription(IgsDataPieChart.self, "content")!
    
        var spec1 = IgsNumberFormatSpecifier();
        spec1.locale = "en-US"
        spec1.minimumIntegerDigits = 4
        spec1.minimumFractionDigits = 2
        spec1.maximumFractionDigits = 2
        spec1.useGrouping = false
        
        dataPie.sliceLabelFormatSpecifiers = [
            spec1
        ]
    
        var spec2 = IgsNumberFormatSpecifier();
        spec2.locale = "en-US"
        spec2.minimumIntegerDigits = 4
        spec2.minimumFractionDigits = 2
        spec2.maximumFractionDigits = 2
        spec2.useGrouping = false
        
        dataPie.othersSliceLabelFormatSpecifiers = [
            spec2
        ]
    }
    //end eventHandler
}
