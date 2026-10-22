//begin imports
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
import 'package:igniteui_flutter_charts/src/igf-category-chart.dart' show IgfCategoryChartState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class EditorChangeUpdateYAxisMaximumValue
{
//begin eventHandler
    void editorChangeUpdateYAxisMaximumValue(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
        var yAxisMaximumVal = args.newValue! as String;
        CodeGenHelper.getDescription<IgfCategoryChartState>("content")!.yAxisMaximumValue =
            double.tryParse(yAxisMaximumVal) ?? double.nan;
    }
//end eventHandler
}
