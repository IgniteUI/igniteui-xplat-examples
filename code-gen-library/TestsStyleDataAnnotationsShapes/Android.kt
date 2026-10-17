//begin imports
import com.infragistics.mobile.controls.IgaDataAnnotationItem
import com.infragistics.mobile.controls.JsonDictionaryArray
import com.infragistics.mobile.controls.JsonDictionaryObject
import com.infragistics.mobile.controls.JsonDictionaryValue
import com.infragistics.mobile.controls.JsonDictionaryParser
import com.infragistics.mobile.controls.IgaBrush
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

class TestsStyleDataAnnotationsShapes {
    //begin eventHandler
    //Kotlin: IgaDataAnnotationItem
    fun testsStyleDataAnnotationsShapes(sender: Any?, args: IgaDataAnnotationItem) {
        val value = CodeGenHelper.findByName<Any>("DataAnnotationShapeStylingOptions") ?: return
        val array = JsonDictionaryParser().parse((value as JsonDictionaryValue).value as String) as JsonDictionaryArray
        for (entry in array.items.orEmpty()) {
            val item = entry as JsonDictionaryObject
            val index = numberValue(item["Index"]) ?: continue
            if (index == -1.0 || index == args.dataIndex.toDouble()) {
                stringValue(item["Brush"])?.takeIf { it.isNotEmpty() }?.let {
                    getBrush(it)?.let { brush -> args.shapeBrush = brush }
                }
                stringValue(item["OutlineBrush"])?.takeIf { it.isNotEmpty() }?.let {
                    getBrush(it)?.let { brush -> args.shapeOutline = brush }
                }
                numberValue(item["Thickness"])?.takeUnless { it.isNaN() }?.let {
                    args.shapeThickness = it
                }
                return
            }
        }
    }

    // Option colors are CSS names such as Orange, which Color.parseColor does not know.
    private fun getBrush(color: String): IgaBrush? = IgaBrush.fromString(color)

    private fun stringValue(value: Any?): String? = (value as? JsonDictionaryValue)?.value as? String

    private fun numberValue(value: Any?): Double? = when (val raw = (value as? JsonDictionaryValue)?.value) {
        is Number -> raw.toDouble()
        is String -> raw.toDoubleOrNull()
        else -> null
    }
    //end eventHandler
}
