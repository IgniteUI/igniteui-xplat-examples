//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class RadialGaugeToggleOpticalScaling
{
    //begin eventHandler
    public void RadialGaugeToggleOpticalScaling(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<IgbRadialGauge>("content");
        if (gauge == null) return;
        gauge.OpticalScalingEnabled = args.NewValue is bool b && b;
    }
    //end eventHandler
}
