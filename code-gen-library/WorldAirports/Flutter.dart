//begin data
import 'package:igniteui_flutter_core/src/ArrayList.dart';
import 'package:igniteui_flutter_library/WorldFlights.dart';

/// The cities reached by the shared flight routes, with their connection counts.
class WorldAirports extends ArrayList<FlightAirport?> {
  WorldAirports()
      : super(List<FlightAirport?>.of(WorldFlightConnections.airports));
}
//end data
