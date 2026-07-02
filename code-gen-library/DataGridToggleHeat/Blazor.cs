//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridToggleHeat
{
    //begin eventHandler
    public void DataGridToggleHeat(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        this.UseHeatBackground = args.NewValue is bool b && b;
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        if (grid != null) grid.Flush();
    }
    //end eventHandler
}
