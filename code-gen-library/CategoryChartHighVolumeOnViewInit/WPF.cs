//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Charts;
//end imports

public class CategoryChartHighVolumeOnViewInit
{
    //begin eventHandler
    //WPF: System.Action
    public void CategoryChartHighVolumeOnViewInit()
    {
        var chart = CodeGenHelper.GetDescription<XamCategoryChart>("content");
        chart.ItemsSource = CategoryChartVolumeData.Generate(CategoryChartVolumeData.Count);
    }
    //end eventHandler
}
