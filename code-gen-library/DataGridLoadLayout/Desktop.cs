//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Grids;
//end imports

public class DataGridLoadLayout
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void DataGridLoadLayout(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var state = CodeGenHelper.GetSharedSupporting<DataGridLayoutState>("DataGridLayoutState");
        if (string.IsNullOrEmpty(state.SavedLayout)) return;
        var grid = CodeGenHelper.GetDescription<XamXGrid>("content");
        if (grid == null) return;
        grid.LoadLayout(state.SavedLayout);
    }
    //end eventHandler
}
