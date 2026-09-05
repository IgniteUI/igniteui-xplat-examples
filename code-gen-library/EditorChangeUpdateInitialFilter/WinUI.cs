//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System;
//end imports

public class EditorChangeUpdateInitialFilter
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeUpdateInitialFilter(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {        
        var chart = CodeGenHelper.GetDescription<XamCategoryChart>("content");
        var intialFilterVal = args.NewValue.ToString();
        chart.InitialFilter = null;
        chart.InitialFilter = intialFilterVal;
    }
    //end eventHandler
}