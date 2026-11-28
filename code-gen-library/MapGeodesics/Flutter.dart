//begin imports
import 'dart:math' as math;
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/Point.dart' show Point;
//end imports

//begin supportingTypes
/// Great circle maths for a map: the path between two locations, and how far apart they are.
///
/// A location is a map with a "lat" and a "lon", as the requiring items write their cities. A path
/// is lists of points -- more than one when it crosses the date line -- in the shape a polyline
/// series reads, with x the longitude and y the latitude.
class MapGeodesics {

    // calculate geo-paths between two locations using great circle formula
    ArrayList<ArrayList<Point?>?> calcPaths(Map<String, Object?> origin, Map<String, Object?> dest) {
        var interval = 200.0;
        var paths = ArrayList<ArrayList<Point?>?>();
        paths.add(ArrayList<Point?>());
        var pathID = 0;
        var distance = this.calcDistance(origin, dest);
        if (distance <= interval) {
            paths[pathID]!.add(Point.c1(_lon(origin), _lat(origin)));
            paths[pathID]!.add(Point.c1(_lon(dest), _lat(dest)));
        } else {
            var current = origin;
            var previous = origin;

            for (var dist = interval; dist <= distance; dist += interval) {
                previous = current;
                paths[pathID]!.add(Point.c1(_lon(current), _lat(current)));

                var bearing = this.calcBearing(current, dest);
                current = this.calcDestination(current, bearing, interval);
                // ensure geo-path wrap around the world through the new date-line
                if (_lon(previous) > 150 && _lon(current) < -150) {
                    paths[pathID]!.add(Point.c1(180, _lat(current)));
                    paths.add(ArrayList<Point?>());
                    pathID++;
                    current = <String, Object?>{ "lon": -180.0, "lat": _lat(current) };
                } else if (_lon(previous) < -150 && _lon(current) > 150) {
                    paths[pathID]!.add(Point.c1(-180, _lat(current)));
                    paths.add(ArrayList<Point?>());
                    pathID++;
                    current = <String, Object?>{ "lon": 180.0, "lat": _lat(current) };
                }
            }
            paths[pathID]!.add(Point.c1(_lon(dest), _lat(dest)));
        }
        return paths;
    }

    // calculate bearing angle between two locations
    double calcBearing(Map<String, Object?> origin, Map<String, Object?> dest) {
        origin = this.toRadianLocation(origin);
        dest = this.toRadianLocation(dest);
        var range = (_lon(dest) - _lon(origin));
        var y = math.sin(range) * math.cos(_lat(dest));
        var x = math.cos(_lat(origin)) * math.sin(_lat(dest)) -
                math.sin(_lat(origin)) * math.cos(_lat(dest)) * math.cos(range);
        var angle = math.atan2(y, x);
        return this.toDegreesNormalized(angle);
    }

    // calculate destination for origin location and travel distance
    Map<String, Object?> calcDestination(Map<String, Object?> origin, double bearing, double distance) {
        var radius = 6371.0;
        origin = this.toRadianLocation(origin);
        bearing = this.toRadians(bearing);
        distance = distance / radius; // angular distance in radians

        var lat = math.asin(math.sin(_lat(origin)) * math.cos(distance) +
                       math.cos(_lat(origin)) * math.sin(distance) * math.cos(bearing));
        var x = math.sin(bearing) * math.sin(distance) * math.cos(_lat(origin));
        var y = math.cos(distance) - math.sin(_lat(origin)) * math.sin(_lat(origin));
        var lon = _lon(origin) + math.atan2(x, y);
        // normalize lon to coordinate between -180º and +180º. Dart's % is never negative, as
        // JavaScript's is not for these values either: lon + 3 * PI is always positive here.
        lon = (lon + 3 * math.pi) % (2 * math.pi) - math.pi;

        lon = this.toDegrees(lon);
        lat = this.toDegrees(lat);

        return <String, Object?>{ "lon": lon, "lat": lat };
    }

    // calculate distance between two locations
    double calcDistance(Map<String, Object?> origin, Map<String, Object?> dest) {
        origin = this.toRadianLocation(origin);
        dest = this.toRadianLocation(dest);
        var sinProd = math.sin(_lat(origin)) * math.sin(_lat(dest));
        var cosProd = math.cos(_lat(origin)) * math.cos(_lat(dest));
        var lonDelta = (_lon(dest) - _lon(origin));

        var angle = math.acos(sinProd + cosProd * math.cos(lonDelta));
        var distance = angle * 6371.0;
        return distance; // in km
    }

    Map<String, Object?> toRadianLocation(Map<String, Object?> geoPoint) {
        var x = this.toRadians(_lon(geoPoint));
        var y = this.toRadians(_lat(geoPoint));
        return <String, Object?>{ "lon": x, "lat": y };
    }

    double toRadians(double degrees) {
        return degrees * math.pi / 180;
    }

    double toDegrees(double radians) {
        return (radians * 180.0 / math.pi);
    }

    double toDegreesNormalized(double radians) {
        var degrees = this.toDegrees(radians);
        degrees = (degrees + 360) % 360;
        return degrees;
    }

    static double _lat(Map<String, Object?> location) {
        return (location["lat"] as num).toDouble();
    }

    static double _lon(Map<String, Object?> location) {
        return (location["lon"] as num).toDouble();
    }
}
//end supportingTypes
