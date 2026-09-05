//begin imports
using System;
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Gauges;
//end imports

public class RadialGaugeSetSize
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void RadialGaugeSetSize(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<XamRadialGauge>("content");
        if (gauge == null) return;
        var size = Convert.ToDouble(args.NewValue) * 5;
        gauge.Width = size;
        gauge.Height = size;
    }
    //end eventHandler
}
