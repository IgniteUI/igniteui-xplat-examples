//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Gauges;
//end imports

public class RadialGaugeToggleOpticalScaling
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void RadialGaugeToggleOpticalScaling(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<XamRadialGauge>("content");
        if (gauge == null) return;
        gauge.OpticalScalingEnabled = args.NewValue is bool b && b;
    }
    //end eventHandler
}
