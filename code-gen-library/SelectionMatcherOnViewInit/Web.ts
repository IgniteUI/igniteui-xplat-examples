//begin imports
import { IgcCategoryChartComponent, IgcChartSelection, IgcSeriesMatcher } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class SelectionMatcherOnViewInit
{

	//begin eventHandler
	private _timer: ReturnType<typeof setInterval>;

    public selectionMatcherOnViewInit(): void {
        
		var chart = CodeGenHelper.getDescription<IgcCategoryChartComponent>("content");

		this._timer = setInterval(() => {
			var data = CodeGenHelper.findByName<any[]>("energyRenewableConsumption");
			let matcher: IgcSeriesMatcher = new IgcSeriesMatcher();

			let selection: IgcChartSelection = new IgcChartSelection();
			selection.item = data[1];
			matcher.memberPath = "hydro";
			matcher.memberPathType = "ValueMemberPath";
			selection.matcher = matcher;
			chart.selectedSeriesItems.add(selection);

			let selection2: IgcChartSelection = new IgcChartSelection();
			selection2.item = data[2];
			matcher.memberPath = "wind";
			matcher.memberPathType = "ValueMemberPath";
			selection2.matcher = matcher;

			chart.selectedSeriesItems.add(selection2);

        }, 100);
    }
    //end eventHandler

}