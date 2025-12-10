//begin imports
//end imports

public class TestsAddDataLegendValueFormatSpecifier {

    //begin eventHandler
    //Swift: Action
    public func testsAddDataLegendValueFormatSpecifier() {
        var legend = CodeGenHelper.getDescription(IgsDataLegend.self, "secondary")!;
        var jVal = CodeGenHelper.findByName(Any.self, "DataLegendValueFormatSpecifier")!;
        var parser = JsonDictionaryParser();
        var formatterInfo = parser.parse(json_: ((jVal as! JsonDictionaryValue).value as! String)) as! JsonDictionaryObject;
        var numSpec = NumberFormatSpecifier()

        for key in fromEn(t: Optional<String>.self, en: formatterInfo.getKeys()) {
            switch key {
            case "MaximumFractionDigits": numSpec.maximumFractionDigits = Int((formatterInfo[key] as! JsonDictionaryValue).value as! Double); break;
                case "MinimumFractionDigits": numSpec.minimumFractionDigits = Int((formatterInfo[key] as! JsonDictionaryValue).value as! Double); break;
                case "MinimumIntegerDigits": numSpec.minimumIntegerDigits = Int((formatterInfo[key] as! JsonDictionaryValue).value as! Double); break;
                case "Locale": numSpec.locale = (formatterInfo[key] as! JsonDictionaryValue).value as! String?; break;
                case "UseGrouping": numSpec.useGrouping = (formatterInfo[key] as! JsonDictionaryValue).value as! Bool; break;
                case "Style": numSpec.style = (formatterInfo[key] as! JsonDictionaryValue).value as! String?; break;
                default: break;
            }
        }

        legend.valueFormatSpecifiers = [ numSpec ]
    }
    //end eventHandler
}
