//begin imports
import { IgcDataLegendComponent } from 'igniteui-webcomponents-charts';
import { NumberFormatSpecifier } from 'igniteui-webcomponents-core';
//end imports

export class TestsAddDataLegendValueFormatSpecifier
{

    //begin eventHandler
    public  testsAddDataLegendValueFormatSpecifier(){
        var legend = CodeGenHelper.getDescription<IgcDataLegendComponent>("secondary");
        const formatterInfo = CodeGenHelper.findByName<any>("DataLegendValueFormatSpecifier");
        var numSpec = new NumberFormatSpecifier();
        var specifiers: any[];
        for (const prop in formatterInfo) {
            switch (prop) {
                case "MaximumFractionDigits":
                    numSpec.maximumFractionDigits = parseInt(formatterInfo[prop]);
                    break;
                case "MinimumFractionDigits":
                    numSpec.minimumFractionDigits = parseInt(formatterInfo[prop]);
                    break;
                case "MinimumIntegerDigits":
                    numSpec.minimumIntegerDigits = parseInt(formatterInfo[prop]);
                    break;
                case "Locale":
                    numSpec.locale = formatterInfo[prop];
                    break;
                case "UseGrouping":
                    numSpec.useGrouping = Boolean(formatterInfo[prop]);
                    break;
                case "Style":
                    numSpec.style = formatterInfo[prop];
                    break;

            }
        }
        specifiers.push(numSpec);
        legend.valueFormatSpecifiers = specifiers;
    }	
    //end eventHandler

}