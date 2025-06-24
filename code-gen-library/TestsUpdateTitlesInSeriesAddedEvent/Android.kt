//begin imports
import com.infragistics.mobile.controls.IgaChartSeriesEventArgs
import com.infragistics.mobile.controls.JsonDictionaryObject
import com.infragistics.mobile.controls.JsonDictionaryValue
import com.infragistics.mobile.controls.JsonDictionaryArray
import com.infragistics.mobile.controls.JsonDictionaryParser
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class TestsUpdateTitlesInSeriesAddedEvent {

    //begin eventHandler
    var titleIndex = 0
    public fun testsUpdateTitlesInSeriesAddedEvent(sender: Any?, args: IgaChartSeriesEventArgs) {
        val o = CodeGenHelper.findByName<Any>("SeriesAddedTitles")
        var parser = JsonDictionaryParser();
        val obj = parser.parse(((o as JsonDictionaryValue).value as String)) as JsonDictionaryObject;
        
        val updateAnnotations = (obj["includeAnnotations"] as JsonDictionaryValue).value as Boolean;
        val seriesTitles = obj["names"] as JsonDictionaryArray;
        val names = mutableListOf<String>()
        for (i in 0 until seriesTitles.items!!.size) {
            names.add((seriesTitles.items!![i] as JsonDictionaryValue).value as String);
        }

        if (args.series!!.isAnnotationLayer && !updateAnnotations) return
        if (titleIndex >= names.size) titleIndex = 0
        if (names.contains(args.series!!.title)) return
        args.series!!.title = names[titleIndex++]
    }
    //end eventHandler

}