//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class RadialGaugeAnimateToGauge3
{
    //begin eventHandler
    public void RadialGaugeAnimateToGauge3(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<IgbRadialGauge>("content");
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
        gauge.ScaleBrush = "#0b8fed";
        gauge.ScaleOversweepShape = RadialGaugeScaleOversweepShape.Auto;
        gauge.ScaleSweepDirection = SweepDirection.Clockwise;
        gauge.ScaleEndExtent = 0.825;
        gauge.ScaleStartExtent = 0.775;

        gauge.MinorTickStartExtent = 0.7;
        gauge.MinorTickEndExtent = 0.75;
        gauge.TickStartExtent = 0.675;
        gauge.TickEndExtent = 0.75;

        gauge.BackingShape = RadialGaugeBackingShape.Fitted;
        gauge.BackingBrush = "#fcfcfc";
        gauge.BackingOutline = "#d6d6d6";
        gauge.BackingOversweep = 5;
        gauge.BackingCornerRadius = 10;
        gauge.BackingOuterExtent = 0.9;

        gauge.NeedleShape = RadialGaugeNeedleShape.NeedleWithBulb;
        gauge.NeedlePivotShape = RadialGaugePivotShape.CircleOverlay;
        gauge.NeedleEndExtent = 0.5;
        gauge.NeedlePointFeatureExtent = 0.3;
        gauge.NeedlePivotWidthRatio = 0.2;
        gauge.NeedleBrush = "#9f9fa0";
        gauge.NeedleOutline = "#9f9fa0";
        gauge.NeedlePivotBrush = "#9f9fa0";
        gauge.NeedlePivotOutline = "#9f9fa0";

        gauge.TickBrush = "rgba(51, 51, 51, 1)";
        gauge.MinorTickBrush = "rgba(73, 73, 73, 1)";
        gauge.MinorTickCount = 6;

        gauge.Ranges.Clear();
    }
    //end eventHandler
}
