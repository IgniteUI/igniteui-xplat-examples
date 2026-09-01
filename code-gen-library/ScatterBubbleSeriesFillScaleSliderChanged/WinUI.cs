//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System;
using System.Linq;
//end imports

public class ScatterBubbleSeriesFillScaleSliderChanged
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void ScatterBubbleSeriesFillScaleSliderChanged(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<XamDataChart>("content");
        var series = chart.Series[0] as BubbleSeries;

        var fillScale = series.FillScale as ValueBrushScale;

        double newValue = (double)args.NewValue;

        if (newValue >= 25000)
        {
            fillScale.MaximumValue = newValue;
        }
        else
        {
            fillScale.MinimumValue = newValue;
        }
    }
    //end eventHandler
}
