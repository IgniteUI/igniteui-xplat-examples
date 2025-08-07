//begin imports
import { IgcDataLegendComponent } from 'igniteui-webcomponents-charts';
import { IgcDateTimeFormatSpecifier } from 'igniteui-webcomponents-core';
//end imports

export class TestsAddDataLegendHeaderFormatSpecfierLongWeekday
{

    //begin eventHandler
    public testsAddDataLegendHeaderFormatSpecfierLongWeekday(): void{
		// TODO: lond weekday cannot currently be set in WPF

		var legend = CodeGenHelper.getDescription<IgcDataLegendComponent>("secondary");
        const spec: IgcDateTimeFormatSpecifier = new IgcDateTimeFormatSpecifier();
        spec.locale = "en-US";
        spec.dateStyle = "short";
        legend.headerFormatSpecifiers = [spec];

    }
    //end eventHandler

}