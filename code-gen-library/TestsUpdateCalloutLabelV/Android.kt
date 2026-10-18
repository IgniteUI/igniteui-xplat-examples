//begin imports
import com.infragistics.mobile.controls.IgaCalloutLabelUpdatingEventArgs
//end imports

public class TestsUpdateCalloutLabelV
{
    //begin eventHandler
    public fun testsUpdateCalloutLabelV(sender: Any?, args: IgaCalloutLabelUpdatingEventArgs)
    {    
        val item = args.item
        args.label = valueOf(item, "Label").toString() + "-V-" + format(valueOf(item, "Value"));
    }

    // JSON numbers arrive as Double; write whole numbers as integers, as the other
    // platforms do, rather than Kotlin's "20.0".
    private fun format(value: Any?): String =
        if (value is Double && !value.isInfinite() && value == Math.rint(value)) value.toLong().toString()
        else value.toString()

    // Rows built from JSON test data are DictionaryDataItems, not Maps; they expose an
    // indexed get(String) instead.
    private fun valueOf(item: Any?, name: String): Any? = when (item) {
        is Map<*, *> -> item[name]
        null -> null
        else -> item.javaClass.methods.firstOrNull {
            it.name == "get" && it.parameterTypes.size == 1 && it.parameterTypes[0].isAssignableFrom(String::class.java)
        }?.invoke(item, name)
    }
    //end eventHandler
}