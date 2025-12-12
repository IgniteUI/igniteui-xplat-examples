
//begin imports
import { IChartTooltipProps } from 'igniteui-webcomponents-core';
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
import { FunctionComponent } from 'react';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';


export class TestsAddStaticTextTooltip
{

   //begin eventHandler
   public  testsAddStaticTextTooltip(){
        var chart = CodeGenHelper.getDescription<IgrDataChart>("content");
        for(let i=0;i<chart.series.count;i++){
            let series = chart.series.item(i);
            if (!series.isLayer){
                series.tooltipTemplate = (props: IChartTooltipProps) => (
                  <div className="ui-chart-default-tooltip-content">
                      text
                  </div>
                )
            } 
        }
    } 
	//end eventHandler

}