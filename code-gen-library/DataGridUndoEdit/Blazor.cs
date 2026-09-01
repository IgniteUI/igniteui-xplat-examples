//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridUndoEdit
{
    //begin eventHandler
    public void DataGridUndoEdit(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        grid.Undo();
    }
    //end eventHandler
}
