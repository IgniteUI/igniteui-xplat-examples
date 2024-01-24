//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Linq;
//end imports



public class EditorChangeUpdateInitialFilter
{

    //begin eventHandler
    public void EditorChangeUpdateInitialFilter(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbCategoryChart>("content");
        var intialFilterVal = args.NewValue.ToString();
        chart.InitialFilter = null;
        chart.InitialFilter = intialFilterVal;
    }
    //end eventHandler
}