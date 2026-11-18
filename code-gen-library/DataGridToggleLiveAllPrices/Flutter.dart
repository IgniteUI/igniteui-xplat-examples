//begin imports
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart';
import 'package:igniteui_flutter_library/DataGridLiveState.dart';
//end imports

class DataGridToggleLiveAllPrices {
  //begin eventHandler
  void dataGridToggleLiveAllPrices(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
    DataGridLiveState.current.toggle(true);
  }
  //end eventHandler
}
