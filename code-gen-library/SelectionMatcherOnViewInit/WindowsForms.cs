//begin imports
using System.Collections;
using Infragistics.Win.DataVisualization;
//end imports

public class SelectionMatcherOnViewInit
{
    //begin eventHandler
    //WindowsForms: System.Action
    public void SelectionMatcherOnViewInit()
    {
        AddSelection();
    }

    private void AddSelection()
    {
        // The data chart sample's: the WinForms category chart has no SelectedSeriesItems, so its
        // selection-matcher sample does not run on Windows Forms.
        var dataChart = CodeGenHelper.GetDescription<UltraDataChart>("content");
        var data = (IList)dataChart.Series[0].DataSource;
        var selectedItems = dataChart.SelectedSeriesItems;

        ChartSelection selection = new ChartSelection();
        selection.Item = data[1];
        SeriesMatcher matcher = new SeriesMatcher();
        matcher.MemberPath = "Hydro";
        matcher.MemberPathType = "ValueMemberPath";
        selection.Matcher = matcher;

        selectedItems.Add(selection);

        SeriesMatcher matcher2 = new SeriesMatcher();
        ChartSelection selection2 = new ChartSelection();
        selection2.Item = data[2];
        matcher2.MemberPath = "Wind";
        matcher2.MemberPathType = "ValueMemberPath";

        selection2.Matcher = matcher2;

        selectedItems.Add(selection2);
    }
    //end eventHandler
}
