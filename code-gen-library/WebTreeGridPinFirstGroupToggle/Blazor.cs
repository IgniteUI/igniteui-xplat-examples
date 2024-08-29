using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class WebTreeGridPinFirstGroupToggle
{
    //begin eventHandler
    public void WebTreeGridPinFirstGroupToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var columnGroup = CodeGenHelper.GetDescription<IgbTreeGrid>("content").ActualColumnList[1];
        columnGroup.Pinned = !columnGroup.Pinned;
    }
    //end eventHandler
}