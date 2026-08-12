//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridCommitUpdatesOnly
{
    //begin eventHandler
    /// <summary>Only an update is committed; anything else the grid proposes is refused.</summary>
    public void DataGridCommitUpdatesOnly(IgbGridDataCommittingEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
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
