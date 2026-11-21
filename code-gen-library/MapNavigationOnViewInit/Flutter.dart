//begin imports
import 'dart:ui' as ui;
import 'package:igniteui_flutter_maps/src/igf-geographic-map.dart' show IgfGeographicMapState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class MapNavigationOnViewInit
{
//begin eventHandler
    //Flutter: Action
    void mapNavigationOnViewInit() {
        var map = CodeGenHelper.getDescription<IgfGeographicMapState>("content")!;
        var region = ui.Rect.fromLTWH(-134.5, 16.0, 70.0, 37.0);
        map.zoomToGeographic(region);
    }
//end eventHandler
}
