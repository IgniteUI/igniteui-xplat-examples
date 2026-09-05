//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridCommitEdits
{
    //begin eventHandler
    public void DataGridCommitEdits(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        grid.CommitEdits();
    }
    //end eventHandler
}
