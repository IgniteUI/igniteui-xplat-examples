//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonChartZoomOut
{
    //begin eventHandler
    public void EditorButtonChartZoomOut(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbDataChart>("content");
        // Position and scale move together; separate assignments clamp against the old scale.
        chart.ZoomOut(0.05);
    }
    //end eventHandler
}
