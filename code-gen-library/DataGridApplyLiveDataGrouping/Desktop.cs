//begin imports
using Infragistics.Controls.Layouts;
//end imports

public class DataGridApplyLiveDataGrouping
{
    //begin eventHandler
    // UseRowGrouping, OnGridGroupingAdd and OnGridGroupingRemove are owned by
    // DataGridLiveDataTickerOnViewInit; these handlers are merged into one
    // sample class and only ever used together.

    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void DataGridApplyLiveDataGrouping(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        this.UseRowGrouping = args.NewValue is bool b && b;
        if (this.UseRowGrouping)
            this.OnGridGroupingAdd();
        else
            this.OnGridGroupingRemove();
    }
    //end eventHandler
}
