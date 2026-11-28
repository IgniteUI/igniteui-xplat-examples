//begin imports
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
import 'package:igniteui_flutter_maps/src/igf-geographic-map.dart' show IgfGeographicMapState;
import 'package:igniteui_flutter_maps/src/igf-geographic-map-imagery.dart' show IgfGeographicMapImageryState;
import 'package:igniteui_flutter_maps/src/igf-open-street-map-imagery.dart' show IgfOpenStreetMapImageryState;
import 'package:igniteui_flutter_maps/src/igf-arc-gis-online-map-imagery.dart' show IgfArcGISOnlineMapImageryState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class MapOfflineImagerySourceChanged {
  //begin eventHandler
  void mapOfflineImagerySourceChanged(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
    final map = CodeGenHelper.getDescription<IgfGeographicMapState>('content')!;
    final response = CodeGenHelper.findByName<dynamic>('MapOfflineImageryResponse');
    if (response == null) throw StateError('The sidecar offline imagery response handler is not bound.');
    final source = args.newValue!.toString();
    final IgfGeographicMapImageryState imagery;
    if (source == 'OpenStreetMaps') {
      imagery = IgfOpenStreetMapImageryState();
    } else {
      imagery = IgfArcGISOnlineMapImageryState();
    }
    imagery.isDryRun = true;
    imagery.dryRunRequest = response;
    if (imagery is IgfArcGISOnlineMapImageryState) imagery.mapServerUri = source;
    map.backgroundContent = imagery;
  }
  //end eventHandler
}
