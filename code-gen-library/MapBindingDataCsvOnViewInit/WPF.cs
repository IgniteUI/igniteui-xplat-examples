//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Controls.Maps;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Net.Http;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Media;
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

    //WPF: System.Action
    public async void MapBindingDataCsvOnViewInit()
    {
        var map = CodeGenHelper.GetDescription<XamGeographicMap>("content");
        var url = "https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv";
        //begin testing
        var work = Infragistics.GlobalQueuedWorkState.Instance;
        const string workChannel = "Sample.MapBindingDataCsvOnViewInit.Load";
        work.NotifyWorkQueued(workChannel);
        try
        {
        //end testing
            using (var client = new HttpClient())
            {
                var csv = await client.GetStringAsync(url);
                var csvLines = csv.Split('\n');
                var geoLocations = new List<WorldPlaceCsv>();
                // parsing CSV data and creating geographic locations
                for (int i = 1; i < csvLines.Length; i++)
                {
                    var columns = csvLines[i].Split(',');
                    if (columns.Length < 4) continue;
                    geoLocations.Add(new WorldPlaceCsv
                    {
                        Name = columns[0],
                        Latitude = double.Parse(columns[1], CultureInfo.InvariantCulture),
                        Longitude = double.Parse(columns[2], CultureInfo.InvariantCulture),
                        Population = double.Parse(columns[3], CultureInfo.InvariantCulture)
                    });
                }
                // creating the series with the loaded data
                var series = new GeographicHighDensityScatterSeries
                {
                    Name = "hdSeries",
                    ItemsSource = geoLocations,
                    LatitudeMemberPath = "Latitude",
                    LongitudeMemberPath = "Longitude",
                    HeatMaximumColor = Colors.Red,
                    HeatMinimumColor = Colors.Black,
                    HeatMinimum = 0,
                    HeatMaximum = 5,
                    PointExtent = 1,
                    MouseOverEnabled = true
                };
                if (geoLocations.Count == 0) throw new InvalidOperationException("The CSV contained no geographic locations.");
                var rendered = new TaskCompletionSource<bool>();
                EventHandler<ProgressiveLoadStatusEventArgs> onProgress = (sender, args) =>
                {
                    if (args.CurrentStatus == 100) rendered.TrySetResult(true);
                };
                series.ProgressiveLoadStatusChanged += onProgress;
                try
                {
                    // adding the series to the geographic map
                    map.Series.Add(series);

                    var geoBounds = new Rect(-130, 15, Math.Abs(-130 + 65), Math.Abs(50 - 15));
                    // zooming to the bounds of the lower 48 states
                    map.ZoomToGeographic(geoBounds);
                    await rendered.Task;
                }
                finally
                {
                    series.ProgressiveLoadStatusChanged -= onProgress;
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
