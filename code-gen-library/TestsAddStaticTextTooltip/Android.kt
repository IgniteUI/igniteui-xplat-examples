//begin imports
import com.infragistics.mobile.controls.IgaChartToolTipUpdatingEventHandler
import com.infragistics.mobile.controls.IgaChartToolTipUpdatingEventArgs
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
                series.chartToolTipUpdating = object : IgaChartToolTipUpdatingEventHandler {
                    override fun invoke(sender: Any?, args: IgaChartToolTipUpdatingEventArgs?) {
                        var cv = args!!.currentView;
                        if (cv == null) {
                            var tv = android.widget.TextView(chart.context);
                            cv = tv;
                            args!!.currentView = cv;
                        }
                        (cv as android.widget.TextView).text = "text"
                    }
                }
            }
        }
    }
    //end eventHandler

}
