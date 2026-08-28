//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
//end imports

public class EditorButtonChartZoomOut
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void EditorButtonChartZoomOut(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<XamDataChart>("content");
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
