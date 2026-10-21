namespace Infragistics.Samples
{
    //begin data
    using IgniteUI.Blazor.Controls;
    using System.Collections.Generic;

    public class TestScatterShapeData8 : List<List<Point>>
    {
        public TestScatterShapeData8()
        {
            AddRing(10, 10, 10, 40, 40, 40, 40, 10);
            AddRing(60, 10, 60, 40, 90, 40, 90, 10);
            AddRing(10, 60, 10, 90, 40, 90, 40, 60);
            AddRing(60, 60, 60, 90, 90, 90, 90, 60);
        }

        private void AddRing(double x1, double y1, double x2, double y2,
            double x3, double y3, double x4, double y4)
        {
            Add(new List<Point>
            {
                new Point(x1, y1),
                new Point(x2, y2),
                new Point(x3, y3),
                new Point(x4, y4)
            });
        }
    }
    //end data
}
