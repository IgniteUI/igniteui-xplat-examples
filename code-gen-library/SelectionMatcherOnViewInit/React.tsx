//begin imports
import { IgrCategoryChart, IgrChartSelection, IgrSeriesMatcher } from 'igniteui-react-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class SelectionMatcherOnViewInit
{

	//begin eventHandler
	private _timer: ReturnType<typeof setInterval>;

    public selectionMatcherOnViewInit(): void {
        
		var chart = CodeGenHelper.getDescription<IgrCategoryChart>("content");

		this._timer = setInterval(() => {
		var data = CodeGenHelper.findByName<any[]>("energyRenewableConsumption");

        var matcher = new IgrSeriesMatcher();
			
        var selection = new IgrChartSelection();
			selection.item = data[1];
			matcher.memberPath = "hydro";
			matcher.memberPathType = "ValueMemberPath";
			selection.matcher = matcher;
			chart.selectedSeriesItems.add(selection);

		var matcher2 = new IgrSeriesMatcher();

    	var selection2 = new IgrChartSelection();
			selection2.item = data[2];
			matcher2.memberPath = "wind";
			matcher2.memberPathType = "ValueMemberPath";
			selection2.matcher = matcher2;

			chart.selectedSeriesItems.add(selection2);

		}, 100);
    }
    //end eventHandler

}