//begin imports
using Infragistics.Controls.Grids;
//end imports

public class CellValueChangingRejectEdit
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.GridCellValueChanging
    public void CellValueChangingRejectEdit(object sender, GridCellValueChangingEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<XamXGrid>("content");
        grid.SetEditError(args.EditID, "Edit canceled");
    }
    //end eventHandler
}
