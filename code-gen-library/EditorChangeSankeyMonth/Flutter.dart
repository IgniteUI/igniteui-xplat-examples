//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-chart.dart'
    show IgfDataChartState;
import 'package:igniteui_flutter_charts/src/igf-sankey-series.dart'
    show IgfSankeySeriesState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart'
    show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
import 'libraryManager.dart' show CodeGenHelper;
//end imports

class EditorChangeSankeyMonth {
  //begin eventHandler
  void editorChangeSankeyMonth(Object? sender,
      IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
    final chart = CodeGenHelper.getDescription('content') as IgfDataChartState;
    final month = args.newValue as String;
    for (var i = 0; i < chart.series!.count; i++) {
      final series = chart.series![i];
      if (series is IgfSankeySeriesState) {
        // Each link carries one value column per month. The series animates
        // the flow when its value member path changes.
        series.linkValueMemberPath = month;
      }
    }
  }
  //end eventHandler
}
