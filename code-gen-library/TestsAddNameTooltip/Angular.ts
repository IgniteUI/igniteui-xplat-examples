//begin imports
import { IgxDataChartComponent } from 'igniteui-angular-charts';
//import { html } from 'lit';
//end imports

export class TestsAddNameTooltip
{

   //begin eventHandler
    public testsAddNameTooltip(){
		var chart = CodeGenHelper.getDescription<IgxDataChartComponent>("content");
        for(let i=0;i<chart.series.count;i++)
        {
			var series = chart.series.item(i);
            if (!series.isLayer)
    		{
    			
    			/*series.tooltipTemplate = ((context: any)=>{
						return html`<div class="ui-chart-default-tooltip-content">${context.item.Name}</div>`;
				}); */
    		}
        }
    }
    //end eventHandler

}