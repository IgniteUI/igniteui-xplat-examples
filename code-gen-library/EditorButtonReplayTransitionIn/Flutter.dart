//begin imports
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
import 'package:igniteui_flutter_charts/src/igf-data-chart.dart' show IgfDataChartState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class EditorButtonReplayTransitionIn
{
//begin eventHandler
    void editorButtonReplayTransitionIn(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        var series = CodeGenHelper.getDescription<IgfDataChartState>("content")!.series!;
        for (var i = 0; i < series.count; i++) {
            series[i]!.replayTransitionIn();
        }
    }
//end eventHandler
}
