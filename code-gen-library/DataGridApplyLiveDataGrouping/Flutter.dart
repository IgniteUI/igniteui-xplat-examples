//begin imports
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart';
import 'package:igniteui_flutter_library/DataGridLiveState.dart';
//end imports

class DataGridApplyLiveDataGrouping {
  //begin eventHandler
  void dataGridApplyLiveDataGrouping(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
    DataGridLiveState.current.group(args.newValue == true);
  }
  //end eventHandler
}
