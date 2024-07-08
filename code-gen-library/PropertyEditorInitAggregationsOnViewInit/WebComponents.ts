//begin imports
import { IgcCategoryChartComponent } from 'igniteui-webcomponents-charts';
import { IgcPropertyEditorPanelComponent, IgcPropertyEditorPropertyDescriptionChangedEventArgs, IgcPropertyEditorPropertyDescriptionComponent, PropertyEditorValueType } from 'igniteui-webcomponents-layouts';
//end imports


export class PropertyEditorInitAggregationsOnViewInit {

    //begin eventHandler
    public propertyEditorInitAggregationsOnViewInit(): void {

        var editor = CodeGenHelper.getDescription<IgcPropertyEditorPanelComponent>("editor");
        var initialSummariesDropdown = new IgcPropertyEditorPropertyDescriptionComponent();
        var sortGroupsDropdown = new IgcPropertyEditorPropertyDescriptionComponent();

        initialSummariesDropdown.label = "Initial Summaries";
        initialSummariesDropdown.valueType = PropertyEditorValueType.EnumValue;
        initialSummariesDropdown.shouldOverrideDefaultEditor = true;
        initialSummariesDropdown.dropDownNames = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" ];
        initialSummariesDropdown.dropDownValues = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" ];

        sortGroupsDropdown.label = "Sort Groups"
        sortGroupsDropdown.valueType = PropertyEditorValueType.EnumValue;
        sortGroupsDropdown.shouldOverrideDefaultEditor = true;
        sortGroupsDropdown.dropDownNames = ["Sales Asc", "Sales Desc"];
        sortGroupsDropdown.dropDownValues = ["Sales Asc","Sales Desc"];

        editor.properties.add(initialSummariesDropdown);
        editor.properties.add(sortGroupsDropdown);

        this.editorChangeUpdateInitialSummaries = this.editorChangeUpdateInitialSummaries.bind(this);
        this.editorChangeUpdateGroupSorts = this.editorChangeUpdateGroupSorts.bind(this);
        initialSummariesDropdown.changed = this.editorChangeUpdateInitialSummaries;
        sortGroupsDropdown.changed = this.editorChangeUpdateGroupSorts;
    }

	public editorChangeUpdateInitialSummaries(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {

        var chart = CodeGenHelper.getDescription<IgcCategoryChartComponent>("content");
        var intialSummaryVal = args.newValue.toString();
        chart.initialSummaries = intialSummaryVal;
    }

    public editorChangeUpdateGroupSorts(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var chart = CodeGenHelper.getDescription<IgcCategoryChartComponent>("content");
        var groupSortsVal = args.newValue.toString();
        chart.groupSorts = groupSortsVal;
    }	
    //end eventHandler

}