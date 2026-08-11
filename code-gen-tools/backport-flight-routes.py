"""Backports the geographic data model sample's series building into the code generation library.

The sample draws seven flights, each as a polyline for the route and a symbol series for its two
cities, coloured per flight. Fourteen series built from seven rows is not something a description
can state, so it goes in an onViewInit handler — which is also how the sample teaches it.

The geodesic maths goes in a second item, MapGeodesicsOnViewInit, which the sample lists first.
Every item in an init list contributes its methods to the same component, so the series building
calls the helpers without importing anything — which is the one way the library can share code
today. A fence asks for one of the two with item=, so the topic shows the series building alone.

C# takes the maths as nested types, verbatim from the sample. TypeScript cannot: the handler region
is spliced into a class body, where a class declaration is not legal, so the static methods become
methods of the component instead.

    python3 backport-flight-routes.py <library> <wc-sample-src> <blazor-sample-services>
"""

import os
import re
import sys

if len(sys.argv) < 4:
    raise SystemExit('\n'.join(__doc__.strip().splitlines()[-1:]))
LIB, WEB_SRC, CS_SRC = sys.argv[1], sys.argv[2], sys.argv[3]

ITEM = 'MapBindingDataModelOnViewInit'
MATHS_ITEM = 'MapGeodesicsOnViewInit'


def read(folder, name):
    return open(os.path.join(folder, name), encoding='utf-8-sig').read()


def ts_maths_as_methods(source):
    """
    The geodesic helpers, as methods rather than statics.

    The class wrapper goes, `public static` becomes `public`, and calls that named the class name
    the component instead. Inside the helpers the calls are already `this.`, which reads the same
    either way.
    """
    # Some copies of the file export the class as the default, some do not.
    body = re.search(r'export (?:default )?class WorldUtils \{([\s\S]*)\n\}', source).group(1)
    keep = ('calcPaths', 'calcBearing', 'calcDestination', 'calcDistance',
            'toRadianLocation', 'toRadians', 'toDegrees', 'toDegreesNormalized')
    methods = []
    for match in re.finditer(r'\n(    (?:// [^\n]*\n    )*public static (\w+)[\s\S]*?\n    \})',
                             body):
        if match.group(2) in keep:
            methods.append(match.group(1).replace('public static ', 'public '))
    missing = [k for k in keep if not any(f'public {k}(' in m for m in methods)]
    if missing:
        raise SystemExit(f'did not find these helpers in WorldUtils.ts: {missing}')
    text = '\n\n'.join(methods)
    return text.replace('WorldUtils.', 'this.')


def cs_nested_types(names):
    """The sample's own declarations, renested inside the component class."""
    parts = []
    for name in names:
        source = read(CS_SRC, name)
        source = re.sub(r'^\s*using .*$\n', '', source, flags=re.M)
        match = re.search(r'namespace [\w.]+\s*\{([\s\S]*)\}\s*$', source)
        body = (match.group(1) if match else source).rstrip()
        lines = [l for l in body.split('\n')]
        common = min((len(l) - len(l.lstrip()) for l in lines if l.strip()), default=0)
        parts.append('\n'.join(l[common:] if l.strip() else '' for l in lines).strip())
    return '\n\n'.join(parts)


# ---------------------------------------------------------------------------
# The flights, stated once and rendered into both languages.
# ---------------------------------------------------------------------------

CITIES = [
    ('cityDAL', 32.763, -96.663, 'US', 'Dallas'),
    ('citySYD', -33.889, 151.028, 'Australia', 'Sydney'),
    ('cityNZL', -36.848, 174.763, 'New Zealand', 'Auckland'),
    ('cityQTR', 25.285, 51.531, 'Qatar', 'Doha'),
    ('cityPAN', 8.949, -79.400, 'Panama', 'Panama'),
    ('cityCHL', -33.475, -70.647, 'Chile', 'Santiago'),
    ('cityJAP', 35.683, 139.809, 'Japan', 'Tokyo'),
    ('cityALT', 33.795, -84.349, 'US', 'Atlanta'),
    ('cityJOH', -26.178, 28.004, 'South Africa', 'Johannesburg'),
    ('cityNYC', 40.750, -74.0999, 'US', 'New York'),
    ('citySNG', 1.229, 104.177, 'Singapore', 'Singapore'),
    ('cityMOS', 55.750, 37.700, 'Russia', 'Moscow'),
    ('cityROM', 41.880, 12.520, 'Italy', 'Roma'),
    ('cityLAX', 34.000, -118.25, 'US', 'Los Angeles'),
]

