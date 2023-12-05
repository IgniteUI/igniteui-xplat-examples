using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class WebTreeGridHideFirstGroupToggle
{
    //begin eventHandler
    public void WebTreeGridHideFirstGroupToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var columnGroup = this.treeGrid.ActualColumns[1];
        columnGroup.Hidden = !columnGroup.Hidden;
    }
    //end eventHandler
}