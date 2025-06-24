//begin imports
import java.util.*
//end imports

class FormatDateLabelAsDate {

    //begin eventHandler
    //Kotlin: Any?___String?
    fun formatDateLabelAsDate(sender: Any?, item: Any?): String? {
        val calendar: Calendar = when (item) {
            is Calendar -> item

            is Date -> {
                Calendar.getInstance().apply { time = item }
            }

            is Map<*, *> -> {
                val dateValue = item["Date"]
                if (dateValue is Date) {
                    Calendar.getInstance().apply { time = dateValue }
                }
                else if (dateValue is Calendar) {
                    dateValue as Calendar
                } else {
                    return item.toString()
                }
            }

            is Double -> {
                try {
                    val millis = item.toLong()
                    Calendar.getInstance().apply { timeInMillis = millis }
                } catch (e: Exception) {
                    return item.toString()
                }
            }

            else -> {
                try {
                    val clss = item!!.javaClass;
                    val dateProp = clss.methods.firstOrNull { it.name == "getDate" }
                    dateProp?.isAccessible = true
                    val value = dateProp?.invoke(item)
                    if (value is Date) {
                        Calendar.getInstance().apply { time = value }
                    } else if (value is Calendar) {
                        value as Calendar
                    } else {
                        return item.toString()
                    }
                } catch (e: Exception) {
                    return item.toString()
                }
            }
        }

        return String.format(
            "%04d-%02d-%02d",
            calendar.get(Calendar.YEAR),
            calendar.get(Calendar.MONTH) + 1,
            calendar.get(Calendar.DAY_OF_MONTH)
        )
    }
    //end eventHandler
}
