//begin imports
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
import 'package:igniteui_flutter_charts/src/igf-data-chart.dart' show IgfDataChartState;
import 'package:igniteui_flutter_charts/src/igf-marker-series.dart' show IgfMarkerSeriesState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class EditorChangeUpdateDataChartMarkerSize
{
//begin eventHandler
    void editorChangeUpdateDataChartMarkerSize(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
        var chart = CodeGenHelper.getDescription<IgfDataChartState>("content")!;
        var markerSizeVal = int.parse(args.newValue as String);
        var series = chart.series;
        if (series == null) {
            return;
        }
        for (var i = 0; i < series.count; i++) {
            var markerSeries = series[i];
            if (markerSeries is IgfMarkerSeriesState) {
                markerSeries.markerSize = markerSizeVal.toDouble();
            }
        }
    }
//end eventHandler
}
