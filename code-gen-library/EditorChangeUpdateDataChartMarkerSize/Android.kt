//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
import com.infragistics.mobile.controls.IgaDataChart;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class EditorChangeUpdateDataChartMarkerSize {
    //begin eventHandler
    public fun editorChangeUpdateDataChartMarkerSize(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs?) {
        var chart = CodeGenHelper.getDescription<IgaDataChart>("content")!!;
        var markerSizeVal = (args!!.newValue as String).toInt();
        var series = chart.actualSeries;
        for (i in 0 until series.size) {
            val markerSeries = series[i] as? IgaMarkerSeries;
            if (markerSeries != null) {
                markerSeries.markerSize = markerSizeVal;
            }
        }
    }
    //end eventHandler
}
