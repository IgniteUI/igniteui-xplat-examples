//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System;
//end imports

public class EditorChangeUpdateInitialGroups
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeUpdateInitialGroups(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {        
        var chart = CodeGenHelper.GetDescription<XamCategoryChart>("content");
        var intialGroupVal = args.NewValue.ToString();
        chart.InitialGroups = null;
        chart.InitialGroups = intialGroupVal;
    }
    //end eventHandler
}