//begin imports
using IgniteUI.Blazor.Controls;
using Newtonsoft.Json.Linq;
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
        var array = JArray.Parse(json);
        var geoLocations = new List<WorldPlaceJson>();
        foreach (var item in array)
        {
            if (item.Value<bool>("cap") == false) continue;
            geoLocations.Add(new WorldPlaceJson
            {
                Name = item.Value<string>("name"),
                Lat = item.Value<double>("lat"),
                Lon = item.Value<double>("lon"),
                Pop = item.Value<double>("pop"),
                Country = item.Value<string>("country"),
                Cap = item.Value<bool>("cap")
            });
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
        await map.Series.AddAsync(series);
    }
    //end eventHandler
}
