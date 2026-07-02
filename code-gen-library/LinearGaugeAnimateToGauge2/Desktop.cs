//begin imports
using System.Windows.Media;
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Gauges;
//end imports

public class LinearGaugeAnimateToGauge2
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void LinearGaugeAnimateToGauge2(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<XamLinearGauge>("content");
        if (gauge == null) return;

        gauge.TransitionDuration = 1000;
        gauge.MinimumValue = 100;
        gauge.MaximumValue = 200;
        gauge.Value = 150;
        gauge.Interval = 20;
        gauge.LabelInterval = 20;
        gauge.LabelExtent = 0.0;

        gauge.IsNeedleDraggingEnabled = true;
        gauge.NeedleShape = LinearGraphNeedleShape.Triangle;
        gauge.NeedleBrush = new SolidColorBrush(Color.FromArgb(0xFF, 0x79, 0x79, 0x7A));
        gauge.NeedleOutline = new SolidColorBrush(Colors.White);
        gauge.NeedleStrokeThickness = 1;
        gauge.NeedleOuterExtent = 0.9;
        gauge.NeedleInnerExtent = 0.3;

        gauge.MinorTickCount = 4;
        gauge.MinorTickEndExtent = 0.10;
        gauge.MinorTickStartExtent = 0.20;
        gauge.MinorTickStrokeThickness = 1;
        gauge.TickStartExtent = 0.25;
        gauge.TickEndExtent = 0.05;
        gauge.TickStrokeThickness = 2;

        gauge.ScaleStrokeThickness = 0;
        gauge.ScaleBrush = new SolidColorBrush(Colors.White);
        gauge.ScaleOutline = new SolidColorBrush(Color.FromArgb(0xFF, 0xDB, 0xDB, 0xDB));
        gauge.ScaleInnerExtent = 0.075;
        gauge.ScaleOuterExtent = 0.85;
        gauge.ScaleStartExtent = 0.05;
        gauge.ScaleEndExtent = 0.95;

        gauge.BackingBrush = new SolidColorBrush(Colors.White);
        gauge.BackingOutline = new SolidColorBrush(Color.FromArgb(0xFF, 0xD1, 0xD1, 0xD1));
        gauge.BackingStrokeThickness = 0;

        gauge.Ranges.Clear();
        gauge.Ranges.Add(new LinearGraphRange { StartValue = 100, EndValue = 125, Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0x00, 0x78, 0xC8)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0x00, 0x78, 0xC8)), InnerStartExtent = 0.075, InnerEndExtent = 0.075, OuterStartExtent = 0.65, OuterEndExtent = 0.65 });
        gauge.Ranges.Add(new LinearGraphRange { StartValue = 125, EndValue = 150, Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0x00, 0x99, 0xFF)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0x00, 0x99, 0xFF)), InnerStartExtent = 0.075, InnerEndExtent = 0.075, OuterStartExtent = 0.65, OuterEndExtent = 0.65 });
        gauge.Ranges.Add(new LinearGraphRange { StartValue = 150, EndValue = 175, Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0x21, 0xA7, 0xFF)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0x21, 0xA7, 0xFF)), InnerStartExtent = 0.075, InnerEndExtent = 0.075, OuterStartExtent = 0.65, OuterEndExtent = 0.65 });
        gauge.Ranges.Add(new LinearGraphRange { StartValue = 175, EndValue = 200, Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0x45, 0xB9, 0xFF)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0x45, 0xB9, 0xFF)), InnerStartExtent = 0.075, InnerEndExtent = 0.075, OuterStartExtent = 0.65, OuterEndExtent = 0.65 });
    }
    //end eventHandler
}
