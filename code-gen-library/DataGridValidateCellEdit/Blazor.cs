//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridValidateCellEdit
{
    //begin eventHandler
    /// <summary>A cell left empty is refused with a message; anything else is taken.</summary>
    public void DataGridValidateCellEdit(IgbGridCellValueChangingEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        if (args.NewValue == "")
        {
            grid.SetEditError(args.EditID, "Error, cell is empty");
            grid.RejectEdit(args.EditID);
        }
        else
        {
            grid.AcceptEdit(args.EditID);
        }
    }
    //end eventHandler
}
