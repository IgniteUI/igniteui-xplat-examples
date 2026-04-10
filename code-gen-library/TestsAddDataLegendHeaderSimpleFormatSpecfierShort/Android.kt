//begin imports
import com.infragistics.mobile.controls.IgaDataLegend
import com.infragistics.mobile.controls.IgaDateTimeFormatSpecifier
//end imports

public class TestsAddDataLegendHeaderSimpleFormatSpecfierShort {

    //begin eventHandler
    //Kotlin: Action
    public fun testsAddDataLegendHeaderSimpleFormatSpecfierShort() {
        var legend = CodeGenHelper.getDescription<IgaDataLegend>("secondary");
        var spec1 = IgaDateTimeFormatSpecifier();
        spec1.locale = "en-US"
        spec1.dateStyle = "short"

        if (legend != null) {
            legend.headerFormatSpecifiers = arrayOf(spec1);
        }
    }
    //end eventHandler

}