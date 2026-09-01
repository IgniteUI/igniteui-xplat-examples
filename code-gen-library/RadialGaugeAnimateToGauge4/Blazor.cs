//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class RadialGaugeAnimateToGauge4
{
    //begin eventHandler
    public void RadialGaugeAnimateToGauge4(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<IgbRadialGauge>("content");
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
        gauge.NeedleBrush = "#79797a";
        gauge.NeedleOutline = "#79797a";
        gauge.NeedlePivotBrush = "#79797a";
        gauge.NeedlePivotOutline = "#79797a";

        gauge.MinorTickCount = 4;
        gauge.MinorTickEndExtent = 0.625;
        gauge.MinorTickStartExtent = 0.6;
        gauge.MinorTickStrokeThickness = 1;
        gauge.MinorTickBrush = "#79797a";
        gauge.TickStartExtent = 0.6;
        gauge.TickEndExtent = 0.65;
        gauge.TickStrokeThickness = 2;
        gauge.TickBrush = "#79797a";

        gauge.ScaleStartAngle = 120;
        gauge.ScaleEndAngle = 60;
        gauge.ScaleBrush = "#d6d6d6";
        gauge.ScaleOversweepShape = RadialGaugeScaleOversweepShape.Fitted;
        gauge.ScaleSweepDirection = SweepDirection.Clockwise;
        gauge.ScaleEndExtent = 0.57;
        gauge.ScaleStartExtent = 0.5;

        gauge.BackingBrush = "#fcfcfc";
        gauge.BackingOutline = "#d6d6d6";
        gauge.BackingStrokeThickness = 5;
        gauge.BackingShape = RadialGaugeBackingShape.Circular;

        gauge.RangeBrushes  = "#F86232, #DC3F76, #7446B9";
        gauge.RangeOutlines = "#F86232, #DC3F76, #7446B9";
        gauge.Ranges.Clear();
        gauge.Ranges.Add(new IgbRadialGaugeRange { StartValue = 5,  EndValue = 15, InnerStartExtent = 0.5, InnerEndExtent = 0.5, OuterStartExtent = 0.57, OuterEndExtent = 0.57 });
        gauge.Ranges.Add(new IgbRadialGaugeRange { StartValue = 15, EndValue = 35, InnerStartExtent = 0.5, InnerEndExtent = 0.5, OuterStartExtent = 0.57, OuterEndExtent = 0.57 });
        gauge.Ranges.Add(new IgbRadialGaugeRange { StartValue = 35, EndValue = 45, InnerStartExtent = 0.5, InnerEndExtent = 0.5, OuterStartExtent = 0.57, OuterEndExtent = 0.57 });
    }
    //end eventHandler
}
