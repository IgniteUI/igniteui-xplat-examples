//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class RadialGaugeAnimateToGauge1
{
    //begin eventHandler
    public void RadialGaugeAnimateToGauge1(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<IgbRadialGauge>("content");
        if (gauge == null) return;

        gauge.TransitionDuration = 1000;
        gauge.MinimumValue = 0;
        gauge.MaximumValue = 10;
        gauge.Value = 7.5;

        gauge.ScaleStartAngle = 180;
        gauge.ScaleEndAngle = 270;
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

        gauge.LabelInterval = 5;
        gauge.LabelExtent = 0.915;
        gauge.Font = "15px Verdana,Arial";

        gauge.RangeBrushes = "#a4bd29, #F86232";
        gauge.RangeOutlines = "#a4bd29, #F86232";
        gauge.Ranges.Clear();
        gauge.Ranges.Add(new IgbRadialGaugeRange { StartValue = 0, EndValue = 5,  InnerStartExtent = 0.3, InnerEndExtent = 0.3, OuterStartExtent = 0.9, OuterEndExtent = 0.9 });
        gauge.Ranges.Add(new IgbRadialGaugeRange { StartValue = 5, EndValue = 10, InnerStartExtent = 0.3, InnerEndExtent = 0.3, OuterStartExtent = 0.9, OuterEndExtent = 0.9 });
    }
    //end eventHandler
}
