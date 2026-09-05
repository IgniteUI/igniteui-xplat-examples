//begin imports
//end imports

public class PropertyEditorInitAggregationsOnViewInit {

    //begin eventHandler
    public func propertyEditorInitAggregationsOnViewInit() {

        var editor = CodeGenHelper.getDescription(IgsPropertyEditorPanel.self, "editor")
        var initialSummariesDropdown = IgsPropertyEditorPropertyDescription()
        var sortGroupsDropdown = IgsPropertyEditorPropertyDescription()

        initialSummariesDropdown.label = "Initial Summaries"
        initialSummariesDropdown.valueType = PropertyEditorValueType.EnumValue
        initialSummariesDropdown.shouldOverrideDefaultEditor = true
        initialSummariesDropdown.dropDownNames = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales"]
        initialSummariesDropdown.dropDownValues = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales"]

        sortGroupsDropdown.label = "Sort Groups"
        sortGroupsDropdown.valueType = IgsPropertyEditorValueType.EnumValue
        sortGroupsDropdown.shouldOverrideDefaultEditor = true
        sortGroupsDropdown.dropDownNames = ["Sales Asc", "Sales Desc"]
        sortGroupsDropdown.dropDownValues = ["Sales Asc", "Sales Desc"]

        editor.properties.append(initialSummariesDropdown)
        editor.properties.append(sortGroupsDropdown)

        initialSummariesDropdown.changed = self.editorChangeUpdateInitialSummaries
        sortGroupsDropdown.changed = self.editorChangeUpdateGroupSorts
    }

    public func editorChangeUpdateInitialSummaries(sender: Any?, args: IgsPropertyEditorPropertyDescriptionChangedEventArgs?) {

        var chart = CodeGenHelper.getDescription(IgsCategoryChart.self, "content")
        var intialSummaryVal = String(describing: args!.newValue)
        chart.initialSummaries = intialSummaryVal
    }

    public func editorChangeUpdateGroupSorts(sender: Any?, args: IgsPropertyEditorPropertyDescriptionChangedEventArgs?) {
        var chart = CodeGenHelper.getDescription(IgsCategoryChart.self, "content")
        var groupSortsVal = String(describing: args!.newValue)
        chart.groupSorts = groupSortsVal
    }
    //end eventHandler
}
