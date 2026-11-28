//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonChartZoomIn
{
    //begin eventHandler
    public void EditorButtonChartZoomIn(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbDataChart>("content");
        // Position and scale move together; separate assignments clamp against the old scale.
        chart.ZoomIn(0.05);
    }
    //end eventHandler
}
