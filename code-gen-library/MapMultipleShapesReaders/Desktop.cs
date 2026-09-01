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
    public void ReadPolygons(object sender, AsyncCompletedEventArgs e)
    {
        var sds = sender as ShapefileConverter;
        var geoPolygons = new List<object>();
        // parsing shapefile data and creating geo-polygons
        foreach (var record in sds)
        {
            // using field/column names from .DBF file
            geoPolygons.Add(new
            {
                Points = record.Points,
                Name = record.Fields["NAME"],
                Population = record.Fields["POP_2005"]
            });
        }

        var map = CodeGenHelper.GetDescription<XamGeographicMap>("content");
        var polygonSeries = map.Series[0] as GeographicShapeSeries;
        polygonSeries.ItemsSource = geoPolygons;
    }
    //end readPolygons

    //begin readPolylines
    /// <summary>Connections between places, each record one path.</summary>
    public void ReadPolylines(object sender, AsyncCompletedEventArgs e)
    {
        var sds = sender as ShapefileConverter;
        var geoPolylines = new List<object>();
        // parsing shapefile data and creating geo-polylines
        foreach (var record in sds)
        {
            // using field/column names from .DBF file
            geoPolylines.Add(new
            {
                Points = record.Points,
                Name = record.Fields["Name"],
                Capacity = record.Fields["CapacityG"],
                Distance = record.Fields["DistanceKM"],
                IsOverLand = (double)record.Fields["OverLand"] == 0,
                IsActive = (double)record.Fields["NotLive"] != 0,
                Service = record.Fields["InService"]
            });
        }

        var map = CodeGenHelper.GetDescription<XamGeographicMap>("content");
        var lineSeries = map.Series[1] as GeographicPolylineSeries;
        lineSeries.ItemsSource = geoPolylines;
    }
    //end readPolylines

    //begin readPoints
    /// <summary>Cities with a known population, one point per record.</summary>
    public void ReadPoints(object sender, AsyncCompletedEventArgs e)
    {
        var sds = sender as ShapefileConverter;
        var geoLocations = new List<object>();
        // parsing shapefile data and creating geo-locations
        foreach (var record in sds)
        {
            var pop = (double)record.Fields["POPULATION"];
            if (pop > 0)
            {
                // each of these records holds a single point
                // using field/column names from .DBF file
                geoLocations.Add(new
                {
                    Latitude = record.Points[0][0].Y,
                    Longitude = record.Points[0][0].X,
                    City = record.Fields["NAME"],
                    Population = pop
                });
            }
        }

        var map = CodeGenHelper.GetDescription<XamGeographicMap>("content");
        var symbolSeries = map.Series[2] as GeographicSymbolSeries;
        symbolSeries.ItemsSource = geoLocations;
    }
    //end readPoints
}
//end supportingTypes
