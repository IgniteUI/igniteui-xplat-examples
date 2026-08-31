//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonChartPanDown
{
    //begin eventHandler
    public void EditorButtonChartPanDown(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbDataChart>("content");
        chart.ActualWindowPositionVertical += 0.05;
    }
    //end eventHandler
}
