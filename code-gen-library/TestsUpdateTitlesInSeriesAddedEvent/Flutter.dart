//begin imports
import 'package:igniteui_flutter_charts/src/igf-chart-series-event-args.dart' show IgfChartSeriesEventArgsState;
import 'package:igniteui_flutter_core/src/JsonDictionaryParser.dart' show JsonDictionaryParser;
import 'package:igniteui_flutter_core/src/JsonDictionaryValue.dart' show JsonDictionaryValue;
import 'package:igniteui_flutter_core/src/JsonDictionaryObject.dart' show JsonDictionaryObject;
import 'package:igniteui_flutter_core/src/JsonDictionaryArray.dart' show JsonDictionaryArray;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class TestsUpdateTitlesInSeriesAddedEvent
{
//begin eventHandler
    int titleIndex = 0;

    void testsUpdateTitlesInSeriesAddedEvent(Object? sender, IgfChartSeriesEventArgsState args) {
        var o = CodeGenHelper.findByName<Object>("SeriesAddedTitles");
        var parser = JsonDictionaryParser();
        var obj = parser.parse((o as JsonDictionaryValue).value as String) as JsonDictionaryObject;

        var updateAnnotations = (obj["includeAnnotations"] as JsonDictionaryValue).value as bool;
        var seriesTitles = obj["names"] as JsonDictionaryArray;
        var names = <String>[];
        for (var i = 0; i < seriesTitles.items!.count; i++) {
            names.add((seriesTitles.items![i] as JsonDictionaryValue).value as String);
        }

        if (args.series!.isAnnotationLayer && !updateAnnotations) {
            return;
        }
        if (titleIndex >= names.length) {
            titleIndex = 0;
        }
        if (names.contains(args.series!.title)) {
            return;
        }
        args.series!.title = names[titleIndex++];
    }
//end eventHandler
}
