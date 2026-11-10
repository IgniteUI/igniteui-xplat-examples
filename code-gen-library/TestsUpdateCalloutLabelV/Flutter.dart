//begin imports
import 'package:igniteui_flutter_charts/src/igf-callout-label-updating-event-args.dart' show IgfCalloutLabelUpdatingEventArgsState;
import 'package:igniteui_flutter_core/src/IDictionary\$2.dart' show IDictionary$2;
import 'package:igniteui_flutter_core/src/number.dart' show NumberUtil;
//end imports

class TestsUpdateCalloutLabelV
{
//begin eventHandler
    void testsUpdateCalloutLabelV(Object? sender, IgfCalloutLabelUpdatingEventArgsState args) {
        args.label = read(args.item, "Label") + "-V-" + read(args.item, "Value");
    }

    // What a chart's data row actually is: the product's own DictionaryDataItem,
    // which is an IDictionary rather than a Dart Map, so "args.item as Map" threw
    // and took the whole page load down with it. iOS.swift casts to
    // DictionaryDataItem$2 and Desktop.cs to IDictionary for the same reason.
    String read(Object? item, String key) {
        Object? value;
        if (item is IDictionary$2<String?, Object?>) {
            value = item[key];
        } else if (item is Map) {
            value = item[key];
        }
        // doubleToMinDecimalsString, not toString: Desktop.cs concatenates the
        // value with a string, so .NET writes "20" where Dart's toString writes
        // "20.0" -- the same reason the gauge label items use it.
        if (value is double) {
            return NumberUtil.doubleToMinDecimalsString(value) ?? "";
        }
        return value?.toString() ?? "";
    }
//end eventHandler
}
