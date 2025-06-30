//begin imports
import { IgcDataLegendComponent } from 'igniteui-webcomponents-charts';
import { DateTimeFormatSpecifier } from 'igniteui-webcomponents-core';
//end imports

export class TestsAddDataLegendHeaderSimpleFormatSpecfierShort
{

    //begin eventHandler
    public  testsAddDataLegendHeaderSimpleFormatSpecfierShort(){
        var legend = CodeGenHelper.getDescription<IgcDataLegendComponent>("secondary");
        var specifiers: any[];
        const spec: DateTimeFormatSpecifier = new DateTimeFormatSpecifier();
        spec.locale = "en-US";
        spec.dateStyle = "short";
        specifiers.push(spec);
        legend.headerFormatSpecifiers = specifiers;
    }
    //end eventHandler

}