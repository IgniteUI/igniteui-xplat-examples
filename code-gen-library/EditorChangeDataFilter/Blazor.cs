//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Linq;
//end imports



public class EditorChangeDataFilter
{

    //begin eventHandler
    public void EditorChangeDataFilter(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbCategoryChart>("content");
        var filter = args.NewValue.ToString();
        chart.InitialFilter = "(contains(Year," + "'" + filter + "'" + "))";
    }
    //end eventHandler
}