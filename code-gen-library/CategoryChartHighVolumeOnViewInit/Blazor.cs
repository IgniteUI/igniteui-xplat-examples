//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class CategoryChartHighVolumeOnViewInit
{
    //begin eventHandler
    public void CategoryChartHighVolumeOnViewInit()
    {
        var chart = CodeGenHelper.GetDescription<IgbCategoryChart>("content");
        chart.ItemsSource = CategoryChartVolumeData.Generate(CategoryChartVolumeData.Count);
    }
    //end eventHandler
}
