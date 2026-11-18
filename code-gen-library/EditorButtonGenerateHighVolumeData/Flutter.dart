//begin imports
import 'package:igniteui_flutter_charts/src/igf-category-chart.dart' show IgfCategoryChartState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'package:igniteui_flutter_library/CategoryChartVolumeData.dart' show CategoryChartVolumeData;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
//end imports

class EditorButtonGenerateHighVolumeData {
    //begin eventHandler
    void editorButtonGenerateHighVolumeData(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        CodeGenHelper.getDescription<IgfCategoryChartState>('content')!.dataSource = CategoryChartVolumeData.generate(CategoryChartVolumeData.count);
    }
    //end eventHandler
}
