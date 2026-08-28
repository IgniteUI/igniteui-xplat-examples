//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonPieChartAnimation
{
    //begin eventHandler
    public void EditorButtonPieChartAnimation(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        PieChartAnimation.Toggle(CodeGenHelper.GetDescription<XamPieChart>("content"));
    }
    //end eventHandler
}
