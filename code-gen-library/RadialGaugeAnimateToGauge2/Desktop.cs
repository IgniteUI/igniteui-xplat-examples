//begin imports
using System.Windows.Media;
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Gauges;
//end imports

public class RadialGaugeAnimateToGauge2
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void RadialGaugeAnimateToGauge2(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<XamRadialGauge>("content");
        if (gauge == null) return;

        gauge.TransitionDuration = 1000;
        gauge.MinimumValue = 100;
        gauge.MaximumValue = 200;
        gauge.Value = 125;

        gauge.ScaleStartAngle = 180;
        gauge.ScaleEndAngle = 0;
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

        gauge.LabelInterval = 50;
        gauge.LabelExtent = 0.935;
        gauge.Font = "13px Verdana,Arial";

        gauge.Ranges.Clear();
        gauge.Ranges.Add(new RadialGaugeRange { StartValue = 100, EndValue = 150, Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0x32, 0xF8, 0x45)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0x32, 0xF8, 0x45)), InnerStartExtent = 0.3, InnerEndExtent = 0.3, OuterStartExtent = 0.9, OuterEndExtent = 0.9 });
        gauge.Ranges.Add(new RadialGaugeRange { StartValue = 150, EndValue = 200, Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0xBF, 0x32, 0xF8)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0xBF, 0x32, 0xF8)), InnerStartExtent = 0.3, InnerEndExtent = 0.3, OuterStartExtent = 0.9, OuterEndExtent = 0.9 });
    }
    //end eventHandler
}
