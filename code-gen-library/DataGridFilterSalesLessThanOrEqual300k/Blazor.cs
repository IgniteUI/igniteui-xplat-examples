//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridFilterSalesLessThanOrEqual300k
{
    //begin eventHandler
    public void DataGridFilterSalesLessThanOrEqual300k(IgbGridCustomFilterRequestedEventArgs args)
    {
        args.Expression = args.FilterFactory.Property("Sales").IsLessThanOrEqualTo(300000);
    }
    //end eventHandler
}
