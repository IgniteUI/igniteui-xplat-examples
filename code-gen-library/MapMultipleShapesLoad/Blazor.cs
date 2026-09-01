//begin imports
using IgniteUI.Blazor.Controls;
using System.Collections;
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
    var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
    var polygonSeries = map.Series[0] as IgbGeographicShapeSeries;
    var lineSeries = map.Series[1] as IgbGeographicPolylineSeries;
    var symbolSeries = map.Series[2] as IgbGeographicSymbolSeries;

    polygonSeries.ShapefileDataSource = new IgbShapeDataSource()
    {
        ShapefileSource = root + "WorldCountries.shp",
        DatabaseSource = root + "WorldCountries.dbf"
    };
    lineSeries.ShapefileDataSource = new IgbShapeDataSource()
    {
        ShapefileSource = root + "WorldCableRoutes.shp",
        DatabaseSource = root + "WorldCableRoutes.dbf"
    };
    symbolSeries.DataSource = CodeGenHelper.FindByName<IList>("WorldCities");
}
//end eventHandler
