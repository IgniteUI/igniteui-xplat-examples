//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports



public class ColorEditorToggleSeriesBrush
{

    //begin eventHandler
    public void ColorEditorToggleSeriesBrush(IgbToolCommandEventArgs args)
    {
        var target = this.chart;
        var color = args.Command.ArgumentsList[0].Value;
        switch (args.Command.CommandId)
        {
            case "ToggleSeriesBrush":
                IgbSeries series = target.ContentSeries[0];
                series.Brush = color.ToString();
            break;
        }
        
    }
    //end eventHandler
}