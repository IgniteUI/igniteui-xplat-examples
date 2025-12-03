using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class WebTreeGridHasSummariesChange
{
    //begin eventHandler
    public void WebTreeGridHasSummariesChange(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        bool newValue = bool.Parse(args.NewValue.ToString());

        var treeGrid = CodeGenHelper.GetDescription<IgbTreeGrid>("content");
        var column1 = treeGrid.GetColumns().ElementAt(1);
        var column2 = treeGrid.GetColumns().ElementAt(2);
        var column3 = treeGrid.GetColumns().ElementAt(4);

        column1.HasSummary = newValue;
        column2.HasSummary = newValue;
        column3.HasSummary = newValue;
    }
    //end eventHandler
}