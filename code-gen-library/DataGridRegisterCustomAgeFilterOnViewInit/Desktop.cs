//begin imports
using Infragistics.Controls.Grids;
//end imports

public class DataGridRegisterCustomAgeFilterOnViewInit
{
    //begin eventHandler
    //WPF: System.Action
    public void DataGridRegisterCustomAgeFilterOnViewInit()
    {
        var grid = CodeGenHelper.GetDescription<XamXGrid>("content");
        grid.ActualColumns[1].FilterOperands.Add(new CustomAgeFilter());
        var salesFilter = new FilterOperand {
            EditorType = EditorType.Numeric,
            IsInputRequired = false,
            DisplayName = "(Custom) In-Line Filter"
        };
        salesFilter.FilterRequested += (sender, args) => {
            args.Expression = args.FilterFactory.Property("Sales").IsLessThanOrEqualTo(300000);
        };
        grid.ActualColumns[2].FilterOperands.Add(salesFilter);
    }

    public class CustomAgeFilter : FilterOperand
    {
        public CustomAgeFilter()
        {
            DisplayName = "Filter As Class";
            IsInputRequired = false;
            EditorType = EditorType.Numeric;
            FilterRequested += OnFilter;
        }

        private void OnFilter(object sender, GridCustomFilterRequestedEventArgs args)
        {
            var prop = args.FilterFactory.Property(args.Column.Field);
            args.Expression = prop.IsEqualTo(30);
        }
    }
    //end eventHandler
}
