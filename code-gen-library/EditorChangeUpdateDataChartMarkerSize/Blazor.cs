//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports



public class EditorChangeUpdateDataChartMarkerSize
{

    //begin eventHandler
    public void EditorChangeUpdateDataChartMarkerSize(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbDataChart>("content");
        var markerSizeVal = Convert.ToInt32(args.NewValue);
        var series = chart.ActualSeries;
        for (var i = 0; i < series.Count; i++)
        {
            var markerSeries = series[i] as IgbMarkerSeries;
            if (markerSeries != null)
            {
                markerSeries.MarkerSize = markerSizeVal;
            }
        }
    }
    //end eventHandler
}
