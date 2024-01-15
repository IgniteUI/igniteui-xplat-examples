//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Linq;
//end imports



public class EditorChangeUpdateYAxisMinimumValue
{

    //begin eventHandler
    public void EditorChangeUpdateYAxisMinimumValue(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var yAxisMinimumVal = args.NewValue;
        chart.YAxisMinimumValue = Convert.ToDouble(yAxisMinimumVal);
    }
    //end eventHandler
}