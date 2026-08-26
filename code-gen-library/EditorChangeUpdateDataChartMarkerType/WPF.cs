//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System;
//end imports

public class EditorChangeUpdateDataChartMarkerType
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeUpdateDataChartMarkerType(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<XamDataChart>("content");
        var markerTypeVal = (MarkerType)Enum.Parse(typeof(MarkerType), args.NewValue.ToString());
        var series = chart.Series;
        for (var i = 0; i < series.Count; i++)
        {
            var markerSeries = series[i] as MarkerSeries;
            if (markerSeries != null)
            {
                markerSeries.MarkerType = markerTypeVal;
            }
        }
    }
    //end eventHandler
}
