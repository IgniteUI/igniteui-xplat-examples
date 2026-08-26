//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridLoadLayout
{
    //begin eventHandler
    public void DataGridLoadLayout(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        if (string.IsNullOrEmpty(this.SavedLayout)) return;
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        if (grid == null) return;
        grid.LoadLayout(this.SavedLayout);
    }
    //end eventHandler
}
