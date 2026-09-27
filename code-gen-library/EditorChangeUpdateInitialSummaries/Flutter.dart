//begin imports
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
import 'package:igniteui_flutter_charts/src/igf-category-chart.dart' show IgfCategoryChartState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class EditorChangeUpdateInitialSummaries
{
//begin eventHandler
    void editorChangeUpdateInitialSummaries(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
        var chart = CodeGenHelper.getDescription<IgfCategoryChartState>("content")!;
        var initialSummaryVal = args.newValue!.toString();
        chart.initialSummaries = initialSummaryVal;
    }
//end eventHandler
}
