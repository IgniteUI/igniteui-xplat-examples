//begin imports
using IgniteUI.Blazor.Controls;
using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Globalization;
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

    //WPF: System.Action
    public async void MapTypeScatterDensitySeriesOnViewInit()
    {
        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var url = "https://static.infragistics.com/xplatform/data/AusPlaces.csv";
        //begin testing
        var work = GlobalQueuedWorkState.Instance;
        const string workChannel = "Sample.MapTypeScatterDensitySeriesOnViewInit.Load";
        work.NotifyWorkQueued(workChannel);
        try
        {
        //end testing
            using (var client = new HttpClient())
            {
                var csv = await client.GetStringAsync(url);
                var csvLines = csv.Split('\n');
                var geoLocations = new List<AusPlace>();
                // parsing CSV data and creating geographic locations
                for (int i = 1; i < csvLines.Length; i++)
                {
                    var columns = csvLines[i].Split(',');
                    if (columns.Length < 3) continue;
                    geoLocations.Add(new AusPlace
                    {
                        Name = columns[0],
                        Longitude = double.Parse(columns[1], CultureInfo.InvariantCulture),
                        Latitude = double.Parse(columns[2], CultureInfo.InvariantCulture)
                    });
                }
                // creating the high density series with the loaded data
                var series = new IgbGeographicHighDensityScatterSeries
                {
                    Name = "hdSeries",
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
                if (geoLocations.Count == 0) throw new InvalidOperationException("The CSV contained no geographic locations.");
                var rendered = new TaskCompletionSource<bool>();
                series.ProgressiveLoadStatusChanged = EventCallback.Factory.Create<IgbProgressiveLoadStatusEventArgs>(
                    rendered, (IgbProgressiveLoadStatusEventArgs args) =>
                    {
                        if (args.CurrentStatus == 100) rendered.TrySetResult(true);
                    });
                try
                {
                    // adding the series to the geographic map
                    map.Series.Add(series);

                    var bounds = new Rect { Left = 110, Top = -45, Width = 45, Height = 35 };
                    await map.EnsureReady();
                    await map.ZoomToGeographicAsync(bounds);
                    await rendered.Task;
                }
                finally
                {
                    series.ProgressiveLoadStatusChanged = EventCallback<IgbProgressiveLoadStatusEventArgs>.Empty;
                }
            }
        //begin testing
        }
        finally
        {
            work.NotifyWorkCompleted(workChannel);
        }
        //end testing
    }
    //end eventHandler
}
