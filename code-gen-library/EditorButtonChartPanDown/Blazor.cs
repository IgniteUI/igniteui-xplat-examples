//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonChartPanDown
{
    //begin eventHandler
    public void EditorButtonChartPanDown(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbDataChart>("content");
        var window = chart.GetCurrentActualWindowRect()!;
        chart.WindowRect = new Rect(window.Left, window.Top + 0.05, window.Width, window.Height);
    }
    //end eventHandler
}
