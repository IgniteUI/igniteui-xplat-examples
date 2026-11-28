//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
import com.infragistics.mobile.controls.IgaMarkerType;
import com.infragistics.mobile.controls.IgaDataChart;
import com.infragistics.mobile.controls.IgaMarkerSeries;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class EditorChangeUpdateDataChartMarkerType {
    //begin eventHandler
    public fun editorChangeUpdateDataChartMarkerType(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs?) {
        var chart = CodeGenHelper.getDescription<IgaDataChart>("content")!!;
        var markerTypeVal = IgaMarkerType.valueOf(args!!.newValue.toString().uppercase());
        var series = chart.series!!;
        for (i in 0 until series.count) {
            val markerSeries = series[i] as? IgaMarkerSeries;
            if (markerSeries != null) {
                markerSeries.markerType = markerTypeVal;
            }
        }
    }
    //end eventHandler
}
