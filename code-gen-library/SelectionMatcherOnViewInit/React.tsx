//begin imports
import { IgrCategoryChart, IgrDataChart, IgrChartSelection, IgrSeriesMatcher } from 'igniteui-react-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class SelectionMatcherOnViewInit
{

	//begin eventHandler

    public selectionMatcherOnViewInit(): void {
        
		// Shared by the category chart and data chart samples, which bind the same data.
		var content = CodeGenHelper.getDescription<any>("content");
		var selectedItems = content instanceof IgrCategoryChart
			? content.selectedSeriesItems
			: (content as IgrDataChart).selectedSeriesItems;

		var data = CodeGenHelper.findByName<any[]>("energyRenewableConsumption");

        var matcher = new IgrSeriesMatcher();
			
        var selection = new IgrChartSelection();
			selection.item = data[1];
			matcher.memberPath = "hydro";
			matcher.memberPathType = "ValueMemberPath";
			selection.matcher = matcher;
			selectedItems.add(selection);

		var matcher2 = new IgrSeriesMatcher();

    	var selection2 = new IgrChartSelection();
			selection2.item = data[2];
			matcher2.memberPath = "wind";
			matcher2.memberPathType = "ValueMemberPath";
			selection2.matcher = matcher2;

			selectedItems.add(selection2);

    }
    //end eventHandler

}