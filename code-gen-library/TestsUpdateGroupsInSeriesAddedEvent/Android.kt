//begin imports
import com.infragistics.mobile.controls.IgaChartSeriesEventArgs
import com.infragistics.mobile.controls.JsonDictionaryObject
import com.infragistics.mobile.controls.JsonDictionaryValue
import com.infragistics.mobile.controls.JsonDictionaryArray
import com.infragistics.mobile.controls.JsonDictionaryParser
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class TestsUpdateGroupsInSeriesAddedEvent {

    //begin eventHandler
    var groupIndex = 0
    public fun testsUpdateGroupsInSeriesAddedEvent(sender: Any?, args: IgaChartSeriesEventArgs) {
        val o = CodeGenHelper.findByName<Any>("SeriesAddedGroups")
        var parser = JsonDictionaryParser();
        val obj = parser.parse(((o as JsonDictionaryValue).value as String)) as JsonDictionaryObject;
        val updateAnnotations = (obj["includeAnnotations"] as JsonDictionaryValue).value as Boolean;
        val seriesGroups = obj["names"] as JsonDictionaryArray;
        val groups = mutableListOf<String>()
        for (i in 0 until seriesGroups.items!!.size) {
            groups.add((seriesGroups.items!![i] as JsonDictionaryValue).value as String)
        }

        if (groupIndex >= groups.size) groupIndex = 0
        if (groups.contains(args.series!!.dataLegendGroup)) return
        args.series!!.dataLegendGroup = groups[groupIndex++]
    }
    //end eventHandler

}