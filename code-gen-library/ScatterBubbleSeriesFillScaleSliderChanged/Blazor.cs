//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Linq;
//end imports



public class ScatterBubbleSeriesFillScaleSliderChanged
{
    //begin eventHandler
    public void ScatterBubbleSeriesFillScaleSliderChanged(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var series = this.chart.ActualSeries[0] as IgbBubbleSeries;
		
		var fillScale = series.FillScale as IgbValueBrushScale;
		
		double newValue = (double)args.NewValue;
		
		if(newValue >= 25000){
            fillScale.MaximumValue = newValue;            
        }
        else{
            fillScale.MinimumValue = newValue;
        }
    }
    //end eventHandler
}