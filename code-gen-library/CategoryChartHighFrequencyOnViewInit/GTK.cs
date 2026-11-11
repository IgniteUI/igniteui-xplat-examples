//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Controls.Description;

//end imports

public class CategoryChartHighFrequencyOnViewInit
{
    //begin eventHandler
    //WPF: System.Action
    public void CategoryChartHighFrequencyOnViewInit()
    {
        CategoryChartFrequency.Generate(CodeGenHelper.GetDescription<XamCategoryChart>("content"));
        CategoryChartFrequency.RestartTimer(CodeGenHelper.GetDescription<XamCategoryChart>("content"));
    }
    //end eventHandler
}
