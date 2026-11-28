//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonChartPanLeft
{
    //begin eventHandler
    public void EditorButtonChartPanLeft(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbDataChart>("content");
        var window = chart.GetCurrentActualWindowRect()!;
        chart.WindowRect = new Rect(window.Left - 0.05, window.Top, window.Width, window.Height);
    }
    //end eventHandler
}
