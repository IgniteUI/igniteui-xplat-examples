
namespace Infragistics.Samples
{
    //begin data
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Windows;

    /// <summary>
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
    }
    //end data
}
