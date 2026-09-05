
namespace Infragistics.Samples
{
    //begin async data
    using System;
    using System.Collections.Generic;
    using System.Net.Http;
    using System.Threading.Tasks;
    using System.Text.Json;

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
                using (var json = JsonDocument.Parse(text))
                {
                    return Convert(json.RootElement);
                }
            }
        }

        // The points arrive as objects with an x and a y, which is what the JSON says; a shape series
        // wants them as points, so they are read across here rather than left for it to interpret.
        private static AirplaneShape Convert(JsonElement records)
        {
            var data = new AirplaneShape();
            foreach (var record in records.EnumerateArray())
            {
                var item = new AirplaneShapeItem();
                item.Points = new List<List<AirplanePoint>>();
                JsonElement rings;
                if (record.TryGetProperty("points", out rings))
                {
                    foreach (var ring in rings.EnumerateArray())
                    {
                        var points = new List<AirplanePoint>();
                        foreach (var point in ring.EnumerateArray())
                        {
                            points.Add(new AirplanePoint() {
                                X = point.GetProperty("x").GetDouble(),
                                Y = point.GetProperty("y").GetDouble() });
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
