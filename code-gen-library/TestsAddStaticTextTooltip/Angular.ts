//begin imports
import { IgxCategoryChartComponent, IgxDataChartComponent } from 'igniteui-angular-charts';
import { TemplateRef } from '@angular/core';
//end imports

export class TestsAddStaticTextTooltip
{

    //begin eventHandler
    public testsAddStaticTextTooltip(){
		var content = CodeGenHelper.getDescription<any>("content");
		var tmpl = CodeGenHelper.findByName<object>("staticTooltip") as TemplateRef<any>; // resolves the TemplateRef
		if (tmpl == undefined)
			console.log("Could not find template reference for staticTooltip");
		// A category chart makes its own series and gives each of them its tooltip template.
		if (content instanceof IgxCategoryChartComponent)
		{
			content.tooltipTemplate = tmpl;
			return;
		}
		var chart = content as IgxDataChartComponent;
        for(let i=0;i<chart.series.count;i++)
        {
			var series = chart.series.item(i);
            if (!series.isLayer)
    		{
				 series.tooltipTemplate = tmpl ;
    		}
        }
    }
    //end eventHandler

}
