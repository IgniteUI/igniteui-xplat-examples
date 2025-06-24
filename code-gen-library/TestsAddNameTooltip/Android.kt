//begin imports
import com.infragistics.mobile.controls.IgaDataChart
import com.infragistics.mobile.controls.IgaSeries
import android.widget.TextView
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class TestsAddNameTooltip {

    //begin eventHandler
    //Kotlin: Action
    public fun testsAddNameTooltip() {
        val chart = CodeGenHelper.getDescription<IgaDataChart>("content")!!;
        for (series in chart.series!!.toArray()) {
            if (!series!!.isLayer) {
                //val textView = TextView(chart.context)
                //TODO:
            }
        }
    }
    //end eventHandler

}
