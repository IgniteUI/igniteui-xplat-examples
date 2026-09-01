//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
//end imports

public class EditorButtonGenerateHighVolumeData
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void EditorButtonGenerateHighVolumeData(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<XamCategoryChart>("content");
        chart.ItemsSource = CategoryChartVolumeData.Generate(CategoryChartVolumeData.Count);
    }
    //end eventHandler
}
