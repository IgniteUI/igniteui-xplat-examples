//begin imports
import 'package:igniteui_flutter_charts/src/igf-category-chart.dart' show IgfCategoryChartState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-panel.dart' show IgfPropertyEditorPanelState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description.dart' show IgfPropertyEditorPropertyDescriptionState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
import 'package:igniteui_flutter_layouts/src/PropertyEditorValueType.dart' show PropertyEditorValueType;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports
//begin eventHandler
void propertyEditorInitAggregationsOnViewInit() {
    var editor = CodeGenHelper.getDescription<IgfPropertyEditorPanelState>("editor")!;
    var initialSummariesDropdown = IgfPropertyEditorPropertyDescriptionState();
    var sortGroupsDropdown = IgfPropertyEditorPropertyDescriptionState();
    initialSummariesDropdown.label = "Initial Summaries";
    initialSummariesDropdown.valueType = PropertyEditorValueType.enumValue;
    initialSummariesDropdown.shouldOverrideDefaultEditor = true;
    initialSummariesDropdown.dropDownNames = <String?>["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales"];
    initialSummariesDropdown.dropDownValues = <String?>["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales"];
    sortGroupsDropdown.label = "Sort Groups";
    sortGroupsDropdown.valueType = PropertyEditorValueType.enumValue;
    sortGroupsDropdown.shouldOverrideDefaultEditor = true;
    sortGroupsDropdown.dropDownNames = <String?>["Sales Asc", "Sales Desc"];
    sortGroupsDropdown.dropDownValues = <String?>["Sales Asc", "Sales Desc"];
    editor.properties!.add(initialSummariesDropdown);
    editor.properties!.add(sortGroupsDropdown);
    // Dart carries the handler as a property rather than an event, so this is
    // an assignment where the C# adds to the invocation list. One handler each.
    initialSummariesDropdown.changed = this.editorChangeUpdateInitialSummaries;
    sortGroupsDropdown.changed = this.editorChangeUpdateGroupSorts;
}

void editorChangeUpdateInitialSummaries(IgfPropertyEditorPropertyDescriptionState sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
    var chart = CodeGenHelper.getDescription<IgfCategoryChartState>("content")!;
    var intialSummaryVal = args.newValue.toString();
    chart.initialSummaries = intialSummaryVal;
}

void editorChangeUpdateGroupSorts(IgfPropertyEditorPropertyDescriptionState sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
    var chart = CodeGenHelper.getDescription<IgfCategoryChartState>("content")!;
    var groupSortsVal = args.newValue.toString();
    chart.groupSorts = groupSortsVal;
}
//end eventHandler
