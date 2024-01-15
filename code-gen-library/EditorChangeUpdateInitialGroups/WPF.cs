//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System;
//end imports

public class EditorChangeUpdateMarkerType
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeUpdateMarkerType(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {        
        var intialGroupVal = args.NewValue.ToString();
        chart.InitialGroups = null;
        chart.InitialGroups = intialGroupVal;
    }
    //end eventHandler
}