//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
import com.infragistics.mobile.controls.IgaDataChart;
import com.infragistics.mobile.controls.IgaMarkerSeries;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class EditorChangeUpdateDataChartMarkerSize {
    //begin eventHandler
    public fun editorChangeUpdateDataChartMarkerSize(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs?) {
        var chart = CodeGenHelper.getDescription<IgaDataChart>("content")!!;
        var markerSizeVal = args!!.newValue.toString().toDouble();
        var series = chart.series!!;
        for (i in 0 until series.count) {
            val markerSeries = series[i] as? IgaMarkerSeries;
            if (markerSeries != null) {
                markerSeries.markerSize = markerSizeVal;
            }
        }
    }
    //end eventHandler
}
