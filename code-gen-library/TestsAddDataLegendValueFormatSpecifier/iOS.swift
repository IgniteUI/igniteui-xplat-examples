//begin imports
//end imports

public class TestsAddDataLegendValueFormatSpecifier {

    //begin eventHandler
    //Swift: Action
    public func testsAddDataLegendValueFormatSpecifier() {
        let legend = CodeGenHelper.getDescription(IgsDataLegend.self, "secondary")!
        let jVal = CodeGenHelper.findByName(Any.self, "DataLegendValueFormatSpecifier")!
        let parser = IgsJsonDictionaryParser()
        let formatterInfo = parser.parse((jVal as! IgsJsonDictionaryValue).value as! String) as! IgsJsonDictionaryObject
        let numSpec = IgsNumberFormatSpecifier()

        for key in formatterInfo.getKeys() ?? [] {
            switch key {
            case "MaximumFractionDigits":
                numSpec.maximumFractionDigits = Int((formatterInfo[key] as! IgsJsonDictionaryValue).value as! Double)
            case "MinimumFractionDigits":
                numSpec.minimumFractionDigits = Int((formatterInfo[key] as! IgsJsonDictionaryValue).value as! Double)
            case "MinimumIntegerDigits":
                numSpec.minimumIntegerDigits = Int((formatterInfo[key] as! IgsJsonDictionaryValue).value as! Double)
            case "Locale":
                numSpec.locale = (formatterInfo[key] as! IgsJsonDictionaryValue).value as? String
            case "UseGrouping":
                numSpec.useGrouping = (formatterInfo[key] as! IgsJsonDictionaryValue).value as! Bool
            case "Style":
                numSpec.style = (formatterInfo[key] as! IgsJsonDictionaryValue).value as? String
            default:
                break
            }
        }

        legend.valueFormatSpecifiers = [numSpec]
    }
    //end eventHandler
}
