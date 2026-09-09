//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Grids;
//end imports

public class DataGridSelectAllRows
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void DataGridSelectAllRows(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<XamXGrid>("content");
        grid.SelectAllRows();
    }
    //end eventHandler
}