FLIGHTS = [
    ('cityDAL', 'citySNG', 'Green'),
    ('cityMOS', 'cityNZL', 'Red'),
    ('cityCHL', 'cityJAP', 'Blue'),
    ('cityPAN', 'cityROM', 'Orange'),
    ('cityALT', 'cityJOH', 'Black'),
    ('cityNYC', 'cityQTR', 'Purple'),
    ('cityLAX', 'citySYD', 'Gray'),
]


def ts_cities(pad):
    return '\n'.join(
        f'{pad}var {n} = {{ lat: {lat}, lon: {lon}, country: "{c}", name: "{name}" }};'
        for n, lat, lon, c, name in CITIES)


def ts_flights(pad):
    rows = ',\n'.join(f'{pad}    {{ origin: {o}, dest: {d}, color: "{c}" }}' for o, d, c in FLIGHTS)
    return f'{pad}var flights = [\n{rows}\n{pad}];'


def cs_cities(pad):
    return '\n'.join(
        f'{pad}var {n[0].upper() + n[1:]} = new WorldCity() {{ Lat = {lat}, Lon = {lon}, '
        f'Country = "{c}", Name = "{name}" }};'
        for n, lat, lon, c, name in CITIES)


def cs_flights(pad):
    def cap(n):
        return n[0].upper() + n[1:]
    rows = ',\n'.join(
        f'{pad}    new FlightInfo() {{ Origin = {cap(o)}, Dest = {cap(d)}, Color = "{c}" }}'
        for o, d, c in FLIGHTS)
    return f'{pad}var flights = new List<FlightInfo>() {{\n{rows}\n{pad}}};'


# ---------------------------------------------------------------------------

WEB = '''//begin imports
import { IgcGeographicMapComponent, IgcGeographicPolylineSeriesComponent, IgcGeographicSymbolSeriesComponent } from 'igniteui-webcomponents-maps';
import { MarkerType } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class MapBindingDataModelOnViewInit {

    //begin eventHandler
    public mapBindingDataModelOnViewInit(): void {
        var geoMap = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        geoMap.updateZoomWindow({ left: 0.2, top: 0.1, width: 0.6, height: 0.6 });

%(cities)s

%(flights)s

        // the route first, so that the cities at either end of it draw on top
        for (var i = 0; i < flights.length; i++) {
            this.addFlightRoute(geoMap, flights[i]);
            this.addFlightCities(geoMap, flights[i]);
        }
    }

    /** the flight itself, as a great circle path between its two cities */
    public addFlightRoute(geoMap: any, flight: any): void {
        var geoPath = this.calcPaths(flight.origin, flight.dest);
        var geoDistance = this.calcDistance(flight.origin, flight.dest);
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
'''

MATHS_WEB = '''//begin imports
//end imports

export class MapGeodesicsOnViewInit {

    //begin eventHandler
    /**
     * Nothing to do when the view appears; this item is here for the geodesic helpers below, which
     * the handlers listed after it call. Every item in an init list puts its methods on the same
     * component, which is how they reach each other without an import.
     */
    public mapGeodesicsOnViewInit(): void {
    }

%(maths)s
    //end eventHandler
}
'''

MATHS_CS = '''//begin imports
%(usings)s
//end imports

public class MapGeodesicsOnViewInit
{
    //begin eventHandler
%(types)s

    /// <summary>
    /// Nothing to do when the view appears; this item is here for the types and the geodesic
    /// helpers above, which the handlers listed after it use. Every item in an init list puts its
    /// members on the same component, which is how they reach each other without an import.
    /// </summary>
    //WPF: System.Action
    public void MapGeodesicsOnViewInit()
    {
    }
    //end eventHandler
}
'''

