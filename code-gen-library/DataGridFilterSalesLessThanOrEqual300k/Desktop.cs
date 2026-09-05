//begin imports
using Infragistics.Controls.Grids;
//end imports

public class DataGridFilterSalesLessThanOrEqual300k
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.GridCustomFilterRequestedEventHandler
    public void DataGridFilterSalesLessThanOrEqual300k(object sender, GridCustomFilterRequestedEventArgs args)
    {
        args.Expression = args.FilterFactory.Property("Sales").IsLessThanOrEqualTo(300000);
    }
    //end eventHandler
}
