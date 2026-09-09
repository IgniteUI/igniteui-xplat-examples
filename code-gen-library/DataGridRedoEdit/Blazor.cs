//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridRedoEdit
{
    //begin eventHandler
    public void DataGridRedoEdit(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        grid.Redo();
    }
    //end eventHandler
}
