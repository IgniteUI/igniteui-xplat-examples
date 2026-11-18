//begin imports
import 'package:igniteui_flutter_library/CategoryChartFrequencyData.dart' show CategoryChartFrequency;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
//end imports

class EditorChangeHighFrequencyPoints {
    //begin eventHandler
    void editorChangeHighFrequencyPoints(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
        CategoryChartFrequency.points = (args.newValue as num).toInt();
    }
    //end eventHandler
}
