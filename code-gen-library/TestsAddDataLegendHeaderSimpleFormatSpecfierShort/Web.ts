//begin imports
import { IgcDataLegendComponent } from 'igniteui-webcomponents-charts';
import { IgcDateTimeFormatSpecifier } from 'igniteui-webcomponents-core';
//end imports

export class TestsAddDataLegendHeaderSimpleFormatSpecfierShort
{

    //begin eventHandler
    public testsAddDataLegendHeaderSimpleFormatSpecfierShort(){
        var legend = CodeGenHelper.getDescription<IgcDataLegendComponent>("secondary");
        const spec: IgcDateTimeFormatSpecifier = new IgcDateTimeFormatSpecifier();
        spec.locale = "en-US";
        spec.dateStyle = "short";
        legend.headerFormatSpecifiers = [spec];
    }
    //end eventHandler

}