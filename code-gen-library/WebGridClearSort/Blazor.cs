using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class WebGridClearSort
{
    //begin eventHandler
    public void WebGridClearSort(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        this.grid.ClearSort("");
    }
    //end eventHandler
}