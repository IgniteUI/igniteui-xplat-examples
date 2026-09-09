//begin imports
import { IgcGeographicMapComponent, IgcGeographicPolylineSeriesComponent, IgcGeographicSymbolSeriesComponent } from 'igniteui-webcomponents-maps';
import { MarkerType } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the MapGeodesics supporting item, which this item requires: in a generated sample those
// declarations are written beside the component, so there is no import of them there.
import { MapGeodesics } from '../MapGeodesics/Web';

export class MapBindingDataModelOnViewInit {

    //begin eventHandler
    public mapBindingDataModelOnViewInit(): void {
        var geoMap = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        geoMap.updateZoomWindow({ left: 0.2, top: 0.1, width: 0.6, height: 0.6 });

        var cityDAL = { lat: 32.763, lon: -96.663, country: "US", name: "Dallas" };
        var citySYD = { lat: -33.889, lon: 151.028, country: "Australia", name: "Sydney" };
        var cityNZL = { lat: -36.848, lon: 174.763, country: "New Zealand", name: "Auckland" };
        var cityQTR = { lat: 25.285, lon: 51.531, country: "Qatar", name: "Doha" };
        var cityPAN = { lat: 8.949, lon: -79.4, country: "Panama", name: "Panama" };
        var cityCHL = { lat: -33.475, lon: -70.647, country: "Chile", name: "Santiago" };
        var cityJAP = { lat: 35.683, lon: 139.809, country: "Japan", name: "Tokyo" };
        var cityALT = { lat: 33.795, lon: -84.349, country: "US", name: "Atlanta" };
        var cityJOH = { lat: -26.178, lon: 28.004, country: "South Africa", name: "Johannesburg" };
        var cityNYC = { lat: 40.75, lon: -74.0999, country: "US", name: "New York" };
        var citySNG = { lat: 1.229, lon: 104.177, country: "Singapore", name: "Singapore" };
        var cityMOS = { lat: 55.75, lon: 37.7, country: "Russia", name: "Moscow" };
        var cityROM = { lat: 41.88, lon: 12.52, country: "Italy", name: "Roma" };
        var cityLAX = { lat: 34.0, lon: -118.25, country: "US", name: "Los Angeles" };

        var flights = [
            { origin: cityDAL, dest: citySNG, color: "Green" },
            { origin: cityMOS, dest: cityNZL, color: "Red" },
            { origin: cityCHL, dest: cityJAP, color: "Blue" },
            { origin: cityPAN, dest: cityROM, color: "Orange" },
            { origin: cityALT, dest: cityJOH, color: "Black" },
            { origin: cityNYC, dest: cityQTR, color: "Purple" },
            { origin: cityLAX, dest: citySYD, color: "Gray" }
        ];

        // the route first, so that the cities at either end of it draw on top
        for (var i = 0; i < flights.length; i++) {
            this.addFlightRoute(geoMap, flights[i]);
            this.addFlightCities(geoMap, flights[i]);
        }
    }

    /** the flight itself, as a great circle path between its two cities */
    public addFlightRoute(geoMap: any, flight: any): void {
        var geodesics = CodeGenHelper.getSharedSupporting<MapGeodesics>("MapGeodesics");
        var geoPath = geodesics.calcPaths(flight.origin, flight.dest);
        var geoDistance = geodesics.calcDistance(flight.origin, flight.dest);
        var geoRoutes = [{
            points: geoPath,
            origin: flight.origin,
            dest: flight.dest,
            distance: geoDistance,
            time: geoDistance / 850
        }];

        var lineSeries = new IgcGeographicPolylineSeriesComponent();
        lineSeries.dataSource = geoRoutes;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeStrokeThickness = 9;
        lineSeries.shapeOpacity = 0.5;
        lineSeries.shapeStroke = flight.color;
        geoMap.series.add(lineSeries);
    }

    /** the cities at either end, in the flight's own colour */
    public addFlightCities(geoMap: any, flight: any): void {
        var geoLocations = [flight.origin, flight.dest];

        var symbolSeries = new IgcGeographicSymbolSeriesComponent();
        symbolSeries.dataSource = geoLocations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush = "White";
        symbolSeries.markerOutline = flight.color;
        symbolSeries.thickness = 1;
        geoMap.series.add(symbolSeries);
    }

    //end eventHandler
}
