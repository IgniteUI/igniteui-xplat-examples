//begin imports
using Infragistics.Controls.Maps;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Windows;
//end imports

//begin supportingTypes
/// <summary>
/// What the shapefile becomes once it has loaded: records turned into routes, bound to the series
/// that draws them.
///
/// A handler for the shapefile converter's ImportCompleted, and the converter is created in code by
/// the item that requires this one — so there is nothing in a description to bind it to, and it is
/// not an initializer either.
/// </summary>
public class MapShpFileReaders
{
    //begin readRoutes
    /// <summary>Each record is one cable route, with the fields the database holds beside it.</summary>
    public void ReadRoutes(object sender, AsyncCompletedEventArgs e)
    {
        var sds = sender as ShapefileConverter;
        var geoRoutes = new List<object>();
        foreach (var record in sds)
        {
            geoRoutes.Add(new
            {
                Points = record.Points,
                Name = record.Fields["Name"],
                Capacity = record.Fields["CapacityG"],
                Distance = record.Fields["DistanceKM"]
            });
        }

        var map = CodeGenHelper.GetDescription<XamGeographicMap>("content");
        var lineSeries = map.Series[0] as GeographicPolylineSeries;
        lineSeries.ItemsSource = geoRoutes;
    }
    //end readRoutes
}
//end supportingTypes
