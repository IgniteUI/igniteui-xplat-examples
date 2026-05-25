//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
//end imports

public class MapBindingDataCsvOnViewInit
{
    //begin eventHandler
    public class WorldPlaceCsv
    {
        public string Name { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public double Population { get; set; }
    }

    public async void MapBindingDataCsvOnViewInit()
    {
        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var url = "https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv";
        var client = new HttpClient();
        var csv = await client.GetStringAsync(url);
        var csvLines = csv.Split('\n');
        var geoLocations = new List<WorldPlaceCsv>();
        for (int i = 1; i < csvLines.Length; i++)
        {
            var columns = csvLines[i].Split(',');
            if (columns.Length < 4) continue;
            geoLocations.Add(new WorldPlaceCsv
            {
                Name = columns[0],
                Latitude = double.Parse(columns[1]),
                Longitude = double.Parse(columns[2]),
                Population = double.Parse(columns[3])
            });
        }
        var series = new IgbGeographicHighDensityScatterSeries
        {
            Name = "hdSeries",
            DataSource = geoLocations,
            LatitudeMemberPath = "Latitude",
            LongitudeMemberPath = "Longitude",
            HeatMaximumColor = "Red",
            HeatMinimumColor = "Black",
            HeatMinimum = 0,
            HeatMaximum = 5,
            PointExtent = 1,
            MouseOverEnabled = true
        };
        await map.Series.AddAsync(series);

        var geoBounds = new Rect() { Left = -130, Top = 15, Width = Math.Abs(-130 + 65), Height = Math.Abs(50 - 15) };
        map.ZoomToGeographic(geoBounds);
    }
    //end eventHandler
}
