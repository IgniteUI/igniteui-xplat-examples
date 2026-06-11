//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class LinearGaugeAnimateToGauge3
{
    //begin eventHandler
    public void LinearGaugeAnimateToGauge3(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<IgbLinearGauge>("content");
        if (gauge == null) return;

        gauge.TransitionDuration = 1000;
        gauge.MinimumValue = 0;
        gauge.MaximumValue = 100;
        gauge.Value = 50;
        gauge.Interval = 10;
        gauge.LabelInterval = 10;
        gauge.LabelExtent = 0.0;

        gauge.IsNeedleDraggingEnabled = true;
        gauge.NeedleShape = LinearGraphNeedleShape.Needle;
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
        gauge.Ranges.Add(new IgbLinearGraphRange { StartValue = 0,  EndValue = 30,  Brush = "#9FB328", Outline = "#9FB328", InnerStartExtent = 0.075, InnerEndExtent = 0.075, OuterStartExtent = 0.95, OuterEndExtent = 0.95 });
        gauge.Ranges.Add(new IgbLinearGraphRange { StartValue = 30, EndValue = 70,  Brush = "#438C47", Outline = "#438C47", InnerStartExtent = 0.075, InnerEndExtent = 0.075, OuterStartExtent = 0.95, OuterEndExtent = 0.95 });
        gauge.Ranges.Add(new IgbLinearGraphRange { StartValue = 70, EndValue = 100, Brush = "#3F51B5", Outline = "#3F51B5", InnerStartExtent = 0.075, InnerEndExtent = 0.075, OuterStartExtent = 0.95, OuterEndExtent = 0.95 });
    }
    //end eventHandler
}
