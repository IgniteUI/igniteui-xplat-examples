//begin imports
using Infragistics.Controls.Grids;
//end imports

public class GroupG1GreaterThan
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.GridCustomFilterRequestedEventHandler
    public void GroupG1GreaterThan(object sender, GridCustomFilterRequestedEventArgs args)
    {
        args.Expression = args.FilterFactory.Property("Group").IsEqualTo("G1")
            .And(args.FilterFactory.Property(args.Column.Field).IsGreaterThan(args.Value));
    }
    //end eventHandler
}
