//begin imports
using Infragistics.Controls.Grids;
//end imports

public class DataGridPerformanceAvgSaleStyleKey
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.CellStyleKeyRequestedEventHandler
    public void DataGridPerformanceAvgSaleStyleKey(object sender, CellStyleRequestedEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
        var row = grid.ActualDataSource.GetItemAtIndex(args.RowNumber) as SalesPerson;
        if (row != null && row.Change >= 0)
        {
            args.StyleKey = "priceShiftUp";
        }
        else
        {
            args.StyleKey = "priceShiftDown";
        }
    }
    //end eventHandler
}
