//begin imports
using System.Windows.Media;
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Gauges;
//end imports

public class RadialGaugeAnimateToGauge3
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void RadialGaugeAnimateToGauge3(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<XamRadialGauge>("content");
        if (gauge == null) return;

        gauge.TransitionDuration = 1000;
        gauge.MinimumValue = 0;
        gauge.MaximumValue = 80;
        gauge.Value = 10;
        gauge.Interval = 10;

        gauge.LabelExtent = 0.6;
        gauge.LabelInterval = 10;
        gauge.Font = "15px Verdana,Arial";

        gauge.ScaleStartAngle = 135;
        gauge.ScaleEndAngle = 45;
        gauge.ScaleBrush = new SolidColorBrush(Color.FromArgb(0xFF, 0x0B, 0x8F, 0xED));
        gauge.ScaleOversweepShape = RadialGaugeScaleOversweepShape.Auto;
        gauge.ScaleSweepDirection = SweepDirection.Clockwise;
        gauge.ScaleEndExtent = 0.825;
        gauge.ScaleStartExtent = 0.775;

        gauge.MinorTickStartExtent = 0.7;
        gauge.MinorTickEndExtent = 0.75;
        gauge.TickStartExtent = 0.675;
        gauge.TickEndExtent = 0.75;

        gauge.BackingShape = RadialGaugeBackingShape.Fitted;
        gauge.BackingBrush = new SolidColorBrush(Color.FromArgb(0xFF, 0xFC, 0xFC, 0xFC));
        gauge.BackingOutline = new SolidColorBrush(Color.FromArgb(0xFF, 0xD6, 0xD6, 0xD6));
        gauge.BackingOversweep = 5;
        gauge.BackingCornerRadius = 10;
        gauge.BackingOuterExtent = 0.9;

        gauge.NeedleShape = RadialGaugeNeedleShape.NeedleWithBulb;
        gauge.NeedlePivotShape = RadialGaugePivotShape.CircleOverlay;
        gauge.NeedleEndExtent = 0.5;
        gauge.NeedlePointFeatureExtent = 0.3;
        gauge.NeedlePivotWidthRatio = 0.2;
        gauge.NeedleBrush = new SolidColorBrush(Color.FromArgb(0xFF, 0x9F, 0x9F, 0xA0));
        gauge.NeedleOutline = new SolidColorBrush(Color.FromArgb(0xFF, 0x9F, 0x9F, 0xA0));
        gauge.NeedlePivotBrush = new SolidColorBrush(Color.FromArgb(0xFF, 0x9F, 0x9F, 0xA0));
        gauge.NeedlePivotOutline = new SolidColorBrush(Color.FromArgb(0xFF, 0x9F, 0x9F, 0xA0));

        gauge.TickBrush = new SolidColorBrush(Color.FromArgb(0xFF, 0x33, 0x33, 0x33));
        gauge.MinorTickBrush = new SolidColorBrush(Color.FromArgb(0xFF, 0x49, 0x49, 0x49));
        gauge.MinorTickCount = 6;

        gauge.Ranges.Clear();
    }
    //end eventHandler
}
