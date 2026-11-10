//begin imports
import 'package:igniteui_flutter_gauges/src/igf-align-radial-gauge-label-event-args.dart' show IgfAlignRadialGaugeLabelEventArgsState;
import 'package:igniteui_flutter_core/src/JsonDictionaryParser.dart' show JsonDictionaryParser;
import 'package:igniteui_flutter_core/src/JsonDictionaryValue.dart' show JsonDictionaryValue;
import 'package:igniteui_flutter_core/src/JsonDictionaryObject.dart' show JsonDictionaryObject;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class TestsRadialGaugeAlignLabels
{
//begin eventHandler
    void testsRadialGaugeAlignLabels(Object? sender, IgfAlignRadialGaugeLabelEventArgsState args) {
        var o = CodeGenHelper.findByName<Object>("LabelAlignValues");
        var parser = JsonDictionaryParser();
        var obj = parser.parse((o as JsonDictionaryValue).value as String) as JsonDictionaryObject;

        var x = (obj["X"] as JsonDictionaryValue).value as double;
        var y = (obj["Y"] as JsonDictionaryValue).value as double;

        args.offsetX = x;
        args.offsetY = y;
    }
//end eventHandler
}
