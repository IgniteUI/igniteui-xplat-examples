//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
//end imports

public class DataGridApplyLiveDataGrouping
{
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
