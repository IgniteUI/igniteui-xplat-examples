//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridApplyLiveDataGrouping
{
    //begin eventHandler
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
