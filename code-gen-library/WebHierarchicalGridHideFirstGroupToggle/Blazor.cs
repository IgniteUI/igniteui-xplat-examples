using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class WebHierarchicalGridHideFirstGroupToggle
{
    //begin eventHandler
    public void WebHierarchicalGridHideFirstGroupToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var columnGroup = CodeGenHelper.GetDescription<IgbHierarchicalGrid>("content").ActualColumns[1];
        columnGroup.Hidden = !columnGroup.Hidden;
    }
    //end eventHandler
}