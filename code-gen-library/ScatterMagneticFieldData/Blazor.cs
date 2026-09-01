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
                    this.Add(new ScatterMagneticFieldItem
                    {
                        X = x,
                        Y = y,
                        Z = Math.Cos(x) + Math.Cos(y),
                        Index = index++
                    });
                }
            }
        }
    }
    //end data
}
