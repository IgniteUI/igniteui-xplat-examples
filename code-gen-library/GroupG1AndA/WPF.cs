//begin imports
using Infragistics.Controls.Grids;
//end imports

public class GroupG1AndA
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.GridCustomFilterRequestedEventHandler
    public void GroupG1AndA(object sender, GridCustomFilterRequestedEventArgs args)
    {
        args.Expression = args.FilterFactory.Property("Group").IsEqualTo("G1")
            .And(args.FilterFactory.Property(args.Column.Field).Contains("A"));
    }
    //end eventHandler
}
