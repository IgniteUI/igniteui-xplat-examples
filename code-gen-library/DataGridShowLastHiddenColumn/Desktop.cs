//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Grids;
//end imports

public class DataGridShowLastHiddenColumn
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void DataGridShowLastHiddenColumn(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
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
