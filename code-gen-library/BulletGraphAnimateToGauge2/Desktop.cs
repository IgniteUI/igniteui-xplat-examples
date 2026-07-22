//begin imports
using System.Windows.Media;
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Gauges;
//end imports

public class BulletGraphAnimateToGauge2
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void BulletGraphAnimateToGauge2(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var gauge = CodeGenHelper.GetDescription<XamBulletGraph>("content");
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
        gauge.ValueBrush = new SolidColorBrush(Colors.Black);
        gauge.TargetValueBrush = new SolidColorBrush(Colors.Black);
        gauge.TargetValueBreadth = 10;
        gauge.TargetValue = 180;
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
        gauge.Ranges.Add(new LinearGraphRange { StartValue = 100, EndValue = 150, Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0x00, 0x78, 0xC8)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0x00, 0x78, 0xC8)), InnerStartExtent = 0.2, InnerEndExtent = 0.2, OuterStartExtent = 0.95, OuterEndExtent = 0.95 });
        gauge.Ranges.Add(new LinearGraphRange { StartValue = 150, EndValue = 175, Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0x21, 0xA7, 0xFF)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0x21, 0xA7, 0xFF)), InnerStartExtent = 0.2, InnerEndExtent = 0.2, OuterStartExtent = 0.95, OuterEndExtent = 0.95 });
        gauge.Ranges.Add(new LinearGraphRange { StartValue = 175, EndValue = 200, Brush = new SolidColorBrush(Color.FromArgb(0xFF, 0x4F, 0xB9, 0xFF)), Outline = new SolidColorBrush(Color.FromArgb(0xFF, 0x4F, 0xB9, 0xFF)), InnerStartExtent = 0.2, InnerEndExtent = 0.2, OuterStartExtent = 0.95, OuterEndExtent = 0.95 });
    }
    //end eventHandler
}
