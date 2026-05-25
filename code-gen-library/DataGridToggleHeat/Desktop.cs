//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Grids;
//end imports

public class DataGridToggleHeat
{
    //begin eventHandler
    // UseHeatBackground is owned by DataGridLiveDataTickerOnViewInit; these
    // handlers are merged into one sample class and only ever used together.

    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void DataGridToggleHeat(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        this.UseHeatBackground = args.NewValue is bool b && b;
        var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
        if (grid != null) grid.InvalidateVisibleRows();
    }
    //end eventHandler
}
