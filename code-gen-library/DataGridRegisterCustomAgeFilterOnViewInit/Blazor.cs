//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridRegisterCustomAgeFilterOnViewInit
{
    //begin eventHandler
    public void DataGridRegisterCustomAgeFilterOnViewInit()
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        grid.ActualColumns[1].FilterOperands.Add(new CustomAgeFilter());
    }
    //end eventHandler
}

public class CustomAgeFilter : IgbFilterOperand
{
    public CustomAgeFilter()
    {
        DisplayName = "Filter As Class";
        IsInputRequired = false;
        EditorType = EditorType.Numeric;
        FilterRequested = OnFilter;
    }

    public IgbFilterExpression OnFilter(IgbGridCustomFilterRequestedEventArgs args)
    {
        var prop = args.FilterFactory.Property(args.Column.Field);
        return prop.IsEqualTo(30);
    }
}
