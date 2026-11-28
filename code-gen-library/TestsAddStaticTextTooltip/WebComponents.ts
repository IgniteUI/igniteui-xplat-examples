//begin imports
import { IgcCategoryChartComponent, IgcDataChartComponent } from 'igniteui-webcomponents-charts';
import { html } from 'lit';
//end imports

export class TestsAddStaticTextTooltip
{

    //begin eventHandler
    public testsAddStaticTextTooltip(){
		var content = CodeGenHelper.getDescription<any>("content");
		var template = ((context: any)=>{
				return html`<div class="ui-chart-default-tooltip-content">text</div>`;
		});
		// A category chart makes its own series and gives each of them its tooltip template.
		if (content instanceof IgcCategoryChartComponent)
		{
			content.tooltipTemplate = template;
			return;
		}
		var chart = content as IgcDataChartComponent;
        for(let i=0;i<chart.series.count;i++)
        {
			var series = chart.series.item(i);
            if (!series.isLayer)
    		{
    			series.tooltipTemplate = template;
    		}
        }
    }
    //end eventHandler

}
