//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Collections.Generic;
//end imports

public class DataGridReloadSalaryData
{
    private static Random _random = new Random();

    //begin eventHandler
    public void DataGridReloadSalaryData(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        var data = (List<EmployeesSalesDataItem>)grid.DataSource;
        for (var i = 0; i < data.Count; i++)
        {
            var item = data[i];
            var oldItem = item;
            item.Salary = Math.Round(60000 + (_random.NextDouble() * 140000));
            grid.NotifySetItem(data, i, oldItem, item);
        }
    }
    //end eventHandler
}
