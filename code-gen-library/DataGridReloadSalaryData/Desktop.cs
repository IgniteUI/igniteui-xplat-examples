//begin imports
using System;
using System.Collections.Generic;
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Grids;
//end imports

public class DataGridReloadSalaryData
{
    //begin eventHandler
    public Random _random = new Random();

    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void DataGridReloadSalaryData(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
        var data = (List<EmployeesSalesDataItem>)grid.ItemsSource;
        for (var i = 0; i < data.Count; i++)
        {
            var item = data[i];
            var oldItem = item;
            item.Salary = Math.Round(60000 + (_random.NextDouble() * 140000));
            grid.NotifySetItem(i, oldItem, item);
        }
    }
    //end eventHandler
}
