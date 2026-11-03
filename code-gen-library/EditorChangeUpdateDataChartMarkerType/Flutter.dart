//begin imports
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
import 'package:igniteui_flutter_charts/src/igf-data-chart.dart' show IgfDataChartState;
import 'package:igniteui_flutter_charts/src/igf-marker-series.dart' show IgfMarkerSeriesState;
import 'package:igniteui_flutter_charts/src/MarkerType.dart' show MarkerType;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class EditorChangeUpdateDataChartMarkerType
{
//begin eventHandler
    void editorChangeUpdateDataChartMarkerType(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
        var chart = CodeGenHelper.getDescription<IgfDataChartState>("content")!;
        var markerTypeVal = MarkerType.tryParse(args.newValue as String, true);
        if (markerTypeVal == null) {
            return;
        }
        var series = chart.series;
        if (series == null) {
            return;
        }
        for (var i = 0; i < series.count; i++) {
            var markerSeries = series[i];
            if (markerSeries is IgfMarkerSeriesState) {
                markerSeries.markerType = markerTypeVal;
            }
        }
    }
//end eventHandler
}
