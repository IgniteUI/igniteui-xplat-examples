//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System;
//end imports

public class EditorChangeUpdateGroupSorts
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeUpdateGroupSorts(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<XamCategoryChart>("content");
        var groupSortsVal = args.NewValue.ToString();
        chart.groupSorts = null;
        chart.groupSorts = groupSortsVal;
    }
    //end eventHandler
}