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
            for (var degrees = -360.0; degrees <= 360; degrees += 10)
            {
                var radians = (degrees * Math.PI) / 180;
                this.Add(new ScatterWaveItem
                {
                    X = degrees,
                    SinValue = Math.Sin(radians),
                    CosValue = Math.Cos(radians)
                });
            }
        }
    }
    //end data
}
