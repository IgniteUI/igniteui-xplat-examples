//begin imports
using IgniteUI.Blazor.Controls;

//end imports

public class CategoryChartHighFrequencyOnViewInit
{
    //begin eventHandler
    public void CategoryChartHighFrequencyOnViewInit()
    {
        CategoryChartFrequency.Generate(CodeGenHelper.GetDescription<IgbCategoryChart>("content"));
        CategoryChartFrequency.RestartTimer(CodeGenHelper.GetDescription<IgbCategoryChart>("content"));
    }
    //end eventHandler
}
