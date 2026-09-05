//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonChartZoomOut
{
    //begin eventHandler
    public void EditorButtonChartZoomOut(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbDataChart>("content");
        if (chart.ActualWindowPositionHorizontal > 0.025)
        {
            chart.ActualWindowPositionHorizontal -= 0.025;
        }
        if (chart.ActualWindowPositionVertical > 0.025)
        {
            chart.ActualWindowPositionVertical -= 0.025;
        }
        if (chart.ActualWindowScaleHorizontal < 1.0)
        {
            chart.ActualWindowScaleHorizontal += 0.05;
        }
        if (chart.ActualWindowScaleVertical < 1.0)
        {
            chart.ActualWindowScaleVertical += 0.05;
        }
    }
    //end eventHandler
}
