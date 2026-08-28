//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonToggleHighFrequency
{
    //begin eventHandler
    public void EditorButtonToggleHighFrequency(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        CategoryChartFrequency.Toggle();
    }
    //end eventHandler
}
