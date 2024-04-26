using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class WebTreeGridHasSummariesChange
{
    //begin eventHandler
    public void WebTreeGridHasSummariesChange(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        bool newValue = bool.Parse(args.NewValue.ToString());

        var column1 = this.treeGrid.ActualColumns[1];
        var column2 = this.treeGrid.ActualColumns[2];
        var column3 = this.treeGrid.ActualColumns[4];

        column1.HasSummary = newValue;
        column2.HasSummary = newValue;
        column3.HasSummary = newValue;
    }
    //end eventHandler
}