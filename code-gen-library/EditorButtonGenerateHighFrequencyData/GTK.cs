//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
//end imports

public class EditorButtonGenerateHighFrequencyData
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void EditorButtonGenerateHighFrequencyData(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        CategoryChartFrequency.Generate(CodeGenHelper.GetDescription<XamCategoryChart>("content"));
    }
    //end eventHandler
}
