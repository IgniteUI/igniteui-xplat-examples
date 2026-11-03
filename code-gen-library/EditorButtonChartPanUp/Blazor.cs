//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonChartPanUp
{
    //begin eventHandler
    public void EditorButtonChartPanUp(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbDataChart>("content");
        chart.ActualWindowPositionVertical -= 0.05;
    }
    //end eventHandler
}
