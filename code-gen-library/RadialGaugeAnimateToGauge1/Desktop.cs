//begin imports
using System.Windows.Media;
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Gauges;
//end imports

public class RadialGaugeAnimateToGauge1
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void RadialGaugeAnimateToGauge1(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<XamRadialGauge>("content");
        if (gauge == null) return;

        gauge.TransitionDuration = 1000;
        gauge.MinimumValue = 0;
        gauge.MaximumValue = 10;
        gauge.Value = 7.5;

        gauge.ScaleStartAngle = 180;
        gauge.ScaleEndAngle = 270;
        gauge.ScaleBrush = new SolidColorBrush(Colors.Transparent);
        gauge.ScaleSweepDirection = SweepDirection.Clockwise;

        gauge.BackingOutline = new SolidColorBrush(Colors.White);
        gauge.BackingBrush = new SolidColorBrush(Colors.White);
        gauge.BackingShape = RadialGaugeBackingShape.Fitted;

        gauge.NeedleEndExtent = 0.8;
        gauge.NeedleShape = RadialGaugeNeedleShape.Triangle;
        gauge.NeedlePivotShape = RadialGaugePivotShape.Circle;
        gauge.NeedlePivotWidthRatio = 0.1;
        gauge.NeedleBrush = new SolidColorBrush(Color.FromArgb(0xFF, 0x79, 0x79, 0x7A));
        gauge.NeedleOutline = new SolidColorBrush(Color.FromArgb(0xFF, 0x79, 0x79, 0x7A));

        gauge.TickBrush = new SolidColorBrush(Colors.Transparent);
        gauge.MinorTickBrush = new SolidColorBrush(Colors.Transparent);

        gauge.LabelInterval = 5;
        gauge.LabelExtent = 0.915;
        gauge.Font = "15px Verdana,Arial";

        gauge.Ranges.Clear();
        gauge.Ranges.Add(new RadialGaugeRange { StartValue = 0, EndValue = 5,  Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0xA4, 0xBD, 0x29)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0xA4, 0xBD, 0x29)), InnerStartExtent = 0.3, InnerEndExtent = 0.3, OuterStartExtent = 0.9, OuterEndExtent = 0.9 });
        gauge.Ranges.Add(new RadialGaugeRange { StartValue = 5, EndValue = 10, Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0xF8, 0x62, 0x32)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0xF8, 0x62, 0x32)), InnerStartExtent = 0.3, InnerEndExtent = 0.3, OuterStartExtent = 0.9, OuterEndExtent = 0.9 });
    }
    //end eventHandler
}
