//begin imports
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
import 'package:igniteui_flutter_charts/src/igf-category-chart.dart' show IgfCategoryChartState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class EditorChangeUpdateInitialFilter
{
//begin eventHandler
    void editorChangeUpdateInitialFilter(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
        var chart = CodeGenHelper.getDescription<IgfCategoryChartState>("content")!;
        var initialFilterVal = args.newValue!.toString();
        chart.initialFilter = initialFilterVal;
    }
//end eventHandler
}
