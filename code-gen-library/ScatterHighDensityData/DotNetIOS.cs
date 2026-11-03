
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
        public static Random random = new Random();

        public ScatterHighDensityData()
        {
            var amount = 25000;

            Generate(amount / 2, 0, 0, 75000, 20000);
            Generate(amount / 4, 0, 0, 100000, 25000);
            Generate(amount / 8, 0, 0, 150000, 30000);
            Generate(amount / 8, 0, 0, 200000, 75000);
        }

        public void Generate(int count, int centerX, int centerY, int spreadX, int spreadY) {

            for (var i = 0; i <= count; i++)
            {
                var rangeX = random.NextDouble() * spreadX;
                var rangeY = random.NextDouble() * spreadY;
                var prop = random.NextDouble();
                var flip = 1;

                if (prop < .25) {
                    rangeX *= flip;
                    rangeY *= flip;
                }
                else if (prop >= .25 && prop < .5) {
                    rangeX *= - flip;
                    rangeY *= flip;
                }
                else if (prop >= .5 && prop < .75) {
                    rangeX *= flip;
                    rangeY *= - flip;
                }
                else {
                    rangeX *= - flip;
                    rangeY *= - flip;
                }

                var dispersionX = random.NextDouble() + 0.12;
                var dispersionY = random.NextDouble() + 0.12;
                var x = Math.Round(centerX + (rangeX * dispersionX));
                var y = Math.Round(centerY + (rangeY * dispersionY));

                Add(new ScatterHighDensityItem { X = x, Y = y });
            }
        }
    }
    //end data
}
