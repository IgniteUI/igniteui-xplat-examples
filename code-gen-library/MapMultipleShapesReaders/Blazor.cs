//begin imports
using IgniteUI.Blazor.Controls;
//end imports

//begin supportingTypes
/// <summary>
/// What each of the three shapefiles becomes once it has loaded: records turned into data, bound to
/// the series that draws them.
///
/// These are handlers for a shape data source's ImportCompleted, and the source is created in code by
/// the item that requires this one — so there is nothing in a description to bind them to, and they
/// are not initializers either. A supporting item is what they are: a type asked for by name, whose
/// methods the loader wires up.
/// </summary>
public class MapMultipleShapesReaders
{
    //begin readPolygons
    /// <summary>Country shapes, with the fields the tooltip shows taken from the .DBF file.</summary>
    public void ReadPolygons(IgbShapeDataSource source, IgbGeographicMap map)
    {
        var polygonSeries = map.Series[0] as IgbGeographicShapeSeries;
        polygonSeries.ShapefileDataSource = source;
    }
    //end readPolygons

    //begin readPolylines
    /// <summary>Connections between places, each record one path.</summary>
    public void ReadPolylines(IgbShapeDataSource source, IgbGeographicMap map)
    {
        var lineSeries = map.Series[1] as IgbGeographicPolylineSeries;
        lineSeries.ShapefileDataSource = source;
    }
    //end readPolylines

    //begin readPoints
    /// <summary>Cities with a known population, one point per record.</summary>
    public void ReadPoints(object locations, IgbGeographicMap map)
    {
        var symbolSeries = map.Series[2] as IgbGeographicSymbolSeries;
        symbolSeries.DataSource = locations;
    }
    //end readPoints
}
//end supportingTypes
