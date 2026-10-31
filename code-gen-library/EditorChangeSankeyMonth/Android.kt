//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
import com.infragistics.mobile.controls.IgaDataChart;
import com.infragistics.mobile.controls.IgaSankeySeries;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class EditorChangeSankeyMonth {
    //begin eventHandler
    public fun editorChangeSankeyMonth(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs?) {
        var chart = CodeGenHelper.getDescription<IgaDataChart>("content")!!;
        var month = args!!.newValue as String;
        // The links carry one value column per month; reading another column animates the
        // flows to that month's values (shouldAnimateOnDataSourceSwap + transitionDuration).
        var series = chart.actualSeries;
        for (i in 0 until series.size) {
            val sankey = series[i] as? IgaSankeySeries;
            if (sankey != null) {
                sankey.linkValueMemberPath = month;
            }
        }
    }
    //end eventHandler
}
