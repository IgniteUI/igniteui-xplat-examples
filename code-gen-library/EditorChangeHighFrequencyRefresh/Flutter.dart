//begin imports
import 'package:igniteui_flutter_charts/src/igf-category-chart.dart' show IgfCategoryChartState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'package:igniteui_flutter_library/CategoryChartFrequencyData.dart' show CategoryChartFrequency;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
//end imports

class EditorChangeHighFrequencyRefresh {
    //begin eventHandler
    void editorChangeHighFrequencyRefresh(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
        CategoryChartFrequency.refreshMilliseconds = (args.newValue as num).toInt();
        CategoryChartFrequency.restartTimer(CodeGenHelper.getDescription<IgfCategoryChartState>('content')!);
    }
    //end eventHandler
}
