//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System;
//end imports

public class EditorChangeUpdateYAxisMinimumValue
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeUpdateYAxisMinimumValue(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {        
        var yAxisMinimumVal = args.NewValue;
        chart.YAxisMinimumValue = Convert.ToDouble(yAxisMinimumVal);
    }
    //end eventHandler
}