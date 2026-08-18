//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Collections.Generic;
//end imports

//begin supportingTypes
/// <summary>
/// What the shapefile becomes once it has loaded: records turned into routes, bound to the series
/// that draws them.
///
/// A handler for the shape data source's ImportCompleted, and the source is created in code by the
/// item that requires this one — so there is nothing in a description to bind it to, and it is not
/// an initializer either.
/// </summary>
public class MapShpFileReaders
{
    //begin readRoutes
    /// <summary>Each record is one cable route, with the fields the database holds beside it.</summary>
    public void ReadRoutes(object sender, EventArgs e)
    {
        var sds = sender as IgbShapeDataSource;
        var geoRoutes = new List<object>();
        // parsing shapefile data and creating geo-locations
        foreach (var record in sds.GetPointData())
        {
            // using field/column names from .DBF file
            geoRoutes.Add(new
            {
                points = record.Points,
                name = record.FieldValues["Name"],
                capacity = record.FieldValues["CapacityG"],
                distance = record.FieldValues["DistanceKM"]
            });
        }

        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var lineSeries = map.Series[0] as IgbGeographicPolylineSeries;
        lineSeries.DataSource = geoRoutes;
    }
    //end readRoutes
}
//end supportingTypes
