//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonChartPanLeft
{
    //begin eventHandler
    public void EditorButtonChartPanLeft(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbDataChart>("content");
        chart.ActualWindowPositionHorizontal -= 0.05;
    }
    //end eventHandler
}
