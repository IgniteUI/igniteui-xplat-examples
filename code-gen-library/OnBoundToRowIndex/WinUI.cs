//begin imports
using Infragistics.Controls.Grids;
//end imports

public class OnBoundToRowIndex
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Grids.DataBindingEventHandler
    public void OnBoundToRowIndex(object sender, DataBindingEventArgs args)
    {
        args.CellInfo.RenderValue = args.CellInfo.DataRow.ToString();
    }
    //end eventHandler
}
