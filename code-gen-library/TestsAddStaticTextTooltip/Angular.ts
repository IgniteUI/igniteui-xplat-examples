//begin imports
import { IgxDataChartComponent } from 'igniteui-angular-charts';
//import { html } from 'lit';
//end imports

export class TestsAddStaticTextTooltip
{

    //begin eventHandler
    public testsAddStaticTextTooltip(){
		var chart = CodeGenHelper.getDescription<IgxDataChartComponent>("content");
        for(let i=0;i<chart.series.count;i++)
        {
			var series = chart.series.item(i);
            if (!series.isLayer)
    		{
    			
    			/*series.tooltipTemplate = ((context: any)=>{
						return html`<div class="ui-chart-default-tooltip-content">text</div>`;
				}); */
    		}
        }
    }
    //end eventHandler

}