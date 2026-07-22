//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class BulletGraphAnimateToGauge2
{
    //begin eventHandler
    public void BulletGraphAnimateToGauge2(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<IgbBulletGraph>("content");
        if (gauge == null) return;

        gauge.TransitionDuration = 1000;
        gauge.MinimumValue = 100;
        gauge.MaximumValue = 200;
        gauge.Value = 120;
        gauge.Interval = 10;
        gauge.LabelInterval = 10;
        gauge.LabelExtent = 0.02;
        gauge.ValueInnerExtent = 0.5;
        gauge.ValueOuterExtent = 0.7;
        gauge.ValueBrush = "#000000";
        gauge.TargetValueBrush = "#000000";
        gauge.TargetValueBreadth = 10;
        gauge.TargetValue = 180;
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
        gauge.Ranges.Add(new IgbLinearGraphRange { StartValue = 100, EndValue = 150, Brush = "#0078C8", Outline = "#0078C8", InnerStartExtent = 0.2, InnerEndExtent = 0.2, OuterStartExtent = 0.95, OuterEndExtent = 0.95 });
        gauge.Ranges.Add(new IgbLinearGraphRange { StartValue = 150, EndValue = 175, Brush = "#21A7FF", Outline = "#21A7FF", InnerStartExtent = 0.2, InnerEndExtent = 0.2, OuterStartExtent = 0.95, OuterEndExtent = 0.95 });
        gauge.Ranges.Add(new IgbLinearGraphRange { StartValue = 175, EndValue = 200, Brush = "#4FB9FF", Outline = "#4FB9FF", InnerStartExtent = 0.2, InnerEndExtent = 0.2, OuterStartExtent = 0.95, OuterEndExtent = 0.95 });
    }
    //end eventHandler
}
