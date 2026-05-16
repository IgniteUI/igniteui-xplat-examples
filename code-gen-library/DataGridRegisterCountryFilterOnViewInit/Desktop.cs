//begin imports
using Infragistics.Controls.Grids;
//end imports

public class DataGridRegisterCountryFilterOnViewInit
{
    //begin eventHandler
    //WPF: System.Action
    public void DataGridRegisterCountryFilterOnViewInit()
    {
        var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
        var operand = new FilterOperand
        {
            EditorType = EditorType.Text,
            DisplayName = "(Custom) In Code Filter"
        };
        operand.FilterRequested += OnFilter;
        grid.ActualColumns[0].FilterOperands.Add(operand);
    }

    private void OnFilter(object sender, GridCustomFilterRequestedEventArgs args)
    {
        var prop = args.FilterFactory.Property(args.Column.Field);
        args.Expression = prop.IsEqualTo("France");
    }
    //end eventHandler
}
