//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Grids;
using Infragistics.Core.Controls.DataSource;
//end imports

public class DataGridApplyFilterExpressions
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void DataGridApplyFilterExpressions(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var factory = new FilterFactory();
        var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
        var columnEditor = CodeGenHelper.FindByName<PropertyEditorPropertyDescription>("FilterColumnEditor");
        var modeEditor = CodeGenHelper.FindByName<PropertyEditorPropertyDescription>("FilterModeEditor");
        var textEditor = CodeGenHelper.FindByName<PropertyEditorPropertyDescription>("FilterTextEditor");

        var filterColumn = columnEditor.PrimitiveValue as string;
        var filterMode = modeEditor.PrimitiveValue as string;
        var filterText = (textEditor.PrimitiveValue as string) ?? "";

        grid.FilterExpressions.Clear();
        if (filterText == "")
        {
            return;
        }

        var expression = filterText.ToUpper();
        var column = factory.Property(filterColumn).ToUpper();

        FilterExpression filter;
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
