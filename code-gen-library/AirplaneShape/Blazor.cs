
namespace Infragistics.Samples
{
    //begin async data
    using System;
    using System.Collections.Generic;
    using System.Net.Http;
    using System.Threading.Tasks;
    using Newtonsoft.Json.Linq;

    // The outline of the aircraft, as one polygon: a list of rings, each a list of points, which is
    // what a shape series reads through its shape member path.
    //
    // Fetched rather than written out. The shape is a few thousand points and the seating plan beside
    // it is a few hundred times that; both are published as JSON, and a sample about drawing shapes
    // is better for having the real outline than a simplified one that would fit in a file here.
    public class AirplanePoint
    {
        public double X { get; set; }
        public double Y { get; set; }
    }

    public class AirplaneShapeItem
    {
        public List<List<AirplanePoint>> Points { get; set; }
    }

    public class AirplaneShape : List<AirplaneShapeItem>
    {
        public static async Task<AirplaneShape> Fetch()
        {
            var url = "https://static.infragistics.com/xplatform/json/airplane-shape.json";
            using (var client = new HttpClient())
            {
                var text = await client.GetStringAsync(url);
                return Convert(JArray.Parse(text));
            }
        }

        // The points arrive as objects with an x and a y, which is what the JSON says; a shape series
        // wants them as points, so they are read across here rather than left for it to interpret.
        private static AirplaneShape Convert(JArray records)
        {
            var data = new AirplaneShape();
            foreach (var record in records)
            {
                var item = new AirplaneShapeItem();
                item.Points = new List<List<AirplanePoint>>();
                var rings = record["points"] as JArray;
                if (rings != null)
                {
                    foreach (var ring in rings)
                    {
                        var points = new List<AirplanePoint>();
                        foreach (var point in (JArray)ring)
                        {
                            points.Add(new AirplanePoint() { X = (double)point["x"], Y = (double)point["y"] });
                        }
                        item.Points.Add(points);
                    }
                }
                data.Add(item);
            }
            return data;
        }
    }
    //end async data
}
