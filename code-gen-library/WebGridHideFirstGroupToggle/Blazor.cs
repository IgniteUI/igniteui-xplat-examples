using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class WebGridHideFirstGroupToggle
{
    //begin eventHandler
    public void WebGridHideFirstGroupToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var columnGroup = CodeGenHelper.GetDescription<IgbGrid>("content").ActualColumns[1];
        columnGroup.Hidden = !columnGroup.Hidden;
    }
    //end eventHandler
}