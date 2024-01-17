//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Linq;
//end imports



public class EditorChangeUpdateGroupSorts
{

    //begin eventHandler
    public void EditorChangeUpdateGroupSorts(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var groupSortsVal = args.NewValue.ToString();
        chart.GroupSorts = null;
        chart.GroupSorts = groupSortsVal;
    }
    //end eventHandler
}