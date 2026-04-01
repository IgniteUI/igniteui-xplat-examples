//begin imports
//end imports

public class TestsAddGaugeLabelFormatSpecifier {

    //begin eventHandler
    //Swift: Action
    public func testsAddGaugeLabelFormatSpecifier() {
        var gauge = CodeGenHelper.getDescription(IgsLinearGuage.self, "content")!;
        var jVal = CodeGenHelper.findByName(Any.self, "GaugeLabelFormatSpecifier")!;
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

        gauge.labelFormatSpecifiers  = [ numSpec ]
    }
    //end eventHandler
}
