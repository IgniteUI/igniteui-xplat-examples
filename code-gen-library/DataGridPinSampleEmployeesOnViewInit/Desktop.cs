//begin imports
using System;
using System.Collections;
using Infragistics.Controls;
using Infragistics.Controls.Grids;
//end imports

public class DataGridPinSampleEmployeesOnViewInit
{
    //begin eventHandler
    //WPF: System.Action
    public void DataGridPinSampleEmployeesOnViewInit()
    {
        var grid = CodeGenHelper.GetDescription<XamXGrid>("content");
        var data = CodeGenHelper.FindByName<IList>("EmployeesSalesData");
        grid.PinnedItems.Add(data[2]);
        grid.PinnedItems.Add(data[4]);
    }
    //end eventHandler
}
