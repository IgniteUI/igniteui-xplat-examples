//begin imports
using Infragistics.Controls.Grids;
//end imports

public class DataGridPerformanceChangeCellUpdating
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.TemplateCellUpdatingEventHandler
    public void DataGridPerformanceChangeCellUpdating(object sender, TemplateCellUpdatingEventArgs args)
    {
        // GTK does not yet expose a Content surface on TemplateCellUpdatingEventArgs.
    }
    //end eventHandler
}
