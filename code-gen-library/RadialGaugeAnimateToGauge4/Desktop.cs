//begin imports
using System.Windows.Media;
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Gauges;
//end imports

public class RadialGaugeAnimateToGauge4
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void RadialGaugeAnimateToGauge4(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<XamRadialGauge>("content");
        if (gauge == null) return;

        gauge.TransitionDuration = 1000;
        gauge.MinimumValue = 0;
        gauge.MaximumValue = 50;
        gauge.Value = 25;
        gauge.Interval = 5;

        gauge.LabelInterval = 5;
        gauge.LabelExtent = 0.71;
        gauge.Font = "15px Verdana,Arial";

        gauge.IsNeedleDraggingEnabled = true;
        gauge.NeedleEndExtent = 0.5;
        gauge.NeedleShape = RadialGaugeNeedleShape.Triangle;
        gauge.NeedleEndWidthRatio = 0.03;
        gauge.NeedleStartWidthRatio = 0.05;
        gauge.NeedlePivotShape = RadialGaugePivotShape.CircleOverlay;
        gauge.NeedlePivotWidthRatio = 0.15;
        gauge.NeedleBaseFeatureWidthRatio = 0.15;
        gauge.NeedleBrush = new SolidColorBrush(Color.FromArgb(0xFF, 0x79, 0x79, 0x7A));
        gauge.NeedleOutline = new SolidColorBrush(Color.FromArgb(0xFF, 0x79, 0x79, 0x7A));
        gauge.NeedlePivotBrush = new SolidColorBrush(Color.FromArgb(0xFF, 0x79, 0x79, 0x7A));
        gauge.NeedlePivotOutline = new SolidColorBrush(Color.FromArgb(0xFF, 0x79, 0x79, 0x7A));

        gauge.MinorTickCount = 4;
        gauge.MinorTickEndExtent = 0.625;
        gauge.MinorTickStartExtent = 0.6;
        gauge.MinorTickStrokeThickness = 1;
        gauge.MinorTickBrush = new SolidColorBrush(Color.FromArgb(0xFF, 0x79, 0x79, 0x7A));
        gauge.TickStartExtent = 0.6;
        gauge.TickEndExtent = 0.65;
        gauge.TickStrokeThickness = 2;
        gauge.TickBrush = new SolidColorBrush(Color.FromArgb(0xFF, 0x79, 0x79, 0x7A));

        gauge.ScaleStartAngle = 120;
        gauge.ScaleEndAngle = 60;
        gauge.ScaleBrush = new SolidColorBrush(Color.FromArgb(0xFF, 0xD6, 0xD6, 0xD6));
        gauge.ScaleOversweepShape = RadialGaugeScaleOversweepShape.Fitted;
        gauge.ScaleSweepDirection = SweepDirection.Clockwise;
        gauge.ScaleEndExtent = 0.57;
        gauge.ScaleStartExtent = 0.5;

        gauge.BackingBrush = new SolidColorBrush(Color.FromArgb(0xFF, 0xFC, 0xFC, 0xFC));
        gauge.BackingOutline = new SolidColorBrush(Color.FromArgb(0xFF, 0xD6, 0xD6, 0xD6));
        gauge.BackingStrokeThickness = 5;
        gauge.BackingShape = RadialGaugeBackingShape.Circular;

        gauge.Ranges.Clear();
        gauge.Ranges.Add(new RadialGaugeRange { StartValue = 5,  EndValue = 15, Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0xF8, 0x62, 0x32)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0xF8, 0x62, 0x32)), InnerStartExtent = 0.5, InnerEndExtent = 0.5, OuterStartExtent = 0.57, OuterEndExtent = 0.57 });
        gauge.Ranges.Add(new RadialGaugeRange { StartValue = 15, EndValue = 35, Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0xDC, 0x3F, 0x76)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0xDC, 0x3F, 0x76)), InnerStartExtent = 0.5, InnerEndExtent = 0.5, OuterStartExtent = 0.57, OuterEndExtent = 0.57 });
        gauge.Ranges.Add(new RadialGaugeRange { StartValue = 35, EndValue = 45, Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0x74, 0x46, 0xB9)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0x74, 0x46, 0xB9)), InnerStartExtent = 0.5, InnerEndExtent = 0.5, OuterStartExtent = 0.57, OuterEndExtent = 0.57 });
    }
    //end eventHandler
}
