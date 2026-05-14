//begin imports
using Infragistics.Controls.Grids;
//end imports

public class DataGridPriceStyleKey
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.CellStyleKeyRequestedEventHandler
    public void DataGridPriceStyleKey(object sender, CellStyleRequestedEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
        var row = grid.ActualDataSource.GetItemAtIndex(args.RowNumber) as PortfolioDataItem;
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
