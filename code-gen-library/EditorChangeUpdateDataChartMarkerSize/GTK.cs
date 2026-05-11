//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System;
//end imports

public class EditorChangeUpdateDataChartMarkerSize
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeUpdateDataChartMarkerSize(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<XamDataChart>("content");
        var markerSizeVal = Convert.ToInt32(args.NewValue);
        var series = chart.Series;
        for (var i = 0; i < series.Count; i++)
        {
            var markerSeries = series[i] as MarkerSeries;
            if (markerSeries != null)
            {
                markerSeries.MarkerSize = markerSizeVal;
            }
        }
    }
    //end eventHandler
}
