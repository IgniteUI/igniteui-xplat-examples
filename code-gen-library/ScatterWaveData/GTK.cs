
namespace Infragistics.Samples
{
    //begin data
    using System;
    using System.Collections.Generic;

    public class ScatterWaveItem
    {
        public double X { get; set; }
        public double SinValue { get; set; }
        public double CosValue { get; set; }
    }

    public class ScatterWaveData : List<ScatterWaveItem>
    {
        public ScatterWaveData()
        {
            // Two full turns either side of zero, every ten degrees: a pair of curves that cross
            // the origin in both directions, which is what a sample about where the axes cross
            // needs.
            for (var degrees = -360.0; degrees <= 360; degrees += 10)
            {
                var radians = (degrees * Math.PI) / 180;
                var item = new ScatterWaveItem();
                item.X = degrees;
                item.SinValue = Math.Sin(radians);
                item.CosValue = Math.Cos(radians);
                this.Add(item);
            }
        }
    }
    //end data
}
