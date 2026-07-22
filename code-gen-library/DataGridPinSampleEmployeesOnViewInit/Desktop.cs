//begin imports
using System;
using System.Collections;
using System.Threading;
using Infragistics.Controls;
using Infragistics.Controls.Grids;
//end imports

public class DataGridPinSampleEmployeesOnViewInit
{
    //begin eventHandler
    private Timer _timer;

    //WPF: System.Action
    public void DataGridPinSampleEmployeesOnViewInit()
    {
        _timer = new Timer((state) =>
        {
            PinRows();
            _timer.Dispose();
        }, null, 100, Timeout.Infinite);
    }

    private void PinRows()
    {
        var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
        var data = CodeGenHelper.FindByName<IList>("EmployeesSalesData");
        grid.PinnedItems.Add(data[2]);
        grid.PinnedItems.Add(data[4]);
    }
    //end eventHandler
}
