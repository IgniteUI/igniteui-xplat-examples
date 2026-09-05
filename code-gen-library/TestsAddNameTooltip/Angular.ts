//begin imports
import { IgxDataChartComponent } from 'igniteui-angular-charts';
import { TemplateRef } from '@angular/core';
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
    			
    			 var tmpl = CodeGenHelper.findByName<object>("nameTooltip") as TemplateRef<any>; // resolves the TemplateRef
				 if (tmpl == undefined)
					console.log("Could not find template reference for nameTooltip");
				 series.tooltipTemplate = tmpl    ; 
    		}
        }
    }
    //end eventHandler

}