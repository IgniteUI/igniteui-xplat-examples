//begin imports
import android.view.View
import kotlin.math.roundToInt
import com.infragistics.mobile.controls.IgaRadialGauge
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs
//end imports

public class RadialGaugeSetSize {
    //begin eventHandler
    public fun radialGaugeSetSize(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs?) {
        val gauge = CodeGenHelper.getDescription<IgaRadialGauge>("content") ?: return
        val allocation = gauge.parent as? View ?: return
        val fraction = (args!!.newValue as Number).toDouble() / 100
        val layout = gauge.layoutParams
        // Resolve against the parent allocation, not the previous percentage-sized gauge.
        layout.width = ((allocation.width - allocation.paddingLeft - allocation.paddingRight) * fraction).roundToInt()
        layout.height = ((allocation.height - allocation.paddingTop - allocation.paddingBottom) * fraction).roundToInt()
        gauge.layoutParams = layout
    }
    //end eventHandler
}
