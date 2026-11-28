//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Charts;
//end imports

public class PieChartAnimationOnViewInit
{
    //begin eventHandler
    //WPF: System.Action
    public void PieChartAnimationOnViewInit()
    {
        PieChartAnimation.Start(CodeGenHelper.GetDescription<XamPieChart>("content"));
    }
    //end eventHandler
}
