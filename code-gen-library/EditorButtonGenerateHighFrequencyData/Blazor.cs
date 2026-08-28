//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonGenerateHighFrequencyData
{
    //begin eventHandler
    public void EditorButtonGenerateHighFrequencyData(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        CategoryChartFrequency.Generate();
    }
    //end eventHandler
}
