//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class BulletGraphAnimateToGauge3
{
    //begin eventHandler
    public void BulletGraphAnimateToGauge3(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<IgbBulletGraph>("content");
        if (gauge == null) return;

        gauge.TransitionDuration = 1000;
        gauge.MinimumValue = 0;
        gauge.MaximumValue = 120;
        gauge.Value = 70;
        gauge.Interval = 10;
        gauge.LabelInterval = 10;
        gauge.LabelExtent = 0.02;
        gauge.ValueInnerExtent = 0.5;
        gauge.ValueOuterExtent = 0.7;
        gauge.ValueBrush = "#000000";
        gauge.TargetValueBrush = "#000000";
        gauge.TargetValueBreadth = 10;
        gauge.TargetValue = 90;
        gauge.MinorTickCount = 5;
        gauge.MinorTickEndExtent = 0.10;
        gauge.MinorTickStartExtent = 0.20;
        gauge.TickStartExtent = 0.20;
        gauge.TickEndExtent = 0.05;
        gauge.TickStrokeThickness = 2;
        gauge.ScaleBackgroundBrush = "#dbdbdb";
        gauge.ScaleBackgroundOutline = "gray";
        gauge.ScaleStartExtent = 0.05;
        gauge.ScaleEndExtent = 0.95;
        gauge.ScaleBackgroundThickness = 0;
        gauge.BackingBrush = "#f7f7f7";
        gauge.BackingOutline = "#d1d1d1";
        gauge.BackingStrokeThickness = 0;

        gauge.Ranges.Clear();
        gauge.Ranges.Add(new IgbLinearGraphRange { StartValue = 0,  EndValue = 40,  Brush = "#FF9800", Outline = "#FF9800", InnerStartExtent = 0.2, InnerEndExtent = 0.2, OuterStartExtent = 0.95, OuterEndExtent = 0.95 });
        gauge.Ranges.Add(new IgbLinearGraphRange { StartValue = 40, EndValue = 80,  Brush = "#F96232", Outline = "#F96232", InnerStartExtent = 0.2, InnerEndExtent = 0.2, OuterStartExtent = 0.95, OuterEndExtent = 0.95 });
        gauge.Ranges.Add(new IgbLinearGraphRange { StartValue = 80, EndValue = 120, Brush = "#C62828", Outline = "#C62828", InnerStartExtent = 0.2, InnerEndExtent = 0.2, OuterStartExtent = 0.95, OuterEndExtent = 0.95 });
    }
    //end eventHandler
}