CS = '''//begin imports
%(usings)s
//end imports

public class MapBindingDataModelOnViewInit
{
    //begin eventHandler
    //WPF: System.Action
    public void MapBindingDataModelOnViewInit()
    {
        var geoMap = CodeGenHelper.GetDescription<%(map)s>("content");
        geoMap.UpdateZoomWindow(new Rect() { Left = 0.2, Top = 0.1, Width = 0.6, Height = 0.6 });

%(cities)s

%(flights)s

        // the route first, so that the cities at either end of it draw on top
        foreach (var flight in flights)
        {
            AddFlightRoute(geoMap, flight);
            AddFlightCities(geoMap, flight);
        }
    }

    /// <summary>The flight itself, as a great circle path between its two cities.</summary>
    public void AddFlightRoute(%(map)s geoMap, FlightInfo flight)
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

        var lineSeries = new %(polyline)s();
        lineSeries.DataSource = geoRoutes;
        lineSeries.ShapeMemberPath = "Points";
        lineSeries.ShapeStrokeThickness = 9;
        lineSeries.ShapeOpacity = 0.5;
        lineSeries.ShapeStroke = flight.Color;
        geoMap.Series.Add(lineSeries);
    }

    /// <summary>The cities at either end, in the flight's own colour.</summary>
    public void AddFlightCities(%(map)s geoMap, FlightInfo flight)
    {
        var geoLocations = new List<WorldCity>() { flight.Origin, flight.Dest };

        var symbolSeries = new %(symbol)s();
        symbolSeries.DataSource = geoLocations;
        symbolSeries.MarkerType = MarkerType.Circle;
        symbolSeries.LatitudeMemberPath = "Lat";
        symbolSeries.LongitudeMemberPath = "Lon";
        symbolSeries.MarkerBrush = "White";
        symbolSeries.MarkerOutline = flight.Color;
        symbolSeries.Thickness = 1;
        geoMap.Series.Add(symbolSeries);
    }
    //end eventHandler
}
'''

PLATFORMS = {
    'Blazor.cs': {
        'usings': 'using IgniteUI.Blazor.Controls;\nusing System;\n'
                  'using System.Collections.Generic;\nusing System.Linq;',
        'map': 'IgbGeographicMap',
        'polyline': 'IgbGeographicPolylineSeries',
        'symbol': 'IgbGeographicSymbolSeries',
    },
    'WinUI.cs': {
        'usings': 'using Infragistics.Core;\nusing Infragistics.Controls.Charts;\n'
                  'using Infragistics.Controls.Maps;\nusing System;\n'
                  'using System.Collections.Generic;\nusing System.Linq;',
        'map': 'XamGeographicMap',
        'polyline': 'GeographicPolylineSeries',
        'symbol': 'GeographicSymbolSeries',
    },
    'WPF.cs': {
        'usings': 'using Infragistics.Controls.Charts;\nusing Infragistics.Controls.Maps;\n'
                  'using System;\nusing System.Collections.Generic;\nusing System.Linq;\n'
                  'using System.Windows;',
        'map': 'XamGeographicMap',
        'polyline': 'GeographicPolylineSeries',
        'symbol': 'GeographicSymbolSeries',
    },
}

maths = ts_maths_as_methods(read(WEB_SRC, 'WorldUtils.ts'))
types = cs_nested_types(('GeoLocation.cs', 'WorldCity.cs', 'WorldUtils.cs'))
# FlightInfo is declared alongside WorldConnections, which this item does not need.
types += '''

public class FlightInfo
{
    public WorldCity Origin { get; set; }
    public WorldCity Dest { get; set; }
    public double Distance { get; set; }
    public double Time { get; set; }
    public List<List<Point>> Points { get; set; }
    public string Color { get; set; }
}'''

def write(item, web, csharp_for_platform):
    folder = os.path.join(LIB, item)
    os.makedirs(folder, exist_ok=True)
    open(os.path.join(folder, 'Web.ts'), 'w', encoding='utf-8').write(web)
    for platform_file, names in PLATFORMS.items():
        open(os.path.join(folder, platform_file), 'w',
             encoding='utf-8').write(csharp_for_platform(names))
    print(f'  {item}: Web.ts, {", ".join(PLATFORMS)}')


# The helpers, and the types the C# side needs for them.
write(MATHS_ITEM,
      # Already at the class body's indent, having been lifted straight out of one.
      MATHS_WEB % {'maths': maths},
      lambda names: MATHS_CS % dict(
          names, types='\n'.join('    ' + l if l.strip() else '' for l in types.split('\n'))))

# The flights, and the two series each one draws.
write(ITEM,
      WEB % {'cities': ts_cities(' ' * 8), 'flights': ts_flights(' ' * 8)},
      lambda names: CS % dict(
          names, cities=cs_cities(' ' * 8), flights=cs_flights(' ' * 8)))
