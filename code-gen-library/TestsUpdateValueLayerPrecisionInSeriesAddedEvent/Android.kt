//begin imports
import com.infragistics.mobile.controls.IgaChartSeriesEventArgs
import com.infragistics.mobile.controls.IgaValueLayer
import com.infragistics.mobile.controls.JsonDictionaryObject
import com.infragistics.mobile.controls.JsonDictionaryValue
import com.infragistics.mobile.controls.JsonDictionaryParser
//end imports

import com.infragistics.controls.CodeGenHelper

class TestsUpdateValueLayerPrecisionInSeriesAddedEvent {

    //begin eventHandler
    fun testsUpdateValueLayerPrecisionInSeriesAddedEvent(sender: Any?, args: IgaChartSeriesEventArgs) {
        val o = CodeGenHelper.findByName<Any>("SeriesAddedValueLayerPrecision")
        var parser = JsonDictionaryParser();
        val obj = parser.parse(((o as JsonDictionaryValue).value as String)) as JsonDictionaryObject;
        val precision = (obj["precision"] as JsonDictionaryValue).value as Int;
        if (args.series is IgaValueLayer) {
            val layer = args.series as IgaValueLayer
            layer.yAxisAnnotationInterpolatedValuePrecision = precision
        }
    }
    //end eventHandler

}