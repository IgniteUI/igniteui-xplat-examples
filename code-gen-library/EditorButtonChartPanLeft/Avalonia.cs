//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
//end imports

public class EditorButtonChartPanLeft
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void EditorButtonChartPanLeft(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<XamDataChart>("content");
        // The window's position is read-only here, so the window rectangle it is a shortcut to is
        // what moves. Taken as it stands rather than named, since the type it is differs by platform.
        var rect = chart.ActualWindowRect;
        rect = new Avalonia.Rect(rect.X - 0.05, rect.Y, rect.Width, rect.Height);
        chart.WindowRect = rect;
    }
    //end eventHandler
}
