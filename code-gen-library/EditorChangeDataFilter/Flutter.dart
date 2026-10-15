//begin imports
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
import 'package:igniteui_flutter_charts/src/igf-category-chart.dart' show IgfCategoryChartState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class EditorChangeDataFilter
{
//begin eventHandler
    void editorChangeDataFilter(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
        var chart = CodeGenHelper.getDescription<IgfCategoryChartState>("content")!;
        var filter = args.newValue.toString();
        chart.initialFilter = "(contains(Year,'" + filter + "'))";
    }
//end eventHandler
}
