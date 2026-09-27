//begin imports
import 'package:igniteui_flutter_charts/src/igf-chart-series-event-args.dart' show IgfChartSeriesEventArgsState;
import 'package:igniteui_flutter_core/src/JsonDictionaryParser.dart' show JsonDictionaryParser;
import 'package:igniteui_flutter_core/src/JsonDictionaryValue.dart' show JsonDictionaryValue;
import 'package:igniteui_flutter_core/src/JsonDictionaryObject.dart' show JsonDictionaryObject;
import 'package:igniteui_flutter_core/src/JsonDictionaryArray.dart' show JsonDictionaryArray;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class TestsUpdateGroupsInSeriesAddedEvent
{
//begin eventHandler
    int groupIndex = 0;

    void testsUpdateGroupsInSeriesAddedEvent(Object? sender, IgfChartSeriesEventArgsState args) {
        var o = CodeGenHelper.findByName<Object>("SeriesAddedGroups");
        var parser = JsonDictionaryParser();
        var obj = parser.parse((o as JsonDictionaryValue).value as String) as JsonDictionaryObject;
        var updateAnnotations = (obj["includeAnnotations"] as JsonDictionaryValue).value as bool;
        var seriesGroups = obj["names"] as JsonDictionaryArray;
        var groups = <String>[];
        for (var i = 0; i < seriesGroups.items!.count; i++) {
            groups.add((seriesGroups.items![i] as JsonDictionaryValue).value as String);
        }

        if (args.series!.isAnnotationLayer && !updateAnnotations) {
            return;
        }

        if (groupIndex >= groups.length) {
            groupIndex = 0;
        }
        if (groups.contains(args.series!.dataLegendGroup)) {
            return;
        }
        args.series!.dataLegendGroup = groups[groupIndex++];
    }
//end eventHandler
}
