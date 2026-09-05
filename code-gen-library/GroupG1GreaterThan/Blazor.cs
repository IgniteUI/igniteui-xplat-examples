//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class GroupG1GreaterThan
{
    //begin eventHandler
    public void GroupG1GreaterThan(IgbGridCustomFilterRequestedEventArgs args)
    {
        args.Expression = args.FilterFactory.Property("Group").IsEqualTo("G1")
            .And(args.FilterFactory.Property(args.Column.Field).IsGreaterThan(args.Value));
    }
    //end eventHandler
}
