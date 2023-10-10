using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class WebGridPinFirstGroupToggle
{
    //begin eventHandler
    public void WebGridPinFirstGroupToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var columnGroup = this.grid.ActualColumns[1];
        columnGroup.Pinned = !columnGroup.Pinned;
    }
    //end eventHandler
}