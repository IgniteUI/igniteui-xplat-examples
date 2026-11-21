//begin imports
import 'dart:ui' as ui;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
import 'package:igniteui_flutter_maps/src/igf-geographic-map.dart' show IgfGeographicMapState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class EditorChangeMapRegion
{
//begin eventHandler
    Map<String, ui.Rect> mapRegions = <String, ui.Rect>{
        "Australia": ui.Rect.fromLTWH(81.5, -52.0, 98.0, 56.0),
        "Caribbean": ui.Rect.fromLTWH(-92.9, 5.4, 35.1, 25.8),
        "Egypt": ui.Rect.fromLTWH(19.3, 19.9, 19.3, 13.4),
        "European": ui.Rect.fromLTWH(-36.0, 31.0, 98.0, 38.0),
        "Hawaii": ui.Rect.fromLTWH(-161.2, 18.5, 6.6, 4.8),
        "Japan": ui.Rect.fromLTWH(122.7, 29.4, 27.5, 17.0),
        "Poland": ui.Rect.fromLTWH(13.0, 48.0, 11.0, 9.0),
        "SouthAfrica": ui.Rect.fromLTWH(9.0, -37.1, 26.0, 17.8),
        "UnitedKingdom": ui.Rect.fromLTWH(-15.0, 49.5, 22.5, 8.0),
        "UnitedStates": ui.Rect.fromLTWH(-134.5, 16.0, 70.0, 37.0),
        "Uruguay": ui.Rect.fromLTWH(-62.1, -35.7, 10.6, 7.0)
    };

    void editorChangeMapRegion(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
        var map = CodeGenHelper.getDescription<IgfGeographicMapState>("content")!;
        var name = args.newValue.toString();
        var region = this.mapRegions[name];
        if (region != null) {
            map.zoomToGeographic(region);
        }
    }
//end eventHandler
}
