//begin imports
using Infragistics.Controls.Layouts;
//end imports

public class DataGridApplyLiveDataGrouping
{
    //begin emitterOnly
    // UseRowGrouping/OnGridGroupingAdd/OnGridGroupingRemove are owned by
    // DataGridLiveDataTickerOnViewInit. The handlers merge into one sample class
    // at sample-emission time; these stubs keep the per-handler library Holder
    // compilable in isolation.
    public bool UseRowGrouping = true;
    public void OnGridGroupingAdd() { }
    public void OnGridGroupingRemove() { }
    //end emitterOnly

    //begin eventHandler
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
