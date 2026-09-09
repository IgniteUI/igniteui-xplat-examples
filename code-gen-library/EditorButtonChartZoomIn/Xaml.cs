//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
//end imports

public class EditorButtonChartZoomIn
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void EditorButtonChartZoomIn(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<XamDataChart>("content");
        // The window's position and scale are read-only here, unlike on the web platforms: the chart
        // has a method that moves both together, by the same fraction the web handler applies.
        chart.ZoomIn(0.05);
    }
    //end eventHandler
}
