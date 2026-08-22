//begin imports
using Infragistics.Controls.DataSource;
using Infragistics.Controls.Grids;
using Infragistics.Controls.DataSource.Transactions;
//end imports

public class DataGridCommitUpdatesOnly
{
    //begin eventHandler
    /// <summary>Only an update is committed; anything else the grid proposes is refused.</summary>
    //WPF: Infragistics.Controls.Grids.GridDataCommittingEventHandler
    public void DataGridCommitUpdatesOnly(object sender, GridDataCommittingEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<XamXGrid>("content");
        if (args.Changes[0].TransactionType == TransactionType.Update)
        {
            grid.AcceptCommit(args.CommitID);
        }
        else
        {
            grid.RejectCommit(args.CommitID);
        }
    }
    //end eventHandler
}
