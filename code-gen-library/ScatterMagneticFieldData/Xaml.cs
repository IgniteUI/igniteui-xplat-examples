
namespace Infragistics.Samples
{
    //begin data
    using System;
    using System.Collections.Generic;

    public class ScatterMagneticFieldItem
    {
        public double X { get; set; }
        public double Y { get; set; }
        public double Z { get; set; }
        public int Index { get; set; }
    }

    public class ScatterMagneticFieldData : List<ScatterMagneticFieldItem>
    {
        public ScatterMagneticFieldData()
        {
            // An eleven by eleven grid of readings laid over the whole globe, so the longitude and
            // latitude a scatter area or contour series draws against are the grid's own axes.
            var xMin = -180.0;
            var xMax = 180.0;
            var yMin = -90.0;
            var yMax = 90.0;
            var xCount = 11;
            var yCount = 11;

            var xStep = (xMax - xMin) / (xCount - 1);
            var yStep = (yMax - yMin) / (yCount - 1);
            var index = 0;
            for (var x = xMin; x <= xMax; x += xStep)
            {
                for (var y = yMin; y <= yMax; y += yStep)
                {
                    var item = new ScatterMagneticFieldItem();
                    item.X = x;
                    item.Y = y;
                    // The value at each intersection: two cosines, one per axis, which gives the
                    // banded field the color scale is there to show.
                    item.Z = Math.Cos(x) + Math.Cos(y);
                    item.Index = index++;
                    this.Add(item);
                }
            }
        }
    }
    //end data
}
