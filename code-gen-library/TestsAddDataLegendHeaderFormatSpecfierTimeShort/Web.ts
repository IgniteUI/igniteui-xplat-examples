//begin imports
import { IgcDataLegendComponent } from 'igniteui-webcomponents-charts';
import { IgcDateTimeFormatSpecifier } from 'igniteui-webcomponents-core';

//end imports

export class TestsAddDataLegendHeaderFormatSpecfierTimeShort
{

    //begin eventHandler
    public testsAddDataLegendHeaderFormatSpecfierTimeShort(){
	   var legend = CodeGenHelper.getDescription<IgcDataLegendComponent>("secondary");		
		const spec: IgcDateTimeFormatSpecifier = new IgcDateTimeFormatSpecifier();
		spec.locale = "en-US";
		spec.timeStyle = "short";
		legend.headerFormatSpecifiers = [spec];
    }
    //end eventHandler

}