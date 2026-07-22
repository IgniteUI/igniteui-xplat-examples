//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Grids;
//end imports

public class DataGridHideFirstVisibleColumn
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void DataGridHideFirstVisibleColumn(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
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
