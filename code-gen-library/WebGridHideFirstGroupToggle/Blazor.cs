using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class WebGridHideFirstGroupToggle
{
    //begin eventHandler
    public void WebGridHideFirstGroupToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var columnGroup = this.grid.ActualColumns[1];
        columnGroup.Hidden = !columnGroup.Hidden;
    }
    //end eventHandler
}