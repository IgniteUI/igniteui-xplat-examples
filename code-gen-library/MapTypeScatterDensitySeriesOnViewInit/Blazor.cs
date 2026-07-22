//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
//end imports

public class MapTypeScatterDensitySeriesOnViewInit
{
    //begin eventHandler
    public class AusPlace
    {
        public string Name { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }

    public async void MapTypeScatterDensitySeriesOnViewInit()
    {
        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var url = "https://static.infragistics.com/xplatform/data/AusPlaces.csv";
        var client = new HttpClient();
        var csv = await client.GetStringAsync(url);
        var csvLines = csv.Split('\n');
        var geoLocations = new List<AusPlace>();
        for (int i = 1; i < csvLines.Length; i++)
        {
            var columns = csvLines[i].Split(',');
            if (columns.Length < 3) continue;
            geoLocations.Add(new AusPlace
            {
                Name = columns[0],
                Longitude = double.Parse(columns[1]),
                Latitude = double.Parse(columns[2])
            });
        }
        var series = new IgbGeographicHighDensityScatterSeries
        {
            DataSource = geoLocations,
            LongitudeMemberPath = "Longitude",
            LatitudeMemberPath = "Latitude",
            HeatMaximumColor = "Red",
            HeatMinimumColor = "Black",
            HeatMinimum = 0,
            HeatMaximum = 5,
            PointExtent = 1,
            MouseOverEnabled = true
        };
        await map.Series.AddAsync(series);

        var bounds = new Rect() { Left = 110, Top = -10, Width = 45, Height = -35 };
        map.ZoomToGeographic(bounds);
    }
    //end eventHandler
}
