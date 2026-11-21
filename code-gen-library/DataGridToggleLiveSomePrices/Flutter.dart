//begin imports
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart';
import 'package:igniteui_flutter_library/DataGridLiveState.dart';
//end imports

class DataGridToggleLiveSomePrices {
  //begin eventHandler
  void dataGridToggleLiveSomePrices(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
    DataGridLiveState.current.toggle(false);
  }
  //end eventHandler
}
