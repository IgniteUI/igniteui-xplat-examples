//begin imports
using IgniteUI.Blazor.Controls;
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
    /// <summary>Each record is one cable route, with the fields the database holds beside it.</summary>
    public void ReadRoutes(IgbShapeDataSource source, IgbGeographicMap map)
    {
        var lineSeries = map.Series[0] as IgbGeographicPolylineSeries;
        lineSeries.ShapefileDataSource = source;
    }
}
//end supportingTypes
