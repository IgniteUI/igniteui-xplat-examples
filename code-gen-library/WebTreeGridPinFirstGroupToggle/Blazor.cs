using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class WebTreeGridPinFirstGroupToggle
{
    //begin eventHandler
    public void WebTreeGridPinFirstGroupToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var columnGroup = this.grid.ActualColumns[1];
        columnGroup.Pinned = !columnGroup.Pinned;
    }
    //end eventHandler
}