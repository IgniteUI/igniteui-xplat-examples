//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Controls.Maps;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Windows;
//end imports

//begin supportingTypes
/// <summary>
/// What each of the three shapefiles becomes once it has loaded: records turned into data, bound to
/// the series that draws them.
///
/// These are handlers for a shapefile converter's ImportCompleted, and the converter is created in
/// code by the item that requires this one — so there is nothing in a description to bind them to,
/// and they are not initializers either. A supporting item is what they are: a type asked for by
/// name, whose methods the loader wires up.
/// </summary>
public class MapMultipleShapesReaders
{
    //begin readPolygons
    /// <summary>Country shapes, with the fields the tooltip shows taken from the .DBF file.</summary>
    public void ReadPolygons(object? sender, AsyncCompletedEventArgs e, XamGeographicMap map)
    {
        if (e.Error != null || sender is not ShapeDataSource sds) return;

        var geoPolygons = new List<object>();
        for (int i = 0; i < sds.Count; i++)
        {
            var record = sds[i];
            // using field/column names from .DBF file
            geoPolygons.Add(new
            {
                Points = record.Points,
                Name = record.Fields["NAME"],
                Gdp = record.Fields["GDP"],
                Population = record.Fields["POPULATION"]
            });
        }

        var polygonSeries = (GeographicShapeSeries)map.Series[0];
        polygonSeries.ItemsSource = geoPolygons;
    }
    //end readPolygons

    //begin readPolylines
    /// <summary>Connections between places, each record one path.</summary>
    public void ReadPolylines(object? sender, AsyncCompletedEventArgs e, XamGeographicMap map)
    {
        if (e.Error != null || sender is not ShapeDataSource sds) return;

        var geoPolylines = new List<object>();
        for (int i = 0; i < sds.Count; i++)
        {
            var record = sds[i];
            geoPolylines.Add(new
            {
                Points = record.Points,
                Name = record.Fields["Name"],
                Capacity = record.Fields["CapacityG"],
                Distance = record.Fields["DistanceKM"],
                // a route whose in-service year is blank has no InService field at all
                Service = record.Fields.ContainsKey("InService") ? record.Fields["InService"] : null
            });
        }

        var lineSeries = (GeographicPolylineSeries)map.Series[1];
        lineSeries.ItemsSource = geoPolylines;
    }

    //end readPolylines

    //begin readPoints
    /// <summary>Cities with a known population, one point per record.</summary>
    public void ReadPoints(object? sender, AsyncCompletedEventArgs e, XamGeographicMap map)
    {
        if (e.Error != null || sender is not ShapeDataSource sds) return;

        var geoLocations = new List<object>();
        for (int i = 0; i < sds.Count; i++)
        {
            var record = sds[i];
            var pop = Convert.ToDouble(record.Fields["POPULATION"]);
            if (pop > 0)
            {
                // each of these records holds a single point
                geoLocations.Add(new
                {
                    Latitude = record.Points[0][0].Y,
                    Longitude = record.Points[0][0].X,
                    City = record.Fields["NAME"],
                    Population = pop
                });
            }
        }

        var symbolSeries = (GeographicSymbolSeries)map.Series[2];
        symbolSeries.ItemsSource = geoLocations;
    }
    //end readPoints
}
//end supportingTypes
