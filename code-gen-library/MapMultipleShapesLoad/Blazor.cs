//begin imports
using IgniteUI.Blazor.Controls;
//end imports

//begin eventHandler
/// <summary>
/// Three shapefiles, each read into the series that draws it. A shapefile is fetched and parsed
/// asynchronously, so each source is given the method that turns its records into data when it
/// arrives — those are the items listed alongside this one.
/// </summary>
public void MapMultipleShapesLoad()
{
    var root = "https://static.infragistics.com/xplatform/shapes/";

    var sdsPolygons = new IgbShapeDataSource()
    {
        ShapefileSource = root + "WorldCountries.shp",
        DatabaseSource = root + "WorldCountries.dbf"
    };
    sdsPolygons.ImportCompleted += MapMultipleShapesPolygons;
    sdsPolygons.DataBind();

    var sdsPolylines = new IgbShapeDataSource()
    {
        ShapefileSource = root + "WorldConnections.shp",
        DatabaseSource = root + "WorldConnections.dbf"
    };
    sdsPolylines.ImportCompleted += MapMultipleShapesPolylines;
    sdsPolylines.DataBind();

    var sdsLocations = new IgbShapeDataSource()
    {
        ShapefileSource = root + "WorldCities.shp",
        DatabaseSource = root + "WorldCities.dbf"
    };
    sdsLocations.ImportCompleted += MapMultipleShapesPoints;
    sdsLocations.DataBind();
}
//end eventHandler
