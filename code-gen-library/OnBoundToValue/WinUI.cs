//begin imports
using Infragistics.Controls.Grids;
//end imports

public class OnBoundToValue
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.DataBindingEventHandler
    public void OnBoundToValue(object sender, DataBindingEventArgs args)
    {
        args.CellInfo.RenderValue = args.CellInfo.OriginalValue?.ToString() ?? "";
    }
    //end eventHandler
}
