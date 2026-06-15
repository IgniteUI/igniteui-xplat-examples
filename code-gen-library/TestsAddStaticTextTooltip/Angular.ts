//begin imports
import { IgxDataChartComponent } from 'igniteui-angular-charts';
import { TemplateRef } from '@angular/core';
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
    			 var tmpl = CodeGenHelper.findByName<object>("staticTooltip") as TemplateRef<any>; // resolves the TemplateRef
				 if (tmpl == undefined)
                     console.log("Could not find template reference for staticTooltip");
				 series.tooltipTemplate = tmpl ; 
    		}
        }
    }
    //end eventHandler

}