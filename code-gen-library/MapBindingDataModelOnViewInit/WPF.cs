//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Controls.Maps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Windows.Media;
//end imports

public class MapBindingDataModelOnViewInit
{
    //begin eventHandler
    //WPF: System.Action
    public void MapBindingDataModelOnViewInit()
    {
        var geoMap = CodeGenHelper.GetDescription<XamGeographicMap>("content");
        geoMap.UpdateZoomWindow(new Rect(0.2, 0.1, 0.6, 0.6));

        var CityDAL = new WorldCity() { Lat = 32.763, Lon = -96.663, Country = "US", Name = "Dallas" };
        var CitySYD = new WorldCity() { Lat = -33.889, Lon = 151.028, Country = "Australia", Name = "Sydney" };
        var CityNZL = new WorldCity() { Lat = -36.848, Lon = 174.763, Country = "New Zealand", Name = "Auckland" };
        var CityQTR = new WorldCity() { Lat = 25.285, Lon = 51.531, Country = "Qatar", Name = "Doha" };
        var CityPAN = new WorldCity() { Lat = 8.949, Lon = -79.4, Country = "Panama", Name = "Panama" };
        var CityCHL = new WorldCity() { Lat = -33.475, Lon = -70.647, Country = "Chile", Name = "Santiago" };
        var CityJAP = new WorldCity() { Lat = 35.683, Lon = 139.809, Country = "Japan", Name = "Tokyo" };
        var CityALT = new WorldCity() { Lat = 33.795, Lon = -84.349, Country = "US", Name = "Atlanta" };
        var CityJOH = new WorldCity() { Lat = -26.178, Lon = 28.004, Country = "South Africa", Name = "Johannesburg" };
        var CityNYC = new WorldCity() { Lat = 40.75, Lon = -74.0999, Country = "US", Name = "New York" };
        var CitySNG = new WorldCity() { Lat = 1.229, Lon = 104.177, Country = "Singapore", Name = "Singapore" };
        var CityMOS = new WorldCity() { Lat = 55.75, Lon = 37.7, Country = "Russia", Name = "Moscow" };
        var CityROM = new WorldCity() { Lat = 41.88, Lon = 12.52, Country = "Italy", Name = "Roma" };
        var CityLAX = new WorldCity() { Lat = 34.0, Lon = -118.25, Country = "US", Name = "Los Angeles" };

        var flights = new List<FlightInfo>() {
            new FlightInfo() { Origin = CityDAL, Dest = CitySNG, Color = "Green" },
            new FlightInfo() { Origin = CityMOS, Dest = CityNZL, Color = "Red" },
            new FlightInfo() { Origin = CityCHL, Dest = CityJAP, Color = "Blue" },
            new FlightInfo() { Origin = CityPAN, Dest = CityROM, Color = "Orange" },
            new FlightInfo() { Origin = CityALT, Dest = CityJOH, Color = "Black" },
            new FlightInfo() { Origin = CityNYC, Dest = CityQTR, Color = "Purple" },
            new FlightInfo() { Origin = CityLAX, Dest = CitySYD, Color = "Gray" }
        };

        // the route first, so that the cities at either end of it draw on top
        foreach (var flight in flights)
        {
            AddFlightRoute(geoMap, flight);
            AddFlightCities(geoMap, flight);
        }
    }

    /// <summary>The flight itself, as a great circle path between its two cities.</summary>
    public void AddFlightRoute(XamGeographicMap geoMap, FlightInfo flight)
    {
        var geoOrigin = new GeoLocation() { Lat = flight.Origin.Lat, Lon = flight.Origin.Lon };
        var geoDest = new GeoLocation() { Lat = flight.Dest.Lat, Lon = flight.Dest.Lon };
        var geoDistance = WorldUtils.CalcDistance(geoOrigin, geoDest);
        var geoRoutes = new List<FlightInfo>() {
            new FlightInfo() {
                Points = WorldUtils.CalcPaths(geoOrigin, geoDest),
                Origin = flight.Origin,
                Dest = flight.Dest,
                Distance = geoDistance,
                Time = geoDistance / 850
            }
        };

        var lineSeries = new GeographicPolylineSeries();
        lineSeries.ItemsSource = geoRoutes;
        lineSeries.ShapeMemberPath = "Points";
        lineSeries.Thickness = 9;
        lineSeries.Opacity = 0.5;
        lineSeries.Outline = (Brush)new BrushConverter().ConvertFromString(flight.Color);
        geoMap.Series.Add(lineSeries);
    }

    /// <summary>The cities at either end, in the flight's own colour.</summary>
    public void AddFlightCities(XamGeographicMap geoMap, FlightInfo flight)
    {
        var geoLocations = new List<WorldCity>() { flight.Origin, flight.Dest };

        var symbolSeries = new GeographicSymbolSeries();
        symbolSeries.ItemsSource = geoLocations;
        symbolSeries.MarkerType = MarkerType.Circle;
        symbolSeries.LatitudeMemberPath = "Lat";
        symbolSeries.LongitudeMemberPath = "Lon";
        symbolSeries.MarkerBrush = new SolidColorBrush(Colors.White);
        symbolSeries.MarkerOutline = (Brush)new BrushConverter().ConvertFromString(flight.Color);
        symbolSeries.Thickness = 1;
        geoMap.Series.Add(symbolSeries);
    }
    //end eventHandler
}
