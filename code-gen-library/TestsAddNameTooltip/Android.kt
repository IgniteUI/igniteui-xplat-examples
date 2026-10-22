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
                        val item = args.currentData?.item
                        val name = when (item) {
                            is Map<*, *> -> item["Name"]
                            null -> null
                            else -> {
                                val getter = item.javaClass.methods.firstOrNull {
                                    it.name == "getName" && it.parameterTypes.isEmpty()
                                }
                                if (getter != null) {
                                    getter.invoke(item)
                                } else {
                                    item.javaClass.methods.firstOrNull {
                                        it.name == "get" && it.parameterTypes.size == 1 && it.parameterTypes[0].isAssignableFrom(String::class.java)
                                    }?.invoke(item, "Name")
                                }
                            }
                        }
                        (cv as android.widget.TextView).text = name?.toString().orEmpty()
                    }
                }
            }
        }
    }
    //end eventHandler

}
