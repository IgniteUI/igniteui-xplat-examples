//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class PieChartAnimationOnViewInit
{
    //begin eventHandler
    public void PieChartAnimationOnViewInit()
    {
        PieChartAnimation.Start(CodeGenHelper.GetDescription<XamPieChart>("content"));
    }
    //end eventHandler
}
