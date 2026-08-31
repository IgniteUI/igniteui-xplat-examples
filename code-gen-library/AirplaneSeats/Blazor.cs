
namespace Infragistics.Samples
{
    //begin async data
    using System;
    using System.Collections.Generic;
    using System.Net.Http;
    using System.Threading.Tasks;
    using System.Text.Json;

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
        public List<List<AirplanePoint>> Points { get; set; }
    }

    public class AirplaneSeats : List<AirplaneSeatsItem>
    {
        public static async Task<AirplaneSeats> Fetch()
        {
            var url = "https://static.infragistics.com/xplatform/json/airplane-seats.json";
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
        private static AirplaneSeats Convert(JsonElement records)
        {
            var data = new AirplaneSeats();
            foreach (var record in records.EnumerateArray())
            {
                var item = new AirplaneSeatsItem();
                item.Seat = Text(record, "seat");
                item.Price = Text(record, "price");
                item.Class = Text(record, "class");
                item.Status = Text(record, "status");
                item.Row = Text(record, "row");
                item.Column = Text(record, "column");
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

        private static string Text(JsonElement record, string name)
        {
            JsonElement value;
            if (!record.TryGetProperty(name, out value))
            {
                return null;
            }
            return value.ValueKind == JsonValueKind.String ? value.GetString() : value.ToString();
        }

    }
    //end async data
}
