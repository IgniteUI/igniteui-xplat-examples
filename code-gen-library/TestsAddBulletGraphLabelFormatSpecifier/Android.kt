//begin imports
import com.infragistics.mobile.controls.IgaBulletGraph
import com.infragistics.mobile.controls.NumberFormatSpecifier
import com.infragistics.mobile.controls.FormatSpecifier
import com.infragistics.mobile.controls.JsonDictionaryObject
import com.infragistics.mobile.controls.JsonDictionaryValue
import com.infragistics.mobile.controls.JsonDictionaryParser
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class TestsAddBulletGraphLabelFormatSpecifier {

    //begin eventHandler
    //Kotlin: Action
    public fun testsAddBulletGraphLabelFormatSpecifier() {
        val gauge = CodeGenHelper.getDescription<IgaBulletGraph>("content")!!
        val jVal = CodeGenHelper.findByName<Any>("GaugeLabelFormatSpecifier")!!
        var parser = JsonDictionaryParser();
        val formatterInfo = parser.parse(((jVal as JsonDictionaryValue).value as String)) as JsonDictionaryObject;
        val numSpec = NumberFormatSpecifier()

        for (key in formatterInfo.getKeys()!!) {
            when (key) {
                "MaximumFractionDigits" -> numSpec.maximumFractionDigits = ((formatterInfo[key] as JsonDictionaryValue).value as Double).toInt();
                "MinimumFractionDigits" -> numSpec.minimumFractionDigits = ((formatterInfo[key] as JsonDictionaryValue).value as Double).toInt();
                "MinimumIntegerDigits" -> numSpec.minimumIntegerDigits = ((formatterInfo[key] as JsonDictionaryValue).value as Double).toInt();
                "Locale" -> numSpec.locale = (formatterInfo[key] as JsonDictionaryValue).value as String?;
                "UseGrouping" -> numSpec.useGrouping = (formatterInfo[key] as JsonDictionaryValue).value as Boolean;
                "Style" -> numSpec.style = (formatterInfo[key] as JsonDictionaryValue).value as String?;
            }
        }

        gauge.labelFormatSpecifiers = arrayOf<Any?>(numSpec)
    }
    //end eventHandler

}
