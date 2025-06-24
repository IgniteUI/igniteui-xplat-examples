//begin imports
import com.infragistics.mobile.controls.IgaDataLegend
import com.infragistics.mobile.controls.NumberFormatSpecifier
import com.infragistics.mobile.controls.FormatSpecifier
import com.infragistics.mobile.controls.JsonDictionaryObject
import com.infragistics.mobile.controls.JsonDictionaryValue
import com.infragistics.mobile.controls.JsonDictionaryParser
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class TestsAddDataLegendValueFormatSpecifier {

    //begin eventHandler
    //Kotlin: Action
    public fun testsAddDataLegendValueFormatSpecifier() {
        val legend = CodeGenHelper.getDescription<IgaDataLegend>("secondary")!!
        val jVal = CodeGenHelper.findByName<Any>("DataLegendValueFormatSpecifier")!!
        var parser = JsonDictionaryParser();
        val formatterInfo = parser.parse(((jVal as JsonDictionaryValue).value as String)) as JsonDictionaryObject;
        val numSpec = NumberFormatSpecifier()

        for (key in formatterInfo.getKeys()!!) {
            when (key) {
                "MaximumFractionDigits" -> numSpec.maximumFractionDigits = (formatterInfo[key] as JsonDictionaryValue).value as Int;
                "MinimumFractionDigits" -> numSpec.minimumFractionDigits = (formatterInfo[key] as JsonDictionaryValue).value as Int;
                "MinimumIntegerDigits" -> numSpec.minimumIntegerDigits = (formatterInfo[key] as JsonDictionaryValue).value as Int;
                "Locale" -> numSpec.locale = (formatterInfo[key] as JsonDictionaryValue).value as String;
                "UseGrouping" -> numSpec.useGrouping = (formatterInfo[key] as JsonDictionaryValue).value as Boolean;
                "Style" -> numSpec.style = (formatterInfo[key] as JsonDictionaryValue).value as String;
            }
        }

        legend.valueFormatSpecifiers = arrayOf<Any?>(numSpec)
    }
    //end eventHandler

}
