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

      var matcher = new IgrSeriesMatcher();
			var data = CodeGenHelper.findByName<any[]>("energyRenewableConsumption");
			
      var selection = new IgrChartSelection();
			selection.item = data[1];
			matcher.memberPath = "hydro";
			matcher.memberPathType = "ValueMemberPath";
			selection.matcher = matcher;
			chart.selectedSeriesItems.add(selection);

    	var selection2 = new IgrChartSelection();
			selection2.item = data[2];
			matcher.memberPath = "wind";
			matcher.memberPathType = "ValueMemberPath";
			selection2.matcher = matcher;

			chart.selectedSeriesItems.add(selection2);

		}, 100);
    }
    //end eventHandler

}