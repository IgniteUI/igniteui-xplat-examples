using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class WebGridClearGrouping
{
    //begin eventHandler
    public void WebGridClearGrouping(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        CodeGenHelper.GetDescription<IgbGrid>("content").ClearGrouping("");
    }
    //end eventHandler
}