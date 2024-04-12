using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class WebHierarchicalGridPinFirstGroupToggle
{
    //begin eventHandler
    public void WebHierarchicalGridPinFirstGroupToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var columnGroup = this.hierarchicalGrid.ActualColumns[1];
        columnGroup.Pinned = !columnGroup.Pinned;
    }
    //end eventHandler
}