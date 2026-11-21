//begin imports
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart';
import 'package:igniteui_flutter_library/DataGridLiveState.dart';
//end imports

class DataGridToggleHeat {
  //begin eventHandler
  void dataGridToggleHeat(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
    DataGridLiveState.current.toggleHeat(args.newValue == true);
  }
  //end eventHandler
}
