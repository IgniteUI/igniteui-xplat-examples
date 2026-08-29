//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
//end imports

public class EditorButtonChartPanDown
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void EditorButtonChartPanDown(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<XamDataChart>("content");
        // The window's position is read-only here, so the window rectangle it is a shortcut to is
        // what moves. Taken as it stands rather than named, since the type it is differs by platform.
        var rect = chart.ActualWindowRect;
        rect.Y += 0.05;
        chart.WindowRect = rect;
    }
    //end eventHandler
}
