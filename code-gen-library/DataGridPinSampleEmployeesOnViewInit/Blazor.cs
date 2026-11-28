//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Collections;
//end imports

public class DataGridPinSampleEmployeesOnViewInit
{
    //begin eventHandler
    public void DataGridPinSampleEmployeesOnViewInit()
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        var data = CodeGenHelper.FindByName<IList>("EmployeesSalesData");
        grid.PinnedItems.Add(data[2]);
        grid.PinnedItems.Add(data[4]);
    }
    //end eventHandler
}
