//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Collections;
//end imports

public class DataGridPinSampleEmployeesOnViewInit
{
    //begin eventHandler
    private System.Threading.Timer _timer;

    public void DataGridPinSampleEmployeesOnViewInit()
    {
        _timer = new System.Threading.Timer((_) =>
        {
            PinRows();
        }, null, 100, 0);
    }

    private void PinRows()
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        var data = CodeGenHelper.FindByName<IList>("EmployeesSalesData");
        grid.PinnedItems.Add(data[2]);
        grid.PinnedItems.Add(data[4]);
    }
    //end eventHandler
}
