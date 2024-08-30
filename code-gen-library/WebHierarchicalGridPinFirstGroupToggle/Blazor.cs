using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class WebHierarchicalGridPinFirstGroupToggle
{
    //begin eventHandler
    public void WebHierarchicalGridPinFirstGroupToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var columnGroup = CodeGenHelper.GetDescription<IgbHierarchicalGrid>("content").ActualColumnList[1];
        columnGroup.Pinned = !columnGroup.Pinned;
    }
    //end eventHandler
}