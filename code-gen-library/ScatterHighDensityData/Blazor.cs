namespace Infragistics.Samples
{
    //begin data
    using System;
    using System.Collections.Generic;

    public class ScatterHighDensityItem
    {
        public double X { get; set; }
        public double Y { get; set; }
    }

    public class ScatterHighDensityData : List<ScatterHighDensityItem>
    {
        private static readonly Random Random = new Random();

        public ScatterHighDensityData()
        {
            var amount = 25000;
            Generate(amount / 2, 0, 0, 75000, 20000);
            Generate(amount / 4, 0, 0, 100000, 25000);
            Generate(amount / 8, 0, 0, 150000, 30000);
            Generate(amount / 8, 0, 0, 200000, 75000);
        }

        private void Generate(int count, int centerX, int centerY, int spreadX, int spreadY)
        {
            for (var i = 0; i <= count; i++)
            {
                var rangeX = Random.NextDouble() * spreadX;
                var rangeY = Random.NextDouble() * spreadY;
                var quadrant = Random.NextDouble();
                if (quadrant >= .25 && quadrant < .5) rangeX *= -1;
                else if (quadrant >= .5 && quadrant < .75) rangeY *= -1;
                else if (quadrant >= .75) { rangeX *= -1; rangeY *= -1; }

                var x = Math.Round(centerX + rangeX * (Random.NextDouble() + 0.12));
                var y = Math.Round(centerY + rangeY * (Random.NextDouble() + 0.12));
                Add(new ScatterHighDensityItem { X = x, Y = y });
            }
        }
    }
    //end data
}
