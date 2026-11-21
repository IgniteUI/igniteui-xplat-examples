//begin imports
import { IgcCategoryChartComponent, IgcDataChartComponent, IgcChartSelection, IgcSeriesMatcher } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class SelectionMatcherOnViewInit
{

	//begin eventHandler

    public selectionMatcherOnViewInit(): void {
        
		// Shared by the category chart and data chart samples, which bind the same data.
		var content = CodeGenHelper.getDescription<any>("content");
		var selectedItems = content instanceof IgcCategoryChartComponent
			? content.selectedSeriesItems
			: (content as IgcDataChartComponent).selectedSeriesItems;

		var data = CodeGenHelper.findByName<any[]>("energyRenewableConsumption");
		let matcher: IgcSeriesMatcher = new IgcSeriesMatcher();

		let selection: IgcChartSelection = new IgcChartSelection();
		selection.item = data[1];
		matcher.memberPath = "hydro";
		matcher.memberPathType = "ValueMemberPath";
		selection.matcher = matcher;
		selectedItems.add(selection);

		let matcher2: IgcSeriesMatcher = new IgcSeriesMatcher();
		let selection2: IgcChartSelection = new IgcChartSelection();
		selection2.item = data[2];
		matcher2.memberPath = "wind";
		matcher2.memberPathType = "ValueMemberPath";
		selection2.matcher = matcher2;

		selectedItems.add(selection2);
    }
    //end eventHandler

}
