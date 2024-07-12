using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class WebGridClearSort
{
    //begin eventHandler
    public void WebGridClearSort(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        CodeGenHelper.GetDescription<IgbGrid>("content").ClearSort("");
    }
    //end eventHandler
}