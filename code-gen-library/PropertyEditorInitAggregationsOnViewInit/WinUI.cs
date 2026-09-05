//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
//end imports
	
public class PropertyEditorInitAggregationsOnViewInit
{
	
	//begin eventHandler
	//WPF: System.Action
	public void PropertyEditorInitAggregationsOnViewInit()
	{
		var editor = CodeGenHelper.GetDescription<XamPropertyEditorPanel>("editor");
        
		var initialSummariesDropdown = new PropertyEditorPropertyDescription();
		var sortGroupsDropdown = new PropertyEditorPropertyDescription();
		initialSummariesDropdown.Label = "Initial Summaries";
		initialSummariesDropdown.ValueType = PropertyEditorValueType.EnumValue;
		initialSummariesDropdown.ShouldOverrideDefaultEditor = true;
		initialSummariesDropdown.DropDownNames = new string[] { "Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" };
		initialSummariesDropdown.DropDownValues = new string[] { "Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" };
		sortGroupsDropdown.Label = "Sort Groups";
		sortGroupsDropdown.ValueType = PropertyEditorValueType.EnumValue;
		sortGroupsDropdown.ShouldOverrideDefaultEditor = true;
		sortGroupsDropdown.DropDownNames = new string[] { "Sales Asc", "Sales Desc" };
		sortGroupsDropdown.DropDownValues = new string[] { "Sales Asc", "Sales Desc" };

		editor.Properties.Add(initialSummariesDropdown);
		editor.Properties.Add(sortGroupsDropdown);


		initialSummariesDropdown.Changed += this.EditorChangeUpdateInitialSummaries;
		sortGroupsDropdown.Changed += this.EditorChangeUpdateGroupSorts;
	}
	
	public void EditorChangeUpdateInitialSummaries(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
	{
		var chart = CodeGenHelper.GetDescription<XamCategoryChart>("content");
		var intialSummaryVal = args.NewValue.ToString();
		chart.InitialSummaries = intialSummaryVal;
	}

	public void EditorChangeUpdateGroupSorts(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
	{    
		var chart = CodeGenHelper.GetDescription<XamCategoryChart>("content");
		var groupSortsVal = args.NewValue.ToString();
		chart.GroupSorts = groupSortsVal;
	}
    //end eventHandler
}