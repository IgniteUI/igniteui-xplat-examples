//begin imports
import 'dart:ui' as ui;
import 'package:igniteui_flutter_charts/src/MarkerType.dart' show MarkerType;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
import 'package:igniteui_flutter_maps/src/igf-geographic-map.dart' show IgfGeographicMapState;
import 'package:igniteui_flutter_maps/src/igf-geographic-polyline-series.dart' show IgfGeographicPolylineSeriesState;
import 'package:igniteui_flutter_maps/src/igf-geographic-symbol-series.dart' show IgfGeographicSymbolSeriesState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import './MapGeodesics.dart' show MapGeodesics;
//end imports

class MapBindingDataModelOnViewInit
{
//begin eventHandler
    //Flutter: Action
    void mapBindingDataModelOnViewInit() {
        var geoMap = CodeGenHelper.getDescription<IgfGeographicMapState>("content")!;
        geoMap.updateZoomWindow(ui.Rect.fromLTWH(0.2, 0.1, 0.6, 0.6));

        var cityDAL = <String, Object?>{ "lat": 32.763, "lon": -96.663, "country": "US", "name": "Dallas" };
        var citySYD = <String, Object?>{ "lat": -33.889, "lon": 151.028, "country": "Australia", "name": "Sydney" };
        var cityNZL = <String, Object?>{ "lat": -36.848, "lon": 174.763, "country": "New Zealand", "name": "Auckland" };
        var cityQTR = <String, Object?>{ "lat": 25.285, "lon": 51.531, "country": "Qatar", "name": "Doha" };
        var cityPAN = <String, Object?>{ "lat": 8.949, "lon": -79.4, "country": "Panama", "name": "Panama" };
        var cityCHL = <String, Object?>{ "lat": -33.475, "lon": -70.647, "country": "Chile", "name": "Santiago" };
        var cityJAP = <String, Object?>{ "lat": 35.683, "lon": 139.809, "country": "Japan", "name": "Tokyo" };
        var cityALT = <String, Object?>{ "lat": 33.795, "lon": -84.349, "country": "US", "name": "Atlanta" };
        var cityJOH = <String, Object?>{ "lat": -26.178, "lon": 28.004, "country": "South Africa", "name": "Johannesburg" };
        var cityNYC = <String, Object?>{ "lat": 40.75, "lon": -74.0999, "country": "US", "name": "New York" };
        var citySNG = <String, Object?>{ "lat": 1.229, "lon": 104.177, "country": "Singapore", "name": "Singapore" };
        var cityMOS = <String, Object?>{ "lat": 55.75, "lon": 37.7, "country": "Russia", "name": "Moscow" };
        var cityROM = <String, Object?>{ "lat": 41.88, "lon": 12.52, "country": "Italy", "name": "Roma" };
        var cityLAX = <String, Object?>{ "lat": 34.0, "lon": -118.25, "country": "US", "name": "Los Angeles" };

        var flights = <Map<String, Object?>>[
            { "origin": cityDAL, "dest": citySNG, "color": "Green" },
            { "origin": cityMOS, "dest": cityNZL, "color": "Red" },
            { "origin": cityCHL, "dest": cityJAP, "color": "Blue" },
            { "origin": cityPAN, "dest": cityROM, "color": "Orange" },
            { "origin": cityALT, "dest": cityJOH, "color": "Black" },
            { "origin": cityNYC, "dest": cityQTR, "color": "Purple" },
            { "origin": cityLAX, "dest": citySYD, "color": "Gray" }
        ];

        // the route first, so that the cities at either end of it draw on top
        for (var i = 0; i < flights.length; i++) {
            this.addFlightRoute(geoMap, flights[i], i);
            this.addFlightCities(geoMap, flights[i], i);
        }
    }

    /// the flight itself, as a great circle path between its two cities
    void addFlightRoute(IgfGeographicMapState geoMap, Map<String, Object?> flight, int index) {
        var geodesics = CodeGenHelper.getSharedSupporting<MapGeodesics>("MapGeodesics")!;
        var origin = flight["origin"] as Map<String, Object?>;
        var dest = flight["dest"] as Map<String, Object?>;
        var geoPath = geodesics.calcPaths(origin, dest);
        var geoDistance = geodesics.calcDistance(origin, dest);
        var geoRoutes = <Map<String, Object?>>[{
            "points": geoPath,
            "origin": origin,
            "dest": dest,
            "distance": geoDistance,
            "time": geoDistance / 850
        }];

        var lineSeries = IgfGeographicPolylineSeriesState();
        lineSeries.name = "flight" + index.toString() + "Route";
        lineSeries.dataSource = geoRoutes;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeStrokeThickness = 9;
        lineSeries.shapeOpacity = 0.5;
        lineSeries.shapeStroke = IgfSolidColorBrush.fromString(flight["color"] as String);
        geoMap.series!.add(lineSeries);
    }

    /// the cities at either end, in the flight's own colour
    void addFlightCities(IgfGeographicMapState geoMap, Map<String, Object?> flight, int index) {
        var geoLocations = <Map<String, Object?>>[
            flight["origin"] as Map<String, Object?>,
            flight["dest"] as Map<String, Object?>
        ];

        var symbolSeries = IgfGeographicSymbolSeriesState();
        symbolSeries.name = "flight" + index.toString() + "Cities";
        symbolSeries.dataSource = geoLocations;
        symbolSeries.markerType = MarkerType.circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush = IgfSolidColorBrush.fromString("White");
        symbolSeries.markerOutline = IgfSolidColorBrush.fromString(flight["color"] as String);
        symbolSeries.thickness = 1;
        geoMap.series!.add(symbolSeries);
    }
//end eventHandler
}
