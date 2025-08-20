//begin imports
import com.infragistics.mobile.controls.IgaDataLegendStylingColumnEventArgs
import com.infragistics.mobile.controls.IgaSolidColorBrush
import android.graphics.Color
//end imports

class TestsDataLegendStyleSeriesColumns2 {

    //begin eventHandler
    fun testsDataLegendStyleSeriesColumns2(sender: Any?, args: IgaDataLegendStylingColumnEventArgs) {
        when (args.seriesTitle) {
            "Financial1", "F1" -> {
                when (args.valueMemberPath) {
                    "Open", "[Open]" -> {
                        args.labelText = "Open"
                        args.labelTextColor = IgaSolidColorBrush(Color.CYAN)
                        args.unitsText = "$"
                        args.unitsTextColor = IgaSolidColorBrush(Color.BLACK)
                        args.valueTextColor = IgaSolidColorBrush(Color.rgb(0, 128, 0))
                    }
                    "Close", "[Close]" -> {
                        args.labelText = "Close"
                        args.labelTextColor = IgaSolidColorBrush(Color.rgb(0, 128, 0))
                        args.unitsText = "$"
                        args.unitsTextColor = IgaSolidColorBrush(Color.RED)
                        args.valueTextColor = IgaSolidColorBrush(Color.CYAN)
                    }
                    "TypicalPrice", "[TypicalPrice]", "TP" -> {
                        args.labelText = "Typical"
                        args.labelTextColor = IgaSolidColorBrush(Color.BLUE)
                        args.unitsText = "$"
                        args.unitsTextColor = IgaSolidColorBrush(Color.rgb(0, 128, 0))
                        args.valueTextColor = IgaSolidColorBrush(Color.BLUE)
                    }
                }
            }
            "Financial2", "F2" -> {
                when (args.valueMemberPath) {
                    "Open", "[Open]" -> {
                        args.labelText = "Open"
                        args.labelTextColor = IgaSolidColorBrush(Color.rgb(0, 128, 0))
                        args.unitsText = "$"
                        args.unitsTextColor = IgaSolidColorBrush(0xFFA52A2A.toInt()) // Brown
                        args.valueTextColor = IgaSolidColorBrush(Color.CYAN)
                    }
                    "Close", "[Close]" -> {
                        args.labelText = "Close"
                        args.labelTextColor = IgaSolidColorBrush(Color.CYAN)
                        args.unitsText = "$"
                        args.unitsTextColor = IgaSolidColorBrush(Color.RED)
                        args.valueTextColor = IgaSolidColorBrush(Color.rgb(0, 128, 0))
                    }
                    "TypicalPrice", "[TypicalPrice]", "TP" -> {
                        args.labelText = "Typical"
                        args.labelTextColor = IgaSolidColorBrush(Color.BLUE)
                        args.unitsText = "$"
                        args.unitsTextColor = IgaSolidColorBrush(Color.rgb(128,0,128)) // Purple
                        args.valueTextColor = IgaSolidColorBrush(Color.rgb(255, 165, 0)) // Orange
                    }
                }
            }
        }
    }
    //end eventHandler

}