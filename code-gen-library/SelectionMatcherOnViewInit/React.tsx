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
			var selection = new IgrChartSelection();
			selection.item = this.energyRenewableConsumption[1];

			var matcher = new IgrSeriesMatcher();
			matcher.memberPath = "solar";
			matcher.memberPathType = "ValueMemberPath";
			selection.matcher = matcher;

			chart.selectedSeriesItems.add(selection);

			selection.item = this.energyRenewableConsumption[1];
			matcher.memberPath = "hydro";
			matcher.memberPathType = "ValueMemberPath";
			selection.matcher = matcher;

			chart.selectedSeriesItems.add(selection);

		}, 100);
    }
    //end eventHandler

}