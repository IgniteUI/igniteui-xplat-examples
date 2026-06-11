//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Grids;
//end imports

public class DataGridDeselectAllRows
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void DataGridDeselectAllRows(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
        grid.DeselectAllRows();
    }
    //end eventHandler
}
