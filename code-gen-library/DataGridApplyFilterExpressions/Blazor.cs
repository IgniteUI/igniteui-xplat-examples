//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridApplyFilterExpressions
{
    private static FilterFactory _factory = new FilterFactory();

    //begin eventHandler
    public void DataGridApplyFilterExpressions(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        var columnEditor = CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("FilterColumnEditor");
        var modeEditor = CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("FilterModeEditor");
        var textEditor = CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("FilterTextEditor");

        var filterColumn = columnEditor.PrimitiveValue as string;
        var filterMode = modeEditor.PrimitiveValue as string;
        var filterText = (textEditor.PrimitiveValue as string) ?? "";

        grid.FilterExpressions.Clear();
        if (filterText == "")
        {
            return;
        }

        var expression = filterText.ToUpper();
        var column = _factory.Property(filterColumn).ToUpper();

        IgbFilterExpression filter;
        switch (filterMode)
        {
            case "Contains":   filter = column.Contains(expression);   break;
            case "StartsWith": filter = column.StartsWith(expression); break;
            case "EndsWith":   filter = column.EndsWith(expression);   break;
            default:           filter = column.Contains(expression);   break;
        }

        grid.FilterExpressions.Add(filter);
    }
    //end eventHandler
}
