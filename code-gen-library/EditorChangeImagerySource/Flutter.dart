//begin imports
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
import 'package:igniteui_flutter_maps/src/igf-geographic-map.dart' show IgfGeographicMapState;
import 'package:igniteui_flutter_maps/src/igf-open-street-map-imagery.dart' show IgfOpenStreetMapImageryState;
import 'package:igniteui_flutter_maps/src/igf-arc-gis-online-map-imagery.dart' show IgfArcGISOnlineMapImageryState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class EditorChangeImagerySource {
//begin eventHandler
    void editorChangeImagerySource(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
        final map = CodeGenHelper.getDescription<IgfGeographicMapState>('content')!;
        final source = args.newValue!.toString();
        if (source == 'OpenStreetMaps') {
            map.backgroundContent = IgfOpenStreetMapImageryState();
        } else {
            map.backgroundContent = IgfArcGISOnlineMapImageryState()..mapServerUri = source;
        }
    }
//end eventHandler
}
