//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPanel;
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescription;
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
import com.infragistics.mobile.controls.IgaCategoryChart;
import com.infragistics.mobile.controls.IgaPropertyEditorValueType;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper;

public class PropertyEditorInitAggregationsOnViewInit {

    //begin eventHandler
    public fun propertyEditorInitAggregationsOnViewInit() {

        var editor = CodeGenHelper.getDescription<IgaPropertyEditorPanel>("editor");
        var initialSummariesDropdown = IgaPropertyEditorPropertyDescription();
        var sortGroupsDropdown = IgaPropertyEditorPropertyDescription();

        initialSummariesDropdown.label = "Initial Summaries";
        initialSummariesDropdown.valueType = PropertyEditorValueType.EnumValue;
        initialSummariesDropdown.shouldOverrideDefaultEditor = true;
        initialSummariesDropdown.dropDownNames = arrayOf("Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" );
        initialSummariesDropdown.dropDownValues = arrayOf("Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" );

        sortGroupsDropdown.label = "Sort Groups"
        sortGroupsDropdown.valueType = IgaPropertyEditorValueType.EnumValue;
        sortGroupsDropdown.shouldOverrideDefaultEditor = true;
        sortGroupsDropdown.dropDownNames = arrayOf("Sales Asc", "Sales Desc");
        sortGroupsDropdown.dropDownValues = arrayOf("Sales Asc","Sales Desc");

        editor.properties.add(initialSummariesDropdown);
        editor.properties.add(sortGroupsDropdown);

        initialSummariesDropdown.changed = this.editorChangeUpdateInitialSummaries;
        sortGroupsDropdown.changed = this.editorChangeUpdateGroupSorts;
    }

	public fun editorChangeUpdateInitialSummaries(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs) {

        var chart = CodeGenHelper.getDescription<IgaCategoryChart>("content");
        var intialSummaryVal = args.newValue.toString();
        chart.initialSummaries = intialSummaryVal;
    }

    public fun editorChangeUpdateGroupSorts(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs) {
        var chart = CodeGenHelper.getDescription<IgaCategoryChart>("content");
        var groupSortsVal = args.newValue.toString();
        chart.groupSorts = groupSortsVal;
    }	
    //end eventHandler

}