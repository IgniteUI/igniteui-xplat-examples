//begin imports
import { IgxPropertyEditorPanelComponent, PropertyEditorValueType, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
//end imports


export class PropertyEditorInitAggregationsOnViewInit {

    //begin eventHandler
    public propertyEditorInitAggregationsOnViewInit(): void {
	
        var editor = CodeGenHelper.getDescription<IgxPropertyEditorPanelComponent>("editor");
        var initialSummariesDropdown = new IgxPropertyEditorPropertyDescriptionComponent();
        var sortGroupsDropdown = new IgxPropertyEditorPropertyDescriptionComponent();

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

        initialSummariesDropdown.changed.subscribe((event: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }) => { 

            var chart = CodeGenHelper.getDescription<IgcCategoryChart>("content");
            var intialSummaryVal = event.args.newValue.toString();
            chart.initialSummaries = intialSummaryVal;
        });

        sortGroupsDropdown.changed.subscribe((event: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }) => { 
        
            var chart = CodeGenHelper.getDescription<IgcCategoryChart>("content");
            var groupSortsVal = event.args.newValue.toString();
            chart.groupSorts = groupSortsVal;
        });
    }
    //end eventHandler

}