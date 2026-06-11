//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class RadialGaugeAnimateToGauge2
{
    //begin eventHandler
    public void RadialGaugeAnimateToGauge2(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<IgbRadialGauge>("content");
        if (gauge == null) return;

        gauge.TransitionDuration = 1000;
        gauge.MinimumValue = 100;
        gauge.MaximumValue = 200;
        gauge.Value = 125;

        gauge.ScaleStartAngle = 180;
        gauge.ScaleEndAngle = 0;
        gauge.ScaleBrush = "transparent";
        gauge.ScaleSweepDirection = SweepDirection.Clockwise;

        gauge.BackingOutline = "white";
        gauge.BackingBrush = "white";
        gauge.BackingShape = RadialGaugeBackingShape.Fitted;

        gauge.NeedleEndExtent = 0.8;
        gauge.NeedleShape = RadialGaugeNeedleShape.Triangle;
        gauge.NeedlePivotShape = RadialGaugePivotShape.Circle;
        gauge.NeedlePivotWidthRatio = 0.1;
        gauge.NeedleBrush = "#79797a";
        gauge.NeedleOutline = "#79797a";

        gauge.TickBrush = "transparent";
        gauge.MinorTickBrush = "transparent";

        gauge.LabelInterval = 50;
        gauge.LabelExtent = 0.935;
        gauge.Font = "13px Verdana,Arial";

        gauge.RangeBrushes = "#32f845, #bf32f8";
        gauge.RangeOutlines = "#32f845, #bf32f8";
        gauge.Ranges.Clear();
        gauge.Ranges.Add(new IgbRadialGaugeRange { StartValue = 100, EndValue = 150, InnerStartExtent = 0.3, InnerEndExtent = 0.3, OuterStartExtent = 0.9, OuterEndExtent = 0.9 });
        gauge.Ranges.Add(new IgbRadialGaugeRange { StartValue = 150, EndValue = 200, InnerStartExtent = 0.3, InnerEndExtent = 0.3, OuterStartExtent = 0.9, OuterEndExtent = 0.9 });
    }
    //end eventHandler
}
