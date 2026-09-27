//begin imports
import 'package:igniteui_flutter_gauges/src/igf-format-radial-gauge-label-event-args.dart' show IgfFormatRadialGaugeLabelEventArgsState;
import 'package:igniteui_flutter_core/src/JsonDictionaryParser.dart' show JsonDictionaryParser;
import 'package:igniteui_flutter_core/src/JsonDictionaryValue.dart' show JsonDictionaryValue;
import 'package:igniteui_flutter_core/src/JsonDictionaryObject.dart' show JsonDictionaryObject;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class TestsRadialGaugePrependLabels
{
//begin eventHandler
    void testsRadialGaugePrependLabels(Object? sender, IgfFormatRadialGaugeLabelEventArgsState args) {
        var o = CodeGenHelper.findByName<Object>("LabelPrependValue");
        var parser = JsonDictionaryParser();
        var obj = parser.parse((o as JsonDictionaryValue).value as String) as JsonDictionaryObject;
        var v = (obj["Text"] as JsonDictionaryValue).value as String;
        args.label = v + args.value.toString();
    }
//end eventHandler
}
