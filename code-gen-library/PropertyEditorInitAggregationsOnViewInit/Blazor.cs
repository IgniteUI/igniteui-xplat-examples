//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class PropertyEditorInitAggregationsOnViewInit
{
    //begin eventHandler
    public void PropertyEditorInitAggregationsOnViewInit()
	{
		var editor = CodeGenHelper.GetDescription<IgbPropertyEditorPanel>("editor");
		editor.EnsureReady().ContinueWith(new Action<Task>((e) =>
		{
			var initialSummariesDropdown = new IgbPropertyEditorPropertyDescription();
			var sortGroupsDropdown = new IgbPropertyEditorPropertyDescription();
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
		}));

	}

	public void EditorChangeUpdateInitialSummaries(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
	{
		var chart = CodeGenHelper.GetDescription<IgbCategoryChart>("content");
		var intialSummaryVal = args.NewValue.ToString();
		chart.InitialSummaries = intialSummaryVal;
	}

	public void EditorChangeUpdateGroupSorts(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
	{    
		var chart = CodeGenHelper.GetDescription<IgbCategoryChart>("content");
		var groupSortsVal = args.NewValue.ToString();
		chart.GroupSorts = groupSortsVal;
	}
    //end eventHandler
}