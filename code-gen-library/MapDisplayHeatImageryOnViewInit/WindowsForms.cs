//begin imports
using Infragistics.Win.DataVisualization;
using System;
using System.Collections.Generic;
using Color = System.Drawing.Color;
//end imports

public class MapDisplayHeatImageryOnViewInit
{
    //begin eventHandler
    //WindowsForms: System.Action
    public void MapDisplayHeatImageryOnViewInit()
    {
        var map = CodeGenHelper.GetDescription<UltraGeographicMap>("content");
        map.ZoomToGeographic(new Infragistics.Win.DataVisualization.Rectangle(-134.5, 16.0, 70.0, 37.0));

        var root = "https://static.infragistics.com/xplatform/shapes/";

        var sds = new ShapefileConverter();
        var work = Infragistics.Portable.GlobalQueuedWorkState.Instance;
        const string channel = "Sample.MapDisplayHeatImageryOnViewInit";
        work.NotifyWorkQueued(channel);
        bool requestedTiles = false;
        bool completed = false;
        Action complete = () =>
        {
            if (completed) return;
            completed = true;
            work.NotifyWorkCompleted(channel);
        };
        sds.ImportCompleted += (s, e) =>
        {
            try
            {
                if (e.Error != null) throw e.Error;
                var latitudes = new List<double>();
                var longitudes = new List<double>();
                var populations = new List<double>();
                foreach (var record in sds)
                {
                    var population = (double)record.Fields["POP2010"];
                    foreach (var part in record.Points)
                    {
                        foreach (var point in part)
                        {
                            latitudes.Add(point.Y);
                            longitudes.Add(point.X);
                            populations.Add(population >= 0 ? population : 0);
                        }
                    }
                }

                // the heat map's tiles are generated from the three parallel arrays: where each reading
                // is, and how large it is
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
                tileImagery.DownloadingImage += (sender, args) => requestedTiles = true;

                // Bind the imagery to the series declared in the sample JSON.
                var series = (GeographicTileSeries)map.Series[0];
                series.ImageTilesReady += (sender, args) =>
                {
                    if (requestedTiles) complete();
                };
                series.TileImagery = tileImagery;
            }
            catch
            {
                complete();
                throw;
            }
        };
        sds.ShapefileSource = new Uri(root + "AmericanCities.shp");
        sds.DatabaseSource = new Uri(root + "AmericanCities.dbf");
    }
    //end eventHandler
}
