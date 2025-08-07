//begin imports
import { IgcDataLegendComponent } from 'igniteui-webcomponents-charts';
import { IgcDateTimeFormatSpecifier } from 'igniteui-webcomponents-core';
//end imports

export class TestsAddDataLegendHeaderSimpleFormatSpecfier
{

    //begin eventHandler
    public  testsAddDataLegendHeaderSimpleFormatSpecfier(){
        var legend = CodeGenHelper.getDescription<IgcDataLegendComponent>("secondary");
        const spec: IgcDateTimeFormatSpecifier = new IgcDateTimeFormatSpecifier();
        spec.locale = "en-US";
        spec.dateStyle = "long";
        legend.headerFormatSpecifiers = [spec];
    }
    //end eventHandler

}