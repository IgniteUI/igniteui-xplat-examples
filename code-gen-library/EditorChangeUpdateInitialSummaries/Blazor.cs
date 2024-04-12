//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Linq;
//end imports



public class EditorChangeUpdateInitialSummaries
{

    //begin eventHandler
    public void EditorChangeUpdateInitialSummaries(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {        
        var chart = CodeGenHelper.GetDescription<IgbCategoryChart>("content");
        var intialSummariesVal = args.NewValue.ToString();
        chart.InitialSummaries = null;
        chart.InitialSummaries = intialSummariesVal;
    }
    //end eventHandler
}