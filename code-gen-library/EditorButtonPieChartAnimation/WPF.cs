//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
//end imports

public class EditorButtonPieChartAnimation
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void EditorButtonPieChartAnimation(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        PieChartAnimation.Toggle(CodeGenHelper.GetDescription<XamPieChart>("content"));
    }
    //end eventHandler
}
