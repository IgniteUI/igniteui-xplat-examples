//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonChartPanRight
{
    //begin eventHandler
    public void EditorButtonChartPanRight(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbDataChart>("content");
        var window = chart.GetCurrentActualWindowRect()!;
        chart.WindowRect = new Rect(window.Left + 0.05, window.Top, window.Width, window.Height);
    }
    //end eventHandler
}
