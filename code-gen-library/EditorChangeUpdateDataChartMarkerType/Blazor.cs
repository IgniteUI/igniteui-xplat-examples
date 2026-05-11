//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports



public class EditorChangeUpdateDataChartMarkerType
{

    //begin eventHandler
    public void EditorChangeUpdateDataChartMarkerType(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbDataChart>("content");
        var markerTypeVal = (MarkerType)Enum.Parse(typeof(MarkerType), args.NewValue.ToString());
        var series = chart.ActualSeries;
        for (var i = 0; i < series.Count; i++)
        {
            var markerSeries = series[i] as IgbMarkerSeries;
            if (markerSeries != null)
            {
                markerSeries.MarkerType = markerTypeVal;
            }
        }
    }
    //end eventHandler
}
