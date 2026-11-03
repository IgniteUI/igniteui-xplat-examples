"""Backports the world flight, airport and gridline data into the code generation library.

The data is computed rather than listed: flight paths are great circle arcs interpolated between
city pairs, and the airports are whichever cities those flights touch. So the port carries the
arithmetic, not a table of results.

Both languages come from the samples that already run them — the TypeScript from
igniteui-wc-examples, the C# from igniteui-blazor-examples. The documentation's own resource pages
(geo-map-resources-world-util and friends) publish a version of the same code, but it has drifted:
its WorldConnections is an instance class where the sample's is static, its WorldUtils still has
debugging output in it, and its AddAirport counts flights per city where the sample's does not. The
running samples are what compile, so they are what gets ported.

Three items come out of it. WorldFlights holds the shared implementation; WorldAirports and
WorldGridlines are the other two collections a sample binds. The library has no way to share code
between items, so on the web those two import from WorldFlights and are only usable alongside it.
In C# they need no import, being in the same namespace.

Regenerate rather than editing the emitted files, so the two languages cannot drift.

    python3 backport-world-connections.py <library> <wc-sample-src> <blazor-sample-services>

where the last two are, from a checkout of each repository:

    igniteui-wc-examples/samples/maps/geo-map/binding-multiple-sources/src
    igniteui-blazor-examples/samples/maps/geo-map/binding-multiple-sources/Services
"""

import os
import re
import sys

if len(sys.argv) < 4:
    raise SystemExit('\n'.join(__doc__.strip().splitlines()[-6:]))
LIB, WEB_SRC, CS_SRC = sys.argv[1], sys.argv[2], sys.argv[3]


def read(folder, name):
    return open(os.path.join(folder, name), encoding='utf-8-sig').read()


def clean_ts(source):
    """One module holds all three files, so their imports and default exports go."""
    source = re.sub(r'^import .*$\n', '', source, flags=re.M)
    source = source.replace('export default class', 'export class')
    return source.strip()


def clean_cs(source):
    """
    Strips the file's own usings and namespace, leaving the declarations.

    The item supplies one namespace around all of them, and one set of usings, because the library
    packages an item as a single file per platform.
    """
    source = re.sub(r'^\s*using .*$\n', '', source, flags=re.M)
    match = re.search(r'namespace [\w.]+\s*\{([\s\S]*)\}\s*$', source)
    body = match.group(1) if match else source
    lines = body.rstrip().split('\n')
    common = min((len(l) - len(l.lstrip()) for l in lines if l.strip()), default=0)
    return '\n'.join(l[common:] if l.strip() else '' for l in lines).strip()


def indent(source, spaces):
    pad = ' ' * spaces
    return '\n'.join(pad + l if l.strip() else '' for l in source.split('\n'))


# Where Point comes from is the one thing that differs between the .NET platforms. The Blazor
# sample's own using is the evidence for that one; the other two follow the shape data items
# already in the library.
POINT_USING = {
    'Blazor.cs': 'using IgniteUI.Blazor.Controls;',
    'WinUI.cs': 'using Infragistics.Core;',
    'WPF.cs': 'using System.Windows;',
}

CS_SHARED = '\n\n'.join(clean_cs(read(CS_SRC, f)) for f in (
    'GeoLocation.cs', 'WorldCity.cs', 'WorldLocations.cs', 'WorldUtils.cs', 'WorldConnections.cs'))

WEB_SHARED = '\n\n'.join(clean_ts(read(WEB_SRC, f)) for f in (
    'WorldLocations.ts', 'WorldUtils.ts', 'WorldConnections.ts'))


def csharp_item(body, shared=False):
    def for_platform(platform_file):
        parts = [CS_SHARED, body] if shared else [body]
        return '''
namespace Infragistics.Samples
{
    //begin data
    using System;
    using System.Collections.Generic;
    using System.Linq;
    %(point)s

%(body)s
    //end data
}
''' % {'point': POINT_USING[platform_file], 'body': indent('\n\n'.join(parts), 4)}
    return for_platform


def web_item(body, shared=False, imports=None):
    header = '//begin imports\n//end imports\n'
    if imports:
        header += f"\nimport {{ {imports} }} from './WorldFlights';\n"
    parts = [WEB_SHARED, body] if shared else [body]
    return f'{header}\n//begin data\n' + '\n\n'.join(parts) + '\n//end data\n'


ITEMS = {
    'WorldFlights': (
        """/** Flights between the world's larger cities, as great circle paths. */
export class WorldFlights extends Array<any> {

    public constructor() {
        super();
        var flights = WorldConnections.getFlights();
        for (var i = 0; i < flights.length; i++) {
            this.push(flights[i]);
        }
    }
}""",
        """/// <summary>Flights between the world's larger cities, as great circle paths.</summary>
public class WorldFlights : List<FlightInfo>
{
    public WorldFlights()
    {
        AddRange(WorldConnections.GetFlights());
    }
}""",
        True, None),

    'WorldAirports': (
        """/**
 * The cities the flights land at.
 *
 * Derived from the flights rather than listed, so a city no flight reaches is not an airport.
 */
export class WorldAirports extends Array<any> {

    public constructor() {
        super();
        var airports = WorldConnections.getAirports();
        for (var i = 0; i < airports.length; i++) {
            this.push(airports[i]);
        }
    }
}""",
        """/// <summary>
/// The cities the flights land at.
///
/// Derived from the flights rather than listed, so a city no flight reaches is not an airport.
/// </summary>
public class WorldAirports : List<WorldCity>
{
    public WorldAirports()
    {
        AddRange(WorldConnections.GetAirports());
    }
}""",
        False, 'WorldConnections'),

    'WorldGridlines': (
        """/** Meridians and parallels every thirty degrees, as polylines. */
export class WorldGridlines extends Array<any> {

    public constructor() {
        super();
        var gridlines = WorldConnections.getGridlines();
        for (var i = 0; i < gridlines.length; i++) {
            this.push(gridlines[i]);
        }
    }
}""",
        """/// <summary>Meridians and parallels every thirty degrees, as polylines.</summary>
public class WorldGridlines : List<CoordinateLine>
{
    public WorldGridlines()
    {
        AddRange(WorldConnections.GetGridlines());
    }
}""",
        False, 'WorldConnections'),
}

print(f'shared implementation: {len(WEB_SHARED.splitlines())} lines of TypeScript, '
      f'{len(CS_SHARED.splitlines())} of C#')

for name, (web, csharp, shared, imports) in ITEMS.items():
    folder = os.path.join(LIB, name)
    os.makedirs(folder, exist_ok=True)
    open(os.path.join(folder, 'Web.ts'), 'w', encoding='utf-8').write(
        web_item(web, shared=shared, imports=imports))
    build = csharp_item(csharp, shared=shared)
    for platform_file in POINT_USING:
        open(os.path.join(folder, platform_file), 'w', encoding='utf-8').write(build(platform_file))
    print(f'  {name}: Web.ts, {", ".join(POINT_USING)}')
