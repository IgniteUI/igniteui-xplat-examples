//begin imports
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
import 'package:igniteui_flutter_charts/src/igf-category-chart.dart' show IgfCategoryChartState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class EditorChangeUpdateYAxisMinimumValue
{
//begin eventHandler
    void editorChangeUpdateYAxisMinimumValue(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
        var yAxisMinimumVal = args.newValue! as String;
        CodeGenHelper.getDescription<IgfCategoryChartState>("content")!.yAxisMinimumValue =
            double.tryParse(yAxisMinimumVal) ?? double.nan;
    }
//end eventHandler
}
