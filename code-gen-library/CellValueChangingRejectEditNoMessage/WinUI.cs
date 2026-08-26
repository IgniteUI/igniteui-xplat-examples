//begin imports
using Infragistics.Controls.Grids;
//end imports

public class CellValueChangingRejectEditNoMessage
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.GridCellValueChanging
    public void CellValueChangingRejectEditNoMessage(object sender, GridCellValueChangingEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<XamXGrid>("content");
        grid.RejectEdit(args.EditID);
    }
    //end eventHandler
}
