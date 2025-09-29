//begin imports
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class TestsAddDataLegendHeaderSimpleFormatSpecfierShort {

    //begin eventHandler
    //Swift: Action
    public func testsAddDataLegendHeaderSimpleFormatSpecfierShort() {
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
