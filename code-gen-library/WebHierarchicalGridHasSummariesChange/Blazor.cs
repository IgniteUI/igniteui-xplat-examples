using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class WebHierarchicalGridHasSummariesChange
{
    //begin eventHandler
    public void WebHierarchicalGridHasSummariesChange(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        bool newValue = bool.Parse(args.NewValue.ToString());

        var hierarchicalGrid = CodeGenHelper.GetDescription<IgbHierarchicalGrid>("content");
        var column1 = hierarchicalGrid.ActualColumns[1];
        var column2 = hierarchicalGrid.ActualColumns[3];
        var column3 = hierarchicalGrid.ActualColumns[4];

        column1.HasSummary = newValue;
        column2.HasSummary = newValue;
        column3.HasSummary = newValue;
    }
    //end eventHandler
}