//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using Infragistics.Controls.Maps;
using System;
using System.Collections.Generic;
using System.Windows;
using System.Windows.Media;
//end imports

public class MapDisplayHeatImageryOnViewInit
{
    //begin eventHandler
    //WPF: System.Action
    public void MapDisplayHeatImageryOnViewInit()
    {
        var map = CodeGenHelper.GetDescription<XamGeographicMap>("content");
        map.ZoomToGeographic(new Rect(-134.5, 16.0, 70.0, 37.0));

        var root = "https://static.infragistics.com/xplatform/shapes/";

        var sds = new ShapefileConverter();
        sds.ImportCompleted += (s, e) =>
        {
            var latitudes = new List<double>();
            var longitudes = new List<double>();
            var populations = new List<double>();
            // parsing shapefile data and creating geographic locations
            foreach (var record in sds)
            {
                for (int j = 0; j < record.Points.Count; j++)
                {
                    var pointsList = record.Points[j];
                    for (int k = 0; k < pointsList.Count; k++)
                    {
                        latitudes.Add(pointsList[k].Y);
                        longitudes.Add(pointsList[k].X);
                    }
                }
                // using field/column names from .DBF file
                var value = (double)record.Fields["POP_2010"];
                populations.Add(value >= 0 ? value : 0);
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

            // generating heat map series
            var series = new GeographicTileSeries();
            series.TileImagery = tileImagery;
            // adding the heat map series to the map
            map.Series.Add(series);
        };
        sds.ShapefileSource = new Uri(root + "AmericanCities.shp");
        sds.DatabaseSource = new Uri(root + "AmericanCities.dbf");
    }
    //end eventHandler
}
