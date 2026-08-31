//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class GroupG1AndA
{
    //begin eventHandler
    public void GroupG1AndA(IgbGridCustomFilterRequestedEventArgs args)
    {
        args.Expression = args.FilterFactory.Property("Group").IsEqualTo("G1")
            .And(args.FilterFactory.Property(args.Column.Field).Contains("A"));
    }
    //end eventHandler
}
