//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridSaveLayout
{
    public string SavedLayout = "";

    //begin eventHandler
    public void DataGridSaveLayout(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        if (grid == null) return;
        SavedLayout = grid.SaveLayout();
    }
    //end eventHandler
}
