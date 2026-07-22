//begin imports
using System.Windows.Media;
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Gauges;
//end imports

public class LinearGaugeAnimateToGauge3
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void LinearGaugeAnimateToGauge3(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<XamLinearGauge>("content");
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
        gauge.NeedleBrush = new SolidColorBrush(Color.FromArgb(0xFF, 0x79, 0x79, 0x7A));
        gauge.NeedleOutline = new SolidColorBrush(Colors.White);
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
        gauge.Ranges.Add(new LinearGraphRange { StartValue = 0,  EndValue = 30,  Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0x9F, 0xB3, 0x28)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0x9F, 0xB3, 0x28)), InnerStartExtent = 0.075, InnerEndExtent = 0.075, OuterStartExtent = 0.95, OuterEndExtent = 0.95 });
        gauge.Ranges.Add(new LinearGraphRange { StartValue = 30, EndValue = 70,  Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0x43, 0x8C, 0x47)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0x43, 0x8C, 0x47)), InnerStartExtent = 0.075, InnerEndExtent = 0.075, OuterStartExtent = 0.95, OuterEndExtent = 0.95 });
        gauge.Ranges.Add(new LinearGraphRange { StartValue = 70, EndValue = 100, Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0x3F, 0x51, 0xB5)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0x3F, 0x51, 0xB5)), InnerStartExtent = 0.075, InnerEndExtent = 0.075, OuterStartExtent = 0.95, OuterEndExtent = 0.95 });
    }
    //end eventHandler
}
