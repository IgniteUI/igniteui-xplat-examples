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
        var chart = CodeGenHelper.GetDescription<IgbCategoryChart>("content");
        var initialGroupVal = args.NewValue.ToString();
        chart.InitialGroups = null;
        chart.InitialGroups = initialGroupVal;
    }
    //end eventHandler
}