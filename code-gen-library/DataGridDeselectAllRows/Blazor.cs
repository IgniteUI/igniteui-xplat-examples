//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class DataGridDeselectAllRows
{
    //begin eventHandler
    public void DataGridDeselectAllRows(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        grid.DeselectAllRows();
    }
    //end eventHandler
}
