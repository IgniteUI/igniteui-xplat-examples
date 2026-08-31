//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonGenerateHighVolumeData
{
    //begin eventHandler
    public void EditorButtonGenerateHighVolumeData(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbCategoryChart>("content");
        chart.ItemsSource = CategoryChartVolumeData.Generate(CategoryChartVolumeData.Count);
    }
    //end eventHandler
}
