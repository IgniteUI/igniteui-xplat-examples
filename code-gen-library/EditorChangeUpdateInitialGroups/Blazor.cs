//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Linq;
//end imports



public class EditorChangeUpdateInitialGroups
{

    //begin eventHandler
    public void EditorChangeUpdateInitialGroups(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var intialGroupVal = args.NewValue.ToString();
        chart.InitialGroups = null;
        chart.InitialGroups = intialGroupVal;
    }
    //end eventHandler
}