//begin imports
import 'package:igniteui_flutter_gauges/src/igf-format-linear-graph-label-event-args.dart' show IgfFormatLinearGraphLabelEventArgsState;
import 'package:igniteui_flutter_core/src/JsonDictionaryParser.dart' show JsonDictionaryParser;
import 'package:igniteui_flutter_core/src/JsonDictionaryValue.dart' show JsonDictionaryValue;
import 'package:igniteui_flutter_core/src/JsonDictionaryObject.dart' show JsonDictionaryObject;
import 'package:igniteui_flutter_core/src/number.dart' show NumberUtil;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class TestsLinearGaugePrependLabels
{
//begin eventHandler
    void testsLinearGaugePrependLabels(Object? sender, IgfFormatLinearGraphLabelEventArgsState args) {
        var o = CodeGenHelper.findByName<Object>("LabelPrependValue");
        var parser = JsonDictionaryParser();
        var obj = parser.parse((o as JsonDictionaryValue).value as String) as JsonDictionaryObject;
        var v = (obj["Text"] as JsonDictionaryValue).value as String;
        // doubleToMinDecimalsString, not toString: args.value is a double, so Dart's
        // toString keeps a fraction digit .NET and Swift do not -- the label read
        // "$0.0" where every other platform reads "$0". Matches the Swift variant.
        args.label = v + (NumberUtil.doubleToMinDecimalsString(args.value) ?? "");
    }
//end eventHandler
}
