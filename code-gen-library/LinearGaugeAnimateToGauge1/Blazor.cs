//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class LinearGaugeAnimateToGauge1
{
    //begin eventHandler
    public void LinearGaugeAnimateToGauge1(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<IgbLinearGauge>("content");
        if (gauge == null) return;

        gauge.TransitionDuration = 1000;
        gauge.MinimumValue = 0;
        gauge.MaximumValue = 80;
        gauge.Value = 60;
        gauge.Interval = 20;
        gauge.LabelInterval = 20;
        gauge.LabelExtent = 0.0;

        gauge.IsNeedleDraggingEnabled = true;
        gauge.NeedleShape = LinearGraphNeedleShape.Trapezoid;
        gauge.NeedleBrush = "#79797a";
        gauge.NeedleOutline = "#ffffffff";
        gauge.NeedleStrokeThickness = 1;
        gauge.NeedleOuterExtent = 0.9;
        gauge.NeedleInnerExtent = 0.3;

        gauge.MinorTickCount = 5;
        gauge.MinorTickEndExtent = 0.10;
        gauge.MinorTickStartExtent = 0.20;
        gauge.MinorTickStrokeThickness = 1;
        gauge.TickStartExtent = 0.25;
        gauge.TickEndExtent = 0.05;
        gauge.TickStrokeThickness = 2;

        gauge.ScaleStrokeThickness = 0;
        gauge.ScaleBrush = "#ffffff";
        gauge.ScaleOutline = "#dbdbdb";
        gauge.ScaleInnerExtent = 0.075;
        gauge.ScaleOuterExtent = 0.85;
        gauge.ScaleStartExtent = 0.05;
        gauge.ScaleEndExtent = 0.95;

        gauge.BackingBrush = "#ffffff";
        gauge.BackingOutline = "#d1d1d1";
        gauge.BackingStrokeThickness = 0;

        gauge.Ranges.Clear();
        gauge.Ranges.Add(new IgbLinearGraphRange { StartValue = 0,  EndValue = 40, Brush = "#A4BD29", Outline = "#A4BD29", InnerStartExtent = 0.075, InnerEndExtent = 0.075, OuterStartExtent = 0.65, OuterEndExtent = 0.65 });
        gauge.Ranges.Add(new IgbLinearGraphRange { StartValue = 40, EndValue = 80, Brush = "#F86232", Outline = "#F86232", InnerStartExtent = 0.075, InnerEndExtent = 0.075, OuterStartExtent = 0.65, OuterEndExtent = 0.65 });
    }
    //end eventHandler
}
