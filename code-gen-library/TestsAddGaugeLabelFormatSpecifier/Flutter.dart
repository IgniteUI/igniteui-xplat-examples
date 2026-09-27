//begin imports
import 'package:igniteui_flutter_gauges/src/igf-linear-gauge.dart' show IgfLinearGaugeState;
import 'package:igniteui_flutter_core/src/igf-number-format-specifier.dart' show IgfNumberFormatSpecifierState;
import 'package:igniteui_flutter_core/src/JsonDictionaryParser.dart' show JsonDictionaryParser;
import 'package:igniteui_flutter_core/src/JsonDictionaryValue.dart' show JsonDictionaryValue;
import 'package:igniteui_flutter_core/src/JsonDictionaryObject.dart' show JsonDictionaryObject;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class TestsAddGaugeLabelFormatSpecifier
{
//begin eventHandler
    void testsAddGaugeLabelFormatSpecifier() {
        var gauge = CodeGenHelper.getDescription<IgfLinearGaugeState>("content")!;
        var jVal = CodeGenHelper.findByName<Object>("GaugeLabelFormatSpecifier")!;
        var parser = JsonDictionaryParser();
        var formatterInfo = parser.parse((jVal as JsonDictionaryValue).value as String) as JsonDictionaryObject;
        var numSpec = IgfNumberFormatSpecifierState();

        var keys = formatterInfo.getKeys()!;
        for (var k = 0; k < keys.count; k++) {
            var key = keys[k];
            switch (key) {
                case "MaximumFractionDigits":
                    numSpec.maximumFractionDigits = ((formatterInfo[key] as JsonDictionaryValue).value as double).toInt();
                    break;
                case "MinimumFractionDigits":
                    numSpec.minimumFractionDigits = ((formatterInfo[key] as JsonDictionaryValue).value as double).toInt();
                    break;
                case "MinimumIntegerDigits":
                    numSpec.minimumIntegerDigits = ((formatterInfo[key] as JsonDictionaryValue).value as double).toInt();
                    break;
                case "Locale":
                    numSpec.locale = (formatterInfo[key] as JsonDictionaryValue).value as String?;
                    break;
                case "UseGrouping":
                    numSpec.useGrouping = (formatterInfo[key] as JsonDictionaryValue).value as bool;
                    break;
                case "Style":
                    numSpec.style = (formatterInfo[key] as JsonDictionaryValue).value as String?;
                    break;
            }
        }
        gauge.labelFormatSpecifiers = <Object?>[numSpec];
    }
//end eventHandler
}
