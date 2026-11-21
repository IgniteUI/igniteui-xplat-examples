//begin data
import 'dart:math' as math;
import 'package:igniteui_flutter_core/src/ArrayList.dart';
import 'package:igniteui_flutter_core/src/List\$1.dart';
import 'package:igniteui_flutter_core/src/Point.dart';
import 'package:igniteui_flutter_core/src/reflection.dart'
    show IReflectableData;
import 'package:igniteui_flutter_core/src/type.dart'
    show Base, TypeInfo, Double_$type, String_$type;
import 'package:igniteui_flutter_library/WorldCities.dart';

class FlightAirport implements IReflectableData {
  final WorldCitiesItem city;
  int flights = 0;
  FlightAirport(this.city);
  double get lon => city.x;
  double get lat => city.y;
  double get pop => city.population;
  String get name => city.name!;

  Map<String, TypeInfo?> get propertyTypes => {
        'Lon': Double_$type,
        'Lat': Double_$type,
        'Pop': Double_$type,
        'Name': String_$type,
        'Country': String_$type,
        'Flights': Double_$type,
      };
  Object? getValue(String? property) {
    switch (property?.toLowerCase()) {
      case 'lon':
        return lon;
      case 'lat':
        return lat;
      case 'pop':
        return pop;
      case 'name':
        return name;
      case 'country':
        return city.country;
      case 'flights':
        return flights.toDouble();
    }
    return null;
  }

  void setValue(String? property, Object? value) {
    switch (property?.toLowerCase()) {
      case 'lon':
        city.x = (value as num).toDouble();
        break;
      case 'lat':
        city.y = (value as num).toDouble();
        break;
      case 'pop':
        city.population = (value as num).toDouble();
        break;
      case 'name':
        city.name = value as String;
        break;
      case 'country':
        city.country = value as String;
        break;
      case 'flights':
        flights = (value as num).toInt();
        break;
    }
  }
}

class WorldFlightPath implements IReflectableData {
  final List$1<List$1<Point?>?> points;
  double degree = 0;
  String direction = '';
  WorldFlightPath(this.points);
  Map<String, TypeInfo?> get propertyTypes => {
        'Points': Base.$t,
        'Degree': Double_$type,
        'Direction': String_$type,
      };
  Object? getValue(String? property) {
    switch (property?.toLowerCase()) {
      case 'points':
        return points;
      case 'degree':
        return degree;
      case 'direction':
        return direction;
    }
    return null;
  }

  void setValue(String? property, Object? value) {
    switch (property?.toLowerCase()) {
      case 'points':
        final replacement = value as List$1<List$1<Point?>?>;
        if (!identical(replacement, points)) {
          points.clear();
          for (var i = 0; i < replacement.count; i++)
            points.add(replacement[i]);
        }
        break;
      case 'degree':
        degree = (value as num).toDouble();
        break;
      case 'direction':
        direction = value as String;
        break;
    }
  }
}

class WorldFlight extends WorldFlightPath {
  String id;
  FlightAirport origin;
  FlightAirport dest;
  double distance;
  double passengers;
  double get time => distance / 800;
  WorldFlight(this.id, this.origin, this.dest, this.distance, this.passengers,
      List$1<List$1<Point?>?> points)
      : super(points);
  Map<String, TypeInfo?> get propertyTypes => {
        ...super.propertyTypes,
        'ID': String_$type,
        'Origin': Base.$t,
        'Dest': Base.$t,
        'Distance': Double_$type,
        'Passengers': Double_$type,
        'Time': Double_$type,
      };
  Object? getValue(String? property) {
    switch (property?.toLowerCase()) {
      case 'id':
        return id;
      case 'origin':
        return origin;
      case 'dest':
        return dest;
      case 'distance':
        return distance;
      case 'passengers':
        return passengers;
      case 'time':
        return time;
    }
    return super.getValue(property);
  }

  void setValue(String? property, Object? value) {
    switch (property?.toLowerCase()) {
      case 'id':
        id = value as String;
        return;
      case 'origin':
        origin = value as FlightAirport;
        return;
      case 'dest':
        dest = value as FlightAirport;
        return;
      case 'distance':
        distance = (value as num).toDouble();
        return;
      case 'passengers':
        passengers = (value as num).toDouble();
        return;
      case 'time':
        distance = (value as num).toDouble() * 800;
        return;
    }
    super.setValue(property, value);
  }
}

/// Shares the authored city data instead of maintaining another coordinate table.
class WorldFlightConnections {
  static final List<WorldFlight> flights = _buildFlights();
  static List<FlightAirport> get airports {
    final lookup = <String, FlightAirport>{};
    for (final flight in flights) {
      lookup[flight.origin.name] = flight.origin;
      lookup[flight.dest.name] = flight.dest;
    }
    return lookup.values.toList();
  }

  static List<WorldFlight> _buildFlights() {
    final cities = [
      for (final city in WorldCities().asArray()) FlightAirport(city!)
    ];
    cities.sort((a, b) => b.pop.compareTo(a.pop));
    final routes = <String>{};
    final result = <WorldFlight>[];
    final random = math.Random();
    for (final origin in cities) {
      if (origin.pop <= 3) continue;
      var connections = 0;
      final maximum = math.min(20, (origin.pop * 4).round());
      for (final dest in cities) {
        if (origin.name == dest.name || dest.pop <= 1) continue;
        final names = [origin.name, dest.name]..sort();
        final route = names.join('-');
        if (routes.contains(route)) continue;
        final distance = _distance(origin.lon, origin.lat, dest.lon, dest.lat)
            .roundToDouble();
        if (distance <= 200 || distance >= 9000) continue;
        routes.add(route);
        origin.flights++;
        dest.flights++;
        result.add(WorldFlight(
            '${origin.name.substring(0, 3).toUpperCase()}-${result.length + 1}',
            origin,
            dest,
            distance,
            (150 + random.nextInt(201)).toDouble(),
            _paths(origin, dest)));
        if (++connections > maximum) break;
      }
      if (result.length > 1500) break;
    }
    return result;
  }

  static double _radians(double degrees) => degrees * math.pi / 180;
  static double _degrees(double radians) => radians * 180 / math.pi;
  static double _distance(
      double lon, double lat, double destLon, double destLat) {
    final a = _radians(lat), b = _radians(destLat);
    final cosine = math.sin(a) * math.sin(b) +
        math.cos(a) * math.cos(b) * math.cos(_radians(destLon - lon));
    return math.acos(cosine.clamp(-1.0, 1.0)) * 6371;
  }

  static List$1<List$1<Point?>?> _paths(
      FlightAirport origin, FlightAirport dest) {
    final paths =
        List$1<List$1<Point?>?>(List$1.$t!.specialize$1<Point?>(Point.$t));
    var line = List$1<Point?>(Point.$t);
    paths.add(line);
    var lon = origin.lon, lat = origin.lat;
    final distance = _distance(lon, lat, dest.lon, dest.lat);
    const step = 200 / 6371;
    for (var traveled = 200; traveled <= distance; traveled += 200) {
      line.add(Point()
        ..x = lon
        ..y = lat);
      final a = _radians(lat), b = _radians(dest.lat);
      final delta = _radians(dest.lon - lon);
      final bearing = math.atan2(
          math.sin(delta) * math.cos(b),
          math.cos(a) * math.sin(b) -
              math.sin(a) * math.cos(b) * math.cos(delta));
      final nextLat = math.asin((math.sin(a) * math.cos(step) +
              math.cos(a) * math.sin(step) * math.cos(bearing))
          .clamp(-1.0, 1.0));
      var nextLon = _radians(lon) +
          math.atan2(math.sin(bearing) * math.sin(step) * math.cos(a),
              math.cos(step) - math.sin(a) * math.sin(a));
      nextLon = _degrees((nextLon + 3 * math.pi) % (2 * math.pi) - math.pi);
      lat = _degrees(nextLat);
      if ((lon > 150 && nextLon < -150) || (lon < -150 && nextLon > 150)) {
        final edge = lon > 0 ? 180.0 : -180.0;
        line.add(Point()
          ..x = edge
          ..y = lat);
        line = List$1<Point?>(Point.$t);
        paths.add(line);
        nextLon = -edge;
      }
      lon = nextLon;
    }
    line.add(Point()
      ..x = dest.lon
      ..y = dest.lat);
    return paths;
  }
}

class WorldFlights extends ArrayList<WorldFlight?> {
  WorldFlights() : super(List<WorldFlight?>.of(WorldFlightConnections.flights));
}
//end data
