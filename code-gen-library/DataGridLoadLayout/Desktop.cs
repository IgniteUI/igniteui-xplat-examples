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
        if (string.IsNullOrEmpty(this.SavedLayout)) return;
        var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
        if (grid == null) return;
        grid.LoadLayout(this.SavedLayout);
    }
    //end eventHandler
}
