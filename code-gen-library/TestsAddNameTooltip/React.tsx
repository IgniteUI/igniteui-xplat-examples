//begin imports
import { IChartTooltipProps } from 'igniteui-react-core';
import { IgrDataChart } from 'igniteui-react-charts';
//end imports

import { CodeGenHelper } from 'igniteui-react-core';

export class TestsAddNameTooltip
{

    //begin eventHandler
    public  testsAddNameTooltip(): void {
		
		var chart = CodeGenHelper.getDescription<IgrDataChart>("content");
        for(let i=0;i<chart.series.count;i++){
            let series = chart.series.item(i);
            if (!series.isLayer){
                series.tooltipTemplate = (context: IChartTooltipProps) => (
                 <div className="ui-chart-default-tooltip-content">
						<div>{context.dataContext.item.Name}</div>
				 </div>
				)
            }
        }
    }	
    //end eventHandler

}