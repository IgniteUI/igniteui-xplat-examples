//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class DataGridHideFirstVisibleColumn
{
    //begin eventHandler
    public void DataGridHideFirstVisibleColumn(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        for (var i = 0; i < grid.ActualColumns.Count; i++)
        {
            var col = grid.ActualColumns[i];
            if (!col.IsHidden)
            {
                col.IsHidden = true;
                break;
            }
        }
    }
    //end eventHandler
}
