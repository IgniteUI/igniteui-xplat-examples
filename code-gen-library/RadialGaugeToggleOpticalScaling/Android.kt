//begin imports
import com.infragistics.mobile.controls.IgaRadialGauge
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs
//end imports

public class RadialGaugeToggleOpticalScaling {
    //begin eventHandler
    public fun radialGaugeToggleOpticalScaling(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs?) {
        val gauge = CodeGenHelper.getDescription<IgaRadialGauge>("content") ?: return
        gauge.opticalScalingEnabled = args?.newValue == true
    }
    //end eventHandler
}
