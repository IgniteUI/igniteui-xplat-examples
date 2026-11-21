//begin data
import 'package:igniteui_flutter_core/src/ArrayList.dart';
import 'package:igniteui_flutter_core/src/List\$1.dart';
import 'package:igniteui_flutter_core/src/Point.dart';
import 'package:igniteui_flutter_library/WorldFlights.dart';

/// Meridians and parallels every thirty degrees, matching the other platforms.
class WorldGridlines extends ArrayList<WorldFlightPath?> {
  WorldGridlines() {
    for (var lon = -180.0; lon <= 180; lon += 30) {
      _add(lon, -90, lon, 90, lon, lon > 0 ? 'E' : 'W');
    }
    for (var lat = -90.0; lat <= 90; lat += 30) {
      _add(-180, lat, 180, lat, lat, lat > 0 ? 'N' : 'S');
    }
  }
  void _add(double x1, double y1, double x2, double y2, double degree,
      String direction) {
    final line = List$1<Point?>(Point.$t)
      ..add(Point()
        ..x = x1
        ..y = y1)
      ..add(Point()
        ..x = x2
        ..y = y2);
    final paths =
        List$1<List$1<Point?>?>(List$1.$t!.specialize$1<Point?>(Point.$t))
          ..add(line);
    add(WorldFlightPath(paths)
      ..degree = degree
      ..direction = direction);
  }
}
//end data
