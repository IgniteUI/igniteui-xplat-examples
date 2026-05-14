//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Grids;
//end imports

public class DataGridToggleHeat
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void DataGridToggleHeat(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        this.UseHeatBackground = args.NewValue is bool b && b;
        var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
        if (grid != null) grid.InvalidateVisibleRows();
    }
    //end eventHandler
}
