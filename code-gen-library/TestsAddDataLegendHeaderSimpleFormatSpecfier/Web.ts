//begin imports
import { IgcDataLegendComponent } from 'igniteui-webcomponents-charts';
import { DateTimeFormatSpecifier } from 'igniteui-webcomponents-core';
//end imports

export class TestsAddDataLegendHeaderSimpleFormatSpecfier
{

    //begin eventHandler
    public  testsAddDataLegendHeaderSimpleFormatSpecfier(){
        var legend = CodeGenHelper.getDescription<IgcDataLegendComponent>("secondary");

        var specifiers: any[];
        const spec: DateTimeFormatSpecifier = new DateTimeFormatSpecifier();
        spec.locale = "en-US";
        spec.dateStyle = "long";
        specifiers.push(spec);
        legend.headerFormatSpecifiers = specifiers;
    }
    //end eventHandler

}