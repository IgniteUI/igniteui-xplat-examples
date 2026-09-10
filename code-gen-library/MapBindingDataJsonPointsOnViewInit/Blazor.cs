//begin imports
using IgniteUI.Blazor.Controls;
using System.Text.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
//end imports

public class MapBindingDataJsonPointsOnViewInit
{
    //begin eventHandler
    public class WorldPlaceJson
    {
        public string Name { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
        public double Pop { get; set; }
        public string Country { get; set; }
        public bool Cap { get; set; }
    }

    public async void MapBindingDataJsonPointsOnViewInit()
    {
        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var url = "https://static.infragistics.com/xplatform/data/WorldCities.json";
        var client = new HttpClient();
        var json = await client.GetStringAsync(url);
        var geoLocations = new List<WorldPlaceJson>();
        using (var document = JsonDocument.Parse(json))
        {
            foreach (var item in document.RootElement.EnumerateArray())
            {
                if (!item.GetProperty("cap").GetBoolean()) continue;
                geoLocations.Add(new WorldPlaceJson
                {
                    Name = item.GetProperty("name").GetString(),
                    Lat = item.GetProperty("lat").GetDouble(),
                    Lon = item.GetProperty("lon").GetDouble(),
                    Pop = item.GetProperty("pop").GetDouble(),
                    Country = item.GetProperty("country").GetString(),
                    Cap = item.GetProperty("cap").GetBoolean()
                });
            }
        }
        var series = new IgbGeographicSymbolSeries
        {
            DataSource = geoLocations,
            LatitudeMemberPath = "Lat",
            LongitudeMemberPath = "Lon",
            MarkerBrush = "rgba(255, 255, 255, 1.0)",
            MarkerOutline = "rgba(135, 5, 255, 1.0)",
            MarkerThickness = 1,
            MarkerType = MarkerType.Circle
        };
        map.Series.Add(series);
    }
    //end eventHandler
}
