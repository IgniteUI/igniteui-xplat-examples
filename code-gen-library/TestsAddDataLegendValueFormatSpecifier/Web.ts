//begin imports
import { IgcDataLegendComponent } from 'igniteui-webcomponents-charts';
import { IgcNumberFormatSpecifier,JsonDictionaryObject, JsonDictionaryParser,JsonDictionaryItem} from 'igniteui-webcomponents-core';
//end imports

export class TestsAddDataLegendValueFormatSpecifier
{

    //begin eventHandler
    public  testsAddDataLegendValueFormatSpecifier(){
        var legend = CodeGenHelper.getDescription<IgrDataLegend>("secondary");
        const jVal = CodeGenHelper.findByName<any>("DataLegendValueFormatSpecifier");
        var numSpec = new IgcNumberFormatSpecifier();
        var parser = new JsonDictionaryParser();
        var formatterInfo: JsonDictionaryObject = parser.parse(jVal.value) as JsonDictionaryObject;
        const keys = formatterInfo.getKeys()
        keys.forEach((prop) => {  
            var item = formatterInfo.item(prop);  
            let v = item["value"];  
            if (v != null){     
                switch (prop) {
                    case "MaximumFractionDigits":
                        numSpec.maximumFractionDigits = parseInt(v.toString());
                        break;
                    case "MinimumFractionDigits":
                        numSpec.minimumFractionDigits = parseInt(v.toString());
                        break;
                    case "MinimumIntegerDigits":
                        numSpec.minimumIntegerDigits = parseInt(v.toString());
                        break;
                    case "Locale":                    
                        numSpec.locale = v;
                        break;
                    case "UseGrouping":
                        numSpec.useGrouping = v;
                        break;
                    case "Style":
                        numSpec.style = v;
                        break;
        
                }
            }
        })
        legend.valueFormatSpecifiers = [numSpec];
        
    }	
    //end eventHandler

}