//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class GroupG1LessThan
{
    //begin eventHandler
    public void GroupG1LessThan(IgbGridCustomFilterRequestedEventArgs args)
    {
        args.Expression = args.FilterFactory.Property("Group").IsEqualTo("G1")
            .And(args.FilterFactory.Property(args.Column.Field).IsLessThan(args.Value));
    }
    //end eventHandler
}
