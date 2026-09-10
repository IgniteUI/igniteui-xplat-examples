
namespace Infragistics.Samples
{
    //begin async data
    using System;
    using System.Collections.Generic;
    using System.Net.Http;
    using System.Threading.Tasks;
    using Windows.Foundation;
    using Newtonsoft.Json.Linq;

    // Every seat on the aircraft: its polygon, and what the sample colours it by -- which cabin class
    // it belongs to and whether it is sold.
    //
    // Fetched rather than written out. There are 232 seats and a few hundred points to each, and the
    // point of a seating plan is that it is the whole plan; the JSON is published, so it is read from
    // there.
    public class AirplaneSeatsItem
    {
        public string Seat { get; set; }
        public string Price { get; set; }
        public string Class { get; set; }
        public string Status { get; set; }
        public string Row { get; set; }
        public string Column { get; set; }
        public List<List<Point>> Points { get; set; }
    }

    public class AirplaneSeats : List<AirplaneSeatsItem>
    {
        public static async Task<AirplaneSeats> Fetch()
        {
            var url = "https://static.infragistics.com/xplatform/json/airplane-seats.json";
            using (var client = new HttpClient())
            {
                var text = await client.GetStringAsync(url);
                return Convert(JArray.Parse(text));
            }
        }

        // The points arrive as objects with an x and a y, which is what the JSON says; a shape series
        // wants them as points, so they are read across here rather than left for it to interpret.
        private static AirplaneSeats Convert(JArray records)
        {
            var data = new AirplaneSeats();
            foreach (var record in records)
            {
                var item = new AirplaneSeatsItem();
                item.Seat = (string)record["seat"];
                item.Price = (string)record["price"];
                item.Class = (string)record["class"];
                item.Status = (string)record["status"];
                item.Row = (string)record["row"];
                item.Column = (string)record["column"];
                item.Points = new List<List<Point>>();
                var rings = record["points"] as JArray;
                if (rings != null)
                {
                    foreach (var ring in rings)
                    {
                        var points = new List<Point>();
                        foreach (var point in (JArray)ring)
                        {
                            points.Add(new Point((double)point["x"], (double)point["y"]));
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
