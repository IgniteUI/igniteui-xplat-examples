//begin imports
using System.Windows.Media;
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Gauges;
//end imports

public class BulletGraphAnimateToGauge1
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void BulletGraphAnimateToGauge1(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<XamBulletGraph>("content");
        if (gauge == null) return;

        gauge.TransitionDuration = 1000;
        gauge.MinimumValue = 0;
        gauge.MaximumValue = 80;
        gauge.Value = 70;
        gauge.Interval = 20;
        gauge.LabelInterval = 10;
        gauge.LabelExtent = 0.02;
        gauge.ValueInnerExtent = 0.5;
        gauge.ValueOuterExtent = 0.7;
        gauge.ValueBrush = new SolidColorBrush(Colors.Black);
        gauge.TargetValueBrush = new SolidColorBrush(Colors.Black);
        gauge.TargetValueBreadth = 10;
        gauge.TargetValue = 60;
        gauge.MinorTickCount = 5;
        gauge.MinorTickEndExtent = 0.10;
        gauge.MinorTickStartExtent = 0.20;
        gauge.TickStartExtent = 0.20;
        gauge.TickEndExtent = 0.05;
        gauge.TickStrokeThickness = 2;
        gauge.ScaleBackgroundBrush = new SolidColorBrush(Color.FromArgb(0xFF, 0xDB, 0xDB, 0xDB));
        gauge.ScaleBackgroundOutline = new SolidColorBrush(Colors.Gray);
        gauge.ScaleStartExtent = 0.05;
        gauge.ScaleEndExtent = 0.95;
        gauge.ScaleBackgroundThickness = 0;
        gauge.BackingBrush = new SolidColorBrush(Color.FromArgb(0xFF, 0xF7, 0xF7, 0xF7));
        gauge.BackingOutline = new SolidColorBrush(Color.FromArgb(0xFF, 0xD1, 0xD1, 0xD1));
        gauge.BackingStrokeThickness = 0;

        gauge.Ranges.Clear();
        gauge.Ranges.Add(new LinearGraphRange { StartValue = 0,  EndValue = 40, Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0xA4, 0xBD, 0x29)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0xA4, 0xBD, 0x29)), InnerStartExtent = 0.2, InnerEndExtent = 0.2, OuterStartExtent = 0.95, OuterEndExtent = 0.95 });
        gauge.Ranges.Add(new LinearGraphRange { StartValue = 40, EndValue = 80, Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0xF8, 0x62, 0x32)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0xF8, 0x62, 0x32)), InnerStartExtent = 0.2, InnerEndExtent = 0.2, OuterStartExtent = 0.95, OuterEndExtent = 0.95 });
    }
    //end eventHandler
}
