//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System;
//end imports

public class EditorChangeUpdateInitialSummaries
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeUpdateInitialSummaries(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {        
        var chart = CodeGenHelper.GetDescription<XamCategoryChart>("content");
        var intialSummariesVal = args.NewValue.ToString();
        chart.InitialSummaries = null;
        chart.InitialSummaries = intialSummariesVal;
    }
    //end eventHandler
}