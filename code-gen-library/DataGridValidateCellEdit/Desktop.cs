//begin imports
using Infragistics.Controls.Grids;
//end imports

public class DataGridValidateCellEdit
{
    //begin eventHandler
    /// <summary>A cell left empty is refused with a message; anything else is taken.</summary>
    //WPF: Infragistics.Controls.Grids.GridCellValueChanging
    public void DataGridValidateCellEdit(object sender, GridCellValueChangingEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<XamXGrid>("content");
        // NewValue is typed as object here, where the web platforms hand back the edited text
        if (args.NewValue as string == "")
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
