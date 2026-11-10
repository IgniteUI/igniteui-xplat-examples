//begin imports
import com.infragistics.mobile.controls.IgaChartToolTipUpdatingEventHandler
import com.infragistics.mobile.controls.IgaChartToolTipUpdatingEventArgs
import com.infragistics.mobile.controls.IgaChartSeriesEventArgs
import com.infragistics.mobile.controls.IgaCategoryChart
import com.infragistics.mobile.controls.IgaDataChart
import com.infragistics.mobile.controls.IgaSeries
import com.infragistics.mobile.controls.IEventHandler
import android.content.Context
import android.widget.TextView
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class TestsAddStaticTextTooltip {

    //begin eventHandler
    //Kotlin: Action
    public fun testsAddStaticTextTooltip() {
        val content = CodeGenHelper.getDescription<Any>("content")!!;
        // A category chart makes its own series, so they get the tooltip as it adds them;
        // any it has already made are reached through its data chart.
        if (content is IgaCategoryChart) {
            content.seriesAdded = object : IEventHandler<IgaChartSeriesEventArgs> {
                override fun invoke(sender: Any?, args: IgaChartSeriesEventArgs) {
                    addStaticTextTooltip(args.series!!, content.context);
                }
            }
            for (series in content.dataChart!!.series!!.toArray()) {
                addStaticTextTooltip(series!!, content.context);
            }
            return;
        }
        val chart = content as IgaDataChart;
        for (series in chart.series!!.toArray()) {
            addStaticTextTooltip(series!!, chart.context);
        }
    }

    private fun addStaticTextTooltip(series: IgaSeries, context: Context) {
        if (!series.isLayer) {
            series.chartToolTipUpdating = object : IgaChartToolTipUpdatingEventHandler {
                override fun invoke(sender: Any?, args: IgaChartToolTipUpdatingEventArgs?) {
                    var cv = args!!.currentView;
                    if (cv == null) {
                        var tv = android.widget.TextView(context);
                        cv = tv;
                        args!!.currentView = cv;
                    }
                    (cv as android.widget.TextView).text = "text"
                }
            }
        }
    }
    //end eventHandler

}
