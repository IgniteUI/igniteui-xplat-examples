//begin imports
using Infragistics.Controls.Charts;
//end imports

public class DoughnutChartSelectionSliceClick
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.SliceClickEventHandler
    public void DoughnutChartSelectionSliceClick(object sender, SliceClickEventArgs e)
    {
        // A click that selects reports which slice; a click that clears the selection reports that.
        DoughnutChartSelectionReadout.Show(e.IsSelected ? e.Index : -1);
    }
    //end eventHandler
}
