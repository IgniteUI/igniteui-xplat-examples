//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Grids;
//end imports

public class DataGridSaveLayout
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void DataGridSaveLayout(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<XamXGrid>("content");
        if (grid == null) return;
        CodeGenHelper.GetSharedSupporting<DataGridLayoutState>("DataGridLayoutState").SavedLayout = grid.SaveLayout();
    }
    //end eventHandler
}
