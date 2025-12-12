//begin imports
import com.infragistics.mobile.controls.IgaDataPieChart
import com.infragistics.mobile.controls.NumberFormatSpecifier
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class TestsAddDataPieNumberFormatter {

    //begin eventHandler
    //Kotlin: Action
    public fun testsAddDataPieNumberFormatter() {

        val dataPie = CodeGenHelper.getDescription<IgaDataPieChart>("content")!!;

        dataPie.sliceLabelFormatSpecifiers = arrayOf(
            NumberFormatSpecifier().apply {
                locale = "en-US"
                minimumIntegerDigits = 4
                minimumFractionDigits = 2
                maximumFractionDigits = 2
                useGrouping = false
            }
        )

        dataPie.othersSliceLabelFormatSpecifiers = arrayOf(
            NumberFormatSpecifier().apply {
                locale = "en-US"
                minimumIntegerDigits = 4
                minimumFractionDigits = 2
                maximumFractionDigits = 2
                useGrouping = false
            }
        )
    }
    //end eventHandler

}
