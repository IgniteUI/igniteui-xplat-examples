//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonChartPanRight
{
    //begin eventHandler
    public void EditorButtonChartPanRight(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbDataChart>("content");
        chart.ActualWindowPositionHorizontal += 0.05;
    }
    //end eventHandler
}
