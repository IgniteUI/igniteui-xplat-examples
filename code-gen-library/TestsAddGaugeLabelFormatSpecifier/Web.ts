//begin imports
import { IgcLinearGaugeComponent } from 'igniteui-webcomponents-gauges';
import { IgcNumberFormatSpecifier,JsonDictionaryObject, JsonDictionaryParser,JsonDictionaryItem} from 'igniteui-webcomponents-core';
//end imports

export class TestsAddGaugeLabelFormatSpecifier
{

    //begin eventHandler
    public testsAddGaugeLabelFormatSpecifier(){
        var gauge = CodeGenHelper.getDescription<IgcLinearGaugeComponent>("content");
        const jVal = CodeGenHelper.findByName<any>("GaugeLabelFormatSpecifier");
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
                        let v2 = parseInt(v.toString());
                        if (v2 != 0)
                            numSpec.minimumIntegerDigits = v2;
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
        gauge.labelFormatSpecifiers = [numSpec];
        
    }	
    //end eventHandler

}