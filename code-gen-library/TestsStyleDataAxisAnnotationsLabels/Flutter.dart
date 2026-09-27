//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-annotation-info.dart' show IgfDataAnnotationInfoState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
import 'package:igniteui_flutter_core/src/JsonDictionaryParser.dart' show JsonDictionaryParser;
import 'package:igniteui_flutter_core/src/JsonDictionaryValue.dart' show JsonDictionaryValue;
import 'package:igniteui_flutter_core/src/JsonDictionaryObject.dart' show JsonDictionaryObject;
import 'package:igniteui_flutter_core/src/JsonDictionaryArray.dart' show JsonDictionaryArray;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class TestsStyleDataAxisAnnotationsLabels
{
//begin eventHandler
    //Flutter: IgfDataAnnotationInfoState
    void testsStyleDataAxisAnnotationsLabels(Object? sender, IgfDataAnnotationInfoState args) {
        var value = CodeGenHelper.findByName<Object>("AxisAnnotationStlingOtions");
        if (value == null) {
            return;
        }

        var parser = JsonDictionaryParser();
        var array = parser.parse((value as JsonDictionaryValue).value as String) as JsonDictionaryArray;

        for (var i = 0; i < array.items!.count; i++) {
            var item = array.items![i] as JsonDictionaryObject;
            var index = numberValue(item["Index"]) ?? -1;
            if (index == -1 || index == args.dataIndex) {
                styleShape(item, args);
                return;
            }
        }
    }

    void styleShape(JsonDictionaryObject options, IgfDataAnnotationInfoState args) {
        var background = stringValue(options["Background"]);
        if (background != null && background.isNotEmpty) {
            args.background = IgfSolidColorBrush.fromString(background);
        }

        var borderColor = stringValue(options["BorderColor"]);
        if (borderColor != null && borderColor.isNotEmpty) {
            args.borderColor = IgfSolidColorBrush.fromString(borderColor);
        }

        var textColor = stringValue(options["TextColor"]);
        if (textColor != null && textColor.isNotEmpty) {
            args.textColor = IgfSolidColorBrush.fromString(textColor);
        }

        var borderThickness = stringValue(options["BorderThickness"]);
        if (borderThickness != null && borderThickness != "NaN") {
            var parsed = double.tryParse(borderThickness);
            if (parsed != null) {
                args.borderThickness = parsed;
            }
        }

        var borderRadius = stringValue(options["BorderRadius"]);
        if (borderRadius != null && borderRadius != "NaN") {
            var parsed = double.tryParse(borderRadius);
            if (parsed != null) {
                args.borderRadius = parsed;
            }
        }

        var xAxisLabel = stringValue(options["XAxisLabel"]);
        if (xAxisLabel != null && xAxisLabel.isNotEmpty) {
            args.xAxisLabel = xAxisLabel;
        }

        var yAxisLabel = stringValue(options["YAxisLabel"]);
        if (yAxisLabel != null && yAxisLabel.isNotEmpty) {
            args.yAxisLabel = yAxisLabel;
        }
    }

    String? stringValue(Object? value) {
        if (value is JsonDictionaryValue) {
            var inner = value.value;
            if (inner is String) {
                return inner;
            }
            if (inner is num) {
                return inner.toString();
            }
        }
        return null;
    }

    double? numberValue(Object? value) {
        if (value is JsonDictionaryValue) {
            var inner = value.value;
            if (inner is num) {
                return inner.toDouble();
            }
            if (inner is String) {
                return double.tryParse(inner);
            }
        }
        return null;
    }
//end eventHandler
}
