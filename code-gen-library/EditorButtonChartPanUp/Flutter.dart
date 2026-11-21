//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-chart.dart' show IgfDataChartState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class EditorButtonChartPanUp {
    //begin eventHandler
    void editorButtonChartPanUp(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        final chart = CodeGenHelper.getDescription<IgfDataChartState>('content')!;
        chart.windowPositionVertical = chart.actualWindowPositionVertical - 0.05;
    }
    //end eventHandler
}
