//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class DataGridSelectAllRows
{
    //begin eventHandler
    public void DataGridSelectAllRows(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        grid.SelectAllRows();
    }
    //end eventHandler
}
