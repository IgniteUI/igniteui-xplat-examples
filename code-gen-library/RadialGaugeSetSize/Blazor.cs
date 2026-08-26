//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class RadialGaugeSetSize
{
    //begin eventHandler
    public void RadialGaugeSetSize(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<IgbRadialGauge>("content");
        if (gauge == null) return;
        var size = args.NewValue.ToString() + "%";
        gauge.Width = size;
        gauge.Height = size;
    }
    //end eventHandler
}
