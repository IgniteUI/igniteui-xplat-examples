//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System;
//end imports

public class EditorChangeDataFilter
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeDataFilter(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {        
        var chart = CodeGenHelper.GetDescription<XamCategoryChart>("content");
        var filter = args.NewValue.ToString();
        chart.InitialFilter = "(contains(Year," + "'" + filter + "'" + "))";
    }
    //end eventHandler
}