//begin imports
import com.infragistics.mobile.controls.IgaCalloutLabelUpdatingEventArgs
//end imports

public class TestsUpdateCalloutLabelV
{
    //begin eventHandler
    public fun testsUpdateCalloutLabelV(sender: Any?, args: IgaCalloutLabelUpdatingEventArgs)
    {    
        val item = args.item
        args.label = valueOf(item, "Label").toString() + "-V-" + valueOf(item, "Value").toString();
    }

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