//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class DataGridShowLastHiddenColumn
{
    //begin eventHandler
    public void DataGridShowLastHiddenColumn(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        for (var i = grid.ActualColumns.Count - 1; i >= 0; i--)
        {
            var col = grid.ActualColumns[i];
            if (col.IsHidden)
            {
                col.IsHidden = false;
                break;
            }
        }
    }
    //end eventHandler
}
