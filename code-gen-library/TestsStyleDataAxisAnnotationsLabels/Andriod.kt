//begin imports
import android.graphics.Color
import com.infragistics.mobile.controls.DataAnnotationInfo
import com.infragistics.mobile.controls.IgaBrush
import com.infragistics.mobile.controls.IgaSolidColorBrush
import com.infragistics.mobile.controls.JsonDictionaryArray
import com.infragistics.mobile.controls.JsonDictionaryObject
import com.infragistics.mobile.controls.JsonDictionaryValue
import com.infragistics.mobile.controls.JsonDictionaryParser
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

public class TestsStyleDataAxisAnnotationsLabels {

    //begin eventHandler
    public fun testsStyleDataAxisAnnotationsLabels(sender: Any?, args: DataAnnotationInfo) {
        val value = CodeGenHelper.findByName<Any>("AxisAnnotationStlingOtions") ?: return
        val parser = JsonDictionaryParser()
        val array = parser.parse(((value as JsonDictionaryValue).value as String)) as JsonDictionaryArray

        for (i in 0 until array.items!!.size) {
            val item = array.items!![i] as JsonDictionaryObject
            val index = numberValue(item["Index"]) ?: -1.0
            if (index == -1.0 || index == args.dataIndex) {
                styleShape(item, args)
                return
            }
        }
    }

    private fun styleShape(options: JsonDictionaryObject, args: DataAnnotationInfo) {
        val background = stringValue(options["Background"])
        if (!background.isNullOrEmpty()) {
            args.background = getBrush(background)
        }

        val borderColor = stringValue(options["BorderColor"])
        if (!borderColor.isNullOrEmpty()) {
            args.borderColor = getBrush(borderColor)
        }

        val textColor = stringValue(options["TextColor"])
        if (!textColor.isNullOrEmpty()) {
            args.textColor = getBrush(textColor)
        }

        val borderThickness = stringValue(options["BorderThickness"])
        if (borderThickness != "NaN") {
            numberValue(options["BorderThickness"])?.let { args.borderThickness = it }
        }

        val borderRadius = stringValue(options["BorderRadius"])
        if (borderRadius != "NaN") {
            numberValue(options["BorderRadius"])?.let { args.borderRadius = it }
        }

        val xAxisLabel = stringValue(options["XAxisLabel"])
        if (!xAxisLabel.isNullOrEmpty()) {
            args.xAxisLabel = xAxisLabel
        }

        val yAxisLabel = stringValue(options["YAxisLabel"])
        if (!yAxisLabel.isNullOrEmpty()) {
            args.yAxisLabel = yAxisLabel
        }
    }

    private fun getBrush(color: String): IgaBrush? {
        if (color.isEmpty()) {
            return null
        }

        return IgaSolidColorBrush(Color.parseColor(color))
    }

    private fun stringValue(value: Any?): String? {
        return when (value) {
            is JsonDictionaryValue -> when (val actualValue = value.value) {
                is String -> actualValue
                is Number -> actualValue.toString()
                else -> null
            }

            else -> null
        }
    }

    private fun numberValue(value: Any?): Double? {
        return when (value) {
            is JsonDictionaryValue -> when (val actualValue = value.value) {
                is Number -> actualValue.toDouble()
                is String -> actualValue.toDoubleOrNull()
                else -> null
            }

            else -> null
        }
    }
    //end eventHandler

}
