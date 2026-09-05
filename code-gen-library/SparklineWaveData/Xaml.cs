
namespace Infragistics.Samples
{
    //begin data
    using System;
    using System.Collections.Generic;

    public class SparklineWaveItem
    {
        public int Index { get; set; }
        public double Angle { get; set; }
        public double Value { get; set; }
    }

    public class SparklineWaveData : List<SparklineWaveItem>
    {
        public SparklineWaveData()
        {
            // Four turns of a wave, sampled every five degrees. A sparkline is a shape read at a
            // glance rather than a chart read point by point, so it wants a few hundred readings;
            // the second harmonic is what keeps the shape from being a plain sine, and the values
            // cross zero, which is what the win/loss display type needs to have anything to show.
            var index = 0;
            for (var angle = 0.0; angle < 360 * 4; angle += 5)
            {
                var fundamental = Math.Sin(angle * Math.PI / 180);
                var harmonic = Math.Sin(3 * angle * Math.PI / 180) / 3;
                var item = new SparklineWaveItem();
                item.Index = index++;
                item.Angle = angle;
                item.Value = fundamental + harmonic;
                this.Add(item);
            }
        }
    }
    //end data
}
