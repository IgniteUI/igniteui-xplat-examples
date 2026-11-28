//begin imports
import 'package:igniteui_flutter_charts/src/igf-category-chart.dart' show IgfCategoryChartState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'package:igniteui_flutter_library/CategoryChartFrequencyData.dart' show CategoryChartFrequency;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
//end imports

class EditorButtonGenerateHighFrequencyData {
    //begin eventHandler
    void editorButtonGenerateHighFrequencyData(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        CategoryChartFrequency.generate(CodeGenHelper.getDescription<IgfCategoryChartState>('content')!);
    }
    //end eventHandler
}
