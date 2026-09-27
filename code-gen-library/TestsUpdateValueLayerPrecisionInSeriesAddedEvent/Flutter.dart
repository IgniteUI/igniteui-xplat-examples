//begin imports
import 'package:igniteui_flutter_charts/src/igf-chart-series-event-args.dart' show IgfChartSeriesEventArgsState;
import 'package:igniteui_flutter_charts/src/igf-value-layer.dart' show IgfValueLayerState;
import 'package:igniteui_flutter_core/src/JsonDictionaryParser.dart' show JsonDictionaryParser;
import 'package:igniteui_flutter_core/src/JsonDictionaryValue.dart' show JsonDictionaryValue;
import 'package:igniteui_flutter_core/src/JsonDictionaryObject.dart' show JsonDictionaryObject;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class TestsUpdateValueLayerPrecisionInSeriesAddedEvent
{
//begin eventHandler
    void testsUpdateValueLayerPrecisionInSeriesAddedEvent(Object? sender, IgfChartSeriesEventArgsState args) {
        var o = CodeGenHelper.findByName<Object>("SeriesAddedValueLayerPrecision");
        var parser = JsonDictionaryParser();
        var obj = parser.parse((o as JsonDictionaryValue).value as String) as JsonDictionaryObject;
        var precision = ((obj["precision"] as JsonDictionaryValue).value as num).toInt();
        var series = args.series;
        if (series is IgfValueLayerState) {
            series.yAxisAnnotationInterpolatedValuePrecision = precision;
        }
    }
//end eventHandler
}
