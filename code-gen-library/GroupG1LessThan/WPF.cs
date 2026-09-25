//begin imports
using Infragistics.Controls.Grids;
//end imports

public class GroupG1LessThan
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.GridCustomFilterRequestedEventHandler
    public void GroupG1LessThan(object sender, GridCustomFilterRequestedEventArgs args)
    {
        args.Expression = args.FilterFactory.Property("Group").IsEqualTo("G1")
            .And(args.FilterFactory.Property(args.Column.Field).IsLessThan(args.Value));
    }
    //end eventHandler
}
