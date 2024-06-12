//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Linq;
//end imports



public class EditorChangeUpdateYAxisMaximumValue
{

    //begin eventHandler
    public void EditorChangeUpdateYAxisMaximumValue(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbCategoryChart>("content");
        var yAxisMaximumVal = args.NewValue;
        chart.YAxisMaximumValue = Convert.ToDouble(yAxisMaximumVal);
    }
    //end eventHandler
}