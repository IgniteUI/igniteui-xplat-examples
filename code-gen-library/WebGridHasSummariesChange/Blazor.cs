using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class WebGridHasSummariesChange
{
    //begin eventHandler
    public void WebGridHasSummariesChange(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        bool newValue = bool.Parse(args.NewValue.ToString());

        var column1 = this.grid.ActualColumns[3];
        var column2 = this.grid.ActualColumns[5];

        column1.HasSummary = newValue;
        column2.HasSummary = newValue;
    }
    //end eventHandler
}