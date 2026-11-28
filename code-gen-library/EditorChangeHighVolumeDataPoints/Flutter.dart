//begin imports
import 'package:igniteui_flutter_library/CategoryChartVolumeData.dart' show CategoryChartVolumeData;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
//end imports

class EditorChangeHighVolumeDataPoints {
    //begin eventHandler
    void editorChangeHighVolumeDataPoints(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
        CategoryChartVolumeData.count = (args.newValue as num).toInt();
    }
    //end eventHandler
}
