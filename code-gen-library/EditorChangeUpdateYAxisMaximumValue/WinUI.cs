//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System;
//end imports

public class EditorChangeUpdateYAxisMaximumValue
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeUpdateYAxisMaximumValue(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var yAxisMaximumVal = args.NewValue;
        var chart = CodeGenHelper.GetDescription<XamCategoryChart>("content");
        chart.YAxisMaximumValue = Convert.ToDouble(yAxisMaximumVal);
    }
    //end eventHandler
}