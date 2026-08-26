//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
import com.infragistics.mobile.controls.IgaDataChart;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class EditorChangeUpdateDataChartMarkerType {
    //begin eventHandler
    public fun editorChangeUpdateDataChartMarkerType(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs?) {
        var chart = CodeGenHelper.getDescription<IgaDataChart>("content")!!;
        var markerTypeVal = args!!.newValue as String;
        var series = chart.actualSeries;
        for (i in 0 until series.size) {
            val markerSeries = series[i] as? IgaMarkerSeries;
            if (markerSeries != null) {
                markerSeries.markerType = markerTypeVal;
            }
        }
    }
    //end eventHandler
}
