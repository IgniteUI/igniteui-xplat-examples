//begin imports
using System;
using System.Collections;
using System.Threading.Tasks;
using Infragistics.Controls;
using Infragistics.Controls.Grids;
//end imports

public class DataGridPinSampleEmployeesOnViewInit
{
    //begin eventHandler
    //WPF: System.Action
    public void DataGridPinSampleEmployeesOnViewInit()
    {
        // Deferred, as on the other platforms, but resumed on the UI thread: the grid can only be
        // touched there, and a thread pool timer reaches it from elsewhere.
        Task.Delay(100).ContinueWith((t) => PinRows(), TaskScheduler.FromCurrentSynchronizationContext());
    }

    private void PinRows()
    {
        var grid = CodeGenHelper.GetDescription<XamXGrid>("content");
        var data = CodeGenHelper.FindByName<IList>("EmployeesSalesData");
        grid.PinnedItems.Add(data[2]);
        grid.PinnedItems.Add(data[4]);
    }
    //end eventHandler
}
