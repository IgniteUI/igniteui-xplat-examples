//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridRegisterCountryFilterOnViewInit
{
    //begin eventHandler
    public void DataGridRegisterCountryFilterOnViewInit()
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        grid.ActualColumns[0].FilterOperands.Add(new IgbFilterOperand
        {
            EditorType = EditorType.Text,
            DisplayName = "(Custom) In Code Filter",
            FilterRequested = OnFilter
        });
    }

    private IgbFilterExpression OnFilter(IgbGridCustomFilterRequestedEventArgs args)
    {
        var prop = args.FilterFactory.Property(args.Column.Field);
        return prop.IsEqualTo("France");
    }
    //end eventHandler
}
