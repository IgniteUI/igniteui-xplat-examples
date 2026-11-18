//begin imports
import 'package:igniteui_flutter_library/CategoryChartFrequencyData.dart' show CategoryChartFrequency;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
//end imports

class EditorButtonToggleHighFrequency {
    //begin eventHandler
    void editorButtonToggleHighFrequency(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        CategoryChartFrequency.toggle();
    }
    //end eventHandler
}
