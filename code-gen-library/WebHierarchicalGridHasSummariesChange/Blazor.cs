using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class WebHierarchicalGridHasSummariesChange
{
    //begin eventHandler
    public void WebHierarchicalGridHasSummariesChange(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        bool newValue = bool.Parse(args.NewValue.ToString());

        var column1 = this.grid.ActualColumns[1];
        var column2 = this.grid.ActualColumns[3];
        var column2 = this.grid.ActualColumns[4];

        column1.HasSummary = newValue;
        column2.HasSummary = newValue;
        column2.HasSummary = newValue;
    }
    //end eventHandler
}