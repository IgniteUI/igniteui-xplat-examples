//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonChartZoomIn
{
    //begin eventHandler
    public void EditorButtonChartZoomIn(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbDataChart>("content");
        if (chart.ActualWindowPositionHorizontal < 1.0)
        {
            chart.ActualWindowPositionHorizontal += 0.025;
        }
        if (chart.ActualWindowPositionVertical < 1.0)
        {
            chart.ActualWindowPositionVertical += 0.025;
        }
        if (chart.ActualWindowScaleHorizontal > 0.05)
        {
            chart.ActualWindowScaleHorizontal -= 0.05;
        }
        if (chart.ActualWindowScaleVertical > 0.05)
        {
            chart.ActualWindowScaleVertical -= 0.05;
        }
    }
    //end eventHandler
}
