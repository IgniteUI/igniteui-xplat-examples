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
    public void ReadPolygons(object sender, EventArgs e)
    {
        var sds = sender as IgbShapeDataSource;
        var geoPolygons = new List<object>();
        foreach (var record in sds.GetPointData())
        {
            geoPolygons.Add(new
            {
                points = record.Points,
                name = record.FieldValues["NAME"],
                population = record.FieldValues["POP_2005"]
            });
        }

        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var polygonSeries = map.Series[0] as IgbGeographicShapeSeries;
        polygonSeries.DataSource = geoPolygons;
    }
    //end readPolygons

    //begin readPolylines
    /// <summary>Connections between places, each record one path.</summary>
    public void ReadPolylines(object sender, EventArgs e)
    {
        var sds = sender as IgbShapeDataSource;
        var geoPolylines = new List<object>();
        foreach (var record in sds.GetPointData())
        {
            geoPolylines.Add(new
            {
                points = record.Points,
                name = record.FieldValues["Name"],
                capacity = record.FieldValues["CapacityG"],
                distance = record.FieldValues["DistanceKM"]
            });
        }

        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var lineSeries = map.Series[1] as IgbGeographicPolylineSeries;
        lineSeries.DataSource = geoPolylines;
    }
    //end readPolylines

    //begin readPoints
    /// <summary>Capital cities only, one point per record.</summary>
    public void ReadPoints(object sender, EventArgs e)
    {
        var sds = sender as IgbShapeDataSource;
        var geoLocations = new List<object>();
        foreach (var record in sds.GetPointData())
        {
            if ((string)record.FieldValues["CAPITAL"] == "N") continue;
            // each of these records holds a single point
            geoLocations.Add(new
            {
                latitude = record.Points[0][0].Y,
                longitude = record.Points[0][0].X,
                city = record.FieldValues["NAME"],
                population = record.FieldValues["POPULATION"]
            });
        }

        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var symbolSeries = map.Series[2] as IgbGeographicSymbolSeries;
        symbolSeries.DataSource = geoLocations;
    }
    //end readPoints
}
//end supportingTypes
