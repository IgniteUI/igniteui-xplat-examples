//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Controls.Maps;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Media;
//end imports

public class MapDisplayHeatImageryOnViewInit
{
    //begin eventHandler
    //WPF: System.Action
    public async void MapDisplayHeatImageryOnViewInit()
    {
        var map = CodeGenHelper.GetDescription<XamGeographicMap>("content");
        map.ZoomToGeographic(new Rect(-134.5, 16.0, 70.0, 37.0));

        var url = "https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv";
        var client = new HttpClient();
        var csv = await client.GetStringAsync(url);
        var csvLines = csv.Split('\n');

        var latitudes = new List<double>();
        var longitudes = new List<double>();
        var populations = new List<double>();
        // parsing CSV data and creating geographic locations
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
        // generating heat map imagery tiles
        var gen = new HeatTileGenerator();
        gen.XValues = longitudes.ToArray();
        gen.YValues = latitudes.ToArray();
        gen.Values = populations.ToArray();
        gen.BlurRadius = 6;
        gen.MaxBlurRadius = 20;
        gen.UseBlurRadiusAdjustedForZoom = true;
        gen.MinimumColor = Color.FromArgb(128, 100, 255, 0);
        gen.MaximumColor = Color.FromArgb(128, 255, 255, 0);
        gen.UseGlobalMinMax = true;
        gen.UseGlobalMinMaxAdjustedForZoom = true;
        gen.UseLogarithmicScale = true;
        gen.ScaleColors = new Color[]
        {
            Color.FromArgb(64, 0, 0, 255),
            Color.FromArgb(96, 0, 255, 255),
            Color.FromArgb(68, 50, 205, 50),
            Color.FromArgb(180, 255, 255, 0),
            Color.FromArgb(200, 255, 0, 0)
        };

        var tileImagery = new TileGeneratorMapImagery();
        tileImagery.TileGenerator = gen;

        // generating heat map series
        var series = new GeographicTileSeries();
        series.TileImagery = tileImagery;
        // adding the heat map series to the map
        map.Series.Add(series);
    }
    //end eventHandler
}
