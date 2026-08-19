//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridToggleHeat
{
    //begin emitterOnly
    // UseHeatBackground is owned by DataGridLiveDataTickerOnViewInit. The handlers
    // merge into one sample class at sample-emission time; this stub keeps the
    // per-handler library Holder compilable in isolation.
    public bool UseHeatBackground = true;
    //end emitterOnly

    //begin eventHandler
    public void DataGridToggleHeat(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        this.UseHeatBackground = args.NewValue is bool b && b;
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        if (grid != null) grid.Flush();
    }
    //end eventHandler
}
