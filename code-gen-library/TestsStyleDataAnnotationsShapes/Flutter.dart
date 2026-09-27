//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-annotation-item.dart' show IgfDataAnnotationItemState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
import 'package:igniteui_flutter_core/src/JsonDictionaryParser.dart' show JsonDictionaryParser;
import 'package:igniteui_flutter_core/src/JsonDictionaryValue.dart' show JsonDictionaryValue;
import 'package:igniteui_flutter_core/src/JsonDictionaryObject.dart' show JsonDictionaryObject;
import 'package:igniteui_flutter_core/src/JsonDictionaryArray.dart' show JsonDictionaryArray;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class TestsStyleDataAnnotationsShapes
{
//begin eventHandler
    //Flutter: IgfDataAnnotationItemState
    void testsStyleDataAnnotationsShapes(Object? sender, IgfDataAnnotationItemState args) {
        var o = CodeGenHelper.findByName<Object>("DataAnnotationShapeStylingOptions");
        if (o == null) {
            return;
        }
        var parser = JsonDictionaryParser();
        var array = parser.parse((o as JsonDictionaryValue).value as String) as JsonDictionaryArray;
        for (var i = 0; i < array.items!.count; i++) {
            var item = array.items![i] as JsonDictionaryObject;
            var index = ((item["Index"] as JsonDictionaryValue).value as num).toInt();
            if (index == -1 || index == args.dataIndex) {
                styleShape(item, args);
                return;
            }
        }
    }

    void styleShape(JsonDictionaryObject options, IgfDataAnnotationItemState args) {
        var brush = stringValue(options["Brush"]);
        if (brush != null && brush.isNotEmpty) {
            args.shapeBrush = IgfSolidColorBrush.fromString(brush);
        }
        var outlineBrush = stringValue(options["OutlineBrush"]);
        if (outlineBrush != null && outlineBrush.isNotEmpty) {
            args.shapeOutline = IgfSolidColorBrush.fromString(outlineBrush);
        }
        var thickness = numberValue(options["Thickness"]);
        if (thickness != null && !thickness.isNaN) {
            args.shapeThickness = thickness;
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
