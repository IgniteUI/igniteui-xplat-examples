//begin imports
import com.infragistics.mobile.controls.IgaDataLegend
import com.infragistics.mobile.controls.DateTimeFormatSpecifier
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class TestsAddDataLegendHeaderSimpleFormatSpecfier {

    //begin eventHandler
    //Kotlin: Action
    public fun testsAddDataLegendHeaderSimpleFormatSpecfier() {
        val legend = CodeGenHelper.getDescription<IgaDataLegend>("secondary")!!;
        legend.headerFormatSpecifiers = arrayOf(
            DateTimeFormatSpecifier().apply {
                locale = "en-US"
                dateStyle = "long"
            }
        )
    }
    //end eventHandler

}
