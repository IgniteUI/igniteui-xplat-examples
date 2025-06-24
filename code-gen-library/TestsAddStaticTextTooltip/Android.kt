//begin imports
import com.infragistics.mobile.controls.IgaDataChart
import android.widget.TextView
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class TestsAddStaticTextTooltip {

    //begin eventHandler
    //Kotlin: Action
    public fun testsAddStaticTextTooltip() {
        val chart = CodeGenHelper.getDescription<IgaDataChart>("content")!!;
        for (series in chart.series!!.toArray()) {
            if (!series!!.isLayer) {
                //TODO
            }
        }
    }
    //end eventHandler

}
