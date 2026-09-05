"""Backports the world temperature contour points into the code generation library.

The contour and area map samples both plot the same thing: points along the world's isotherms,
carrying the temperature at each. The web samples compute them at runtime, loading
WorldTemperatures.shp and keeping every tenth degree and every fifth point along it; the Blazor
sample ships the result as a table. The table is what gets ported — it is the same data either way,
and a fixed table renders the same on every run, which a screenshot comparison needs.

    python3 backport-world-temperatures.py <library> <blazor-sample-services>

where the second is, from a checkout of igniteui-blazor-examples:

    samples/maps/geo-map/type-scatter-contour-series/Services
"""

import os
import re
import sys

if len(sys.argv) < 3:
    raise SystemExit('\n'.join(__doc__.strip().splitlines()[-5:]))
LIB, CS_SRC = sys.argv[1], sys.argv[2]

ITEM = 'WorldTemperatures'

source = open(os.path.join(CS_SRC, 'WorldTemperatures.cs'), encoding='utf-8-sig').read()
points = [(m.group(1), m.group(2), m.group(3)) for m in re.finditer(
    r'new WorldLocation\(\)\s*\{\s*Lon\s*=\s*(-?\s*[\d.]+)\s*,\s*Lat\s*=\s*(-?\s*[\d.]+)\s*,'
    r'\s*Value\s*=\s*(-?\s*[\d.]+)\s*\}', source)]
if len(points) < 500:
    raise SystemExit(f'expected the full contour table, parsed only {len(points)}')
# The file writes negatives as "- 63.0", which is C# and not much else.
points = [tuple(v.replace(' ', '') for v in point) for point in points]

WEB = '''//begin imports
//end imports

//begin data
export class WorldLocation {
    public lon: number;
    public lat: number;
    public value: number;
}

/**
 * Points along the world's isotherms, carrying the temperature at each.
 *
 * Every tenth degree Celsius, and every fifth point along each contour — which is what the
 * shapefile these came from works out to once thinned.
 */
export class WorldTemperatures extends Array<WorldLocation> {

    public constructor() {
        super();
%(points)s
    }
}
//end data
'''

CS = '''
namespace Infragistics.Samples
{
    //begin data
    using System;
    using System.Collections.Generic;

    public class WorldLocation
    {
        public double Lon { get; set; }
        public double Lat { get; set; }
        public double Value { get; set; }
    }

    /// <summary>
    /// Points along the world's isotherms, carrying the temperature at each.
    ///
    /// Every tenth degree Celsius, and every fifth point along each contour — which is what the
    /// shapefile these came from works out to once thinned.
    /// </summary>
    public class WorldTemperatures : List<WorldLocation>
    {
        private void Add(double lon, double lat, double value)
        {
            Add(new WorldLocation() { Lon = lon, Lat = lat, Value = value });
        }

        public WorldTemperatures()
        {
%(points)s
        }
    }
    //end data
}
'''

folder = os.path.join(LIB, ITEM)
os.makedirs(folder, exist_ok=True)

open(os.path.join(folder, 'Web.ts'), 'w', encoding='utf-8').write(WEB % {
    'points': '\n'.join(
        f'        this.push({{ lon: {lon}, lat: {lat}, value: {value} }});'
        for lon, lat, value in points),
})

# Nothing here is platform specific, so one body serves every .NET target.
for platform_file in ('Blazor.cs', 'Desktop.cs'):
    open(os.path.join(folder, platform_file), 'w', encoding='utf-8').write(CS % {
        'points': '\n'.join(f'            Add({lon}, {lat}, {value});'
                            for lon, lat, value in points),
    })

print(f'{ITEM}: {len(points)} points -> Web.ts, Blazor.cs, Desktop.cs')
