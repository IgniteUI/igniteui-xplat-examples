//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
//end imports

public class MapDisplayHeatImageryOnViewInit
{
    //begin eventHandler
    public async void MapDisplayHeatImageryOnViewInit()
    {
        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        map.ZoomToGeographic(new Rect() { Left = -134.5, Top = 16.0, Width = 70.0, Height = 37.0 });

        var url = "https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv";
        var client = new HttpClient();
        var csv = await client.GetStringAsync(url);
        var csvLines = csv.Split('\n');

        var latitudes = new List<double>();
        var longitudes = new List<double>();
        var populations = new List<double>();
        for (int i = 1; i < csvLines.Length; i++)
        {
            var columns = csvLines[i].Split(',');
            if (columns.Length < 4) continue;
            latitudes.Add(double.Parse(columns[1]));
            longitudes.Add(double.Parse(columns[2]));
            populations.Add(double.Parse(columns[3]));
        }

        // the heat map's tiles are generated from the three parallel arrays: where each reading is,
        // and how large it is
        var gen = new IgbHeatTileGenerator();
        gen.XValues = longitudes.ToArray();
        gen.YValues = latitudes.ToArray();
        gen.Values = populations.ToArray();
        gen.BlurRadius = 6;
        gen.MaxBlurRadius = 20;
        gen.UseBlurRadiusAdjustedForZoom = true;
        gen.MinimumColor = "rgba(100, 255, 0, 0.5)";
        gen.MaximumColor = "rgba(255, 255, 0, 0.5)";
        gen.UseGlobalMinMax = true;
        gen.UseGlobalMinMaxAdjustedForZoom = true;
        gen.UseLogarithmicScale = true;
        gen.ScaleColors = new string[]
        {
            "rgba(0, 0, 255, .251)",
            "rgba(0, 255, 255, .3765)",
            "rgba(50, 205, 50, .2675)",
            "rgba(255, 255, 0, .7059)",
            "rgba(255, 0, 0, .7843)"
        };
        // Generating the tiles on a worker keeps them off the thread the map draws on, which is
        // worth doing for a heat map of any size. Wiring one up is not the same on every host, so
        // the topic shows it separately — and workers are turned off here to match, since the
        // generator asks for one by default and throws when neither a script path nor an instance
        // was given.
        gen.UseWebWorkers = false;

        var tileImagery = new IgbTileGeneratorMapImagery();
        tileImagery.TileGenerator = gen;

        var series = new IgbGeographicTileSeries();
        series.TileImagery = tileImagery;
        await map.Series.AddAsync(series);
    }
    //end eventHandler
}
