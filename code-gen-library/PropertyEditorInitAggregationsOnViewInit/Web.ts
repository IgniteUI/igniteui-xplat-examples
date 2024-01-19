//begin imports
import { IgcPropertyEditorPanelComponent } from 'igniteui-webcomponents-layouts';
//end imports


export class PropertyEditorInitAggregationsOnViewInit {

    //begin eventHandler
    public propertyEditorInitAggregationsOnViewInit(): void {
	
        var editor = CodeGenHelper.getDescription<IgcPropertyEditorPanelComponent>("editor");
        var initialSummaries = editor.actualProperties.filter((p) => p.label == "Initial Summaries")[0];
        initialSummaries.dropDownNames = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" ];
        initialSummaries.dropDownValues = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" ];
		
    }
    //end eventHandler

}