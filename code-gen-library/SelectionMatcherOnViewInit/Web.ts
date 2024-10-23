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
			let selection: IgcChartSelection = new IgcChartSelection();
			selection.item = this.energyRenewableConsumption[1];

			let matcher: IgcSeriesMatcher = new IgcSeriesMatcher();
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