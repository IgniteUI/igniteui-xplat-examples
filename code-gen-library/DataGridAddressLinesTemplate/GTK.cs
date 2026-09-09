//begin imports
using Infragistics.Controls.Grids;
//end imports

public class DataGridAddressLinesTemplate
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.TemplateCellUpdatingEventHandler
    public void DataGridAddressLinesTemplate(object sender, TemplateCellUpdatingEventArgs args)
    {
        // GTK does not yet expose a Content surface on TemplateCellUpdatingEventArgs,
        // so native cell-template content is not supported on this platform.
    }
    //end eventHandler
}
