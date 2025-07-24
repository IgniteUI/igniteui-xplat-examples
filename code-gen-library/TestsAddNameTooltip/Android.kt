//begin imports
import com.infragistics.mobile.controls.IgaDataChart
import com.infragistics.mobile.controls.IgaSeries
import android.widget.TextView
import com.infragistics.mobile.controls.IgaChartToolTipUpdatingEventArgs
import com.infragistics.mobile.controls.IgaChartToolTipUpdatingEventHandler
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class TestsAddNameTooltip {

    //begin eventHandler
    //Kotlin: Action
    public fun testsAddNameTooltip() {
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
                        val item = args!!.currentData!!.item as Map<String?,Any?>;
                        (cv as android.widget.TextView).text = item["Name"] as String;
                    }
                }
            }
        }
    }
    //end eventHandler

}
