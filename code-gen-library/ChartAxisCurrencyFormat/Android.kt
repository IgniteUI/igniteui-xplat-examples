//begin imports
import java.text.NumberFormat
import java.util.Locale
//end imports

public class ChartAxisCurrencyFormat
{
//begin eventHandler
    private var axisCurrencyFormat: NumberFormat? = null
    //Kotlin: Any?___String?
    public fun chartAxisCurrencyFormat(sender: Any?, item: Any?): String? {
        if (axisCurrencyFormat == null) {
            axisCurrencyFormat = java.text.NumberFormat.getCurrencyInstance(Locale.US)
        }
        if (item == null) return null
        if (item is Number) {
            return axisCurrencyFormat?.format(item)
        }
        return null;
    }
//end eventHandler
}

