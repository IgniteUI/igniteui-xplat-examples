//begin imports
using IgniteUI.Blazor.Controls;
//end imports

//begin eventHandler
/// <summary>
/// Three shapefiles, each read into the series that draws it. A shapefile is fetched and parsed
/// asynchronously, so each source is given the method that turns its records into data when it
/// arrives — those methods belong to the supporting item this one requires.
/// </summary>
public void MapMultipleShapesLoad()
{
    var root = "https://static.infragistics.com/xplatform/shapes/";
    var readers = CodeGenHelper.GetSharedSupporting<MapMultipleShapesReaders>("MapMultipleShapesReaders");

    var sdsPolygons = new IgbShapeDataSource()
    {
        ShapefileSource = root + "WorldCountries.shp",
        DatabaseSource = root + "WorldCountries.dbf"
    };
    sdsPolygons.ImportCompleted += readers.ReadPolygons;
    sdsPolygons.DataBind();

    var sdsPolylines = new IgbShapeDataSource()
    {
        ShapefileSource = root + "WorldCableRoutes.shp",
        DatabaseSource = root + "WorldCableRoutes.dbf"
    };
    sdsPolylines.ImportCompleted += readers.ReadPolylines;
    sdsPolylines.DataBind();

    var sdsLocations = new IgbShapeDataSource()
    {
        ShapefileSource = root + "WorldCities.shp",
        DatabaseSource = root + "WorldCities.dbf"
    };
    sdsLocations.ImportCompleted += readers.ReadPoints;
    sdsLocations.DataBind();
}
//end eventHandler
