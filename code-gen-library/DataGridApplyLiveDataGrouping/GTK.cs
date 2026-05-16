//begin imports
using Infragistics.Core.Controls.DataSource;
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Grids;
//end imports

public class DataGridApplyLiveDataGrouping
{
    //begin eventHandler
    public bool UseRowGrouping = true;

    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void DataGridApplyLiveDataGrouping(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        this.UseRowGrouping = args.NewValue is bool b && b;
        if (this.UseRowGrouping)
            this.OnGridGroupingAdd();
        else
            this.OnGridGroupingRemove();
    }

    public void OnGridGroupingRemove()
    {
        var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
        if (grid == null) return;
        grid.GroupDescriptions.Clear();
    }

    public void OnGridGroupingAdd()
    {
        var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
        if (grid == null) return;
        grid.GroupDescriptions.Add(new ColumnGroupDescription { Field = "Category", SortDirection = ListSortDirection.Descending });
        grid.GroupDescriptions.Add(new ColumnGroupDescription { Field = "Type",     SortDirection = ListSortDirection.Descending });
        grid.GroupDescriptions.Add(new ColumnGroupDescription { Field = "Contract", SortDirection = ListSortDirection.Descending });
    }
    //end eventHandler
}
