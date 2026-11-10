
//begin imports
import { IChartTooltipProps } from 'igniteui-webcomponents-core';
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { FunctionComponent } from 'react';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';


export class TestsAddStaticTextTooltip
{

   //begin eventHandler
   public  testsAddStaticTextTooltip(){
        var content = CodeGenHelper.getDescription<any>("content");
        var template = (props: IChartTooltipProps) => (
          <div className="ui-chart-default-tooltip-content">
              text
          </div>
        );
        // A category chart makes its own series and gives each of them its tooltip template.
        if (content instanceof IgrCategoryChart){
            content.tooltipTemplate = template;
            return;
        }
        var chart = content as IgrDataChart;
        for(let i=0;i<chart.series.count;i++){
            let series = chart.series.item(i);
            if (!series.isLayer){
                series.tooltipTemplate = template;
            }
        }
    }
	//end eventHandler

}
