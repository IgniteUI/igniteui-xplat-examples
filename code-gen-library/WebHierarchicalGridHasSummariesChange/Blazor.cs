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
        var column1 = hierarchicalGrid.ActualColumnList[1];
        var column2 = hierarchicalGrid.ActualColumnList[3];
        var column3 = hierarchicalGrid.ActualColumnList[4];

        column1.HasSummary = newValue;
        column2.HasSummary = newValue;
        column3.HasSummary = newValue;
    }
    //end eventHandler
}