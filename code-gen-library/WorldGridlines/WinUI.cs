
namespace Infragistics.Samples
{
    //begin data
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Infragistics.Core;

    /// <summary>Meridians and parallels every thirty degrees, as polylines.</summary>
    public class WorldGridlines : List<CoordinateLine>
    {
        public WorldGridlines()
        {
            AddRange(WorldConnections.GetGridlines());
        }
    }
    //end data
}
