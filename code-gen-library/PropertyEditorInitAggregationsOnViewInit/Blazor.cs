//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class PropertyEditorInitAggregationsOnViewInit
{
    //begin eventHandler
    public void PropertyEditorInitAggregationsOnViewInit()
	{
		
		this.editor.EnsureReady().ContinueWith(new Action<Task>((e) =>
		{
			var editor = CodeGenHelper.GetDescription<IgbPropertyEditorPanel>("editor");
        	var initialSummaries = editor.Properties.Where((p) => p.Label == "Initial Summaries").First;
        	initialSummaries.DropDownNames = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" ];
        	initialSummaries.DropDownValues = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales"];

			var groupSorts = editor.Properties.Where((p) => p.Label == "Sort Groups").First;
        	groupSorts.DropDownNames = ["Sales Desc", "Sales Asc"];
        	groupSorts.DropDownValues = ["Sales Desc", "Sales Asc"];
		}));
		
	}
    //end eventHandler
}