//begin imports
using Infragistics.Controls.Maps;
using Infragistics.Controls;
using System;
//end imports

//begin eventHandler
/// <summary>
/// Three shapefiles, each read into the series that draws it. A shapefile is fetched and parsed
/// asynchronously, so each source is given the method that turns its records into data when it
/// arrives — those methods belong to the supporting item this one requires.
/// </summary>
//WPF: System.Action
public void MapMultipleShapesLoad()
{
    var root = "https://static.infragistics.com/xplatform/shapes/";
    var readers = CodeGenHelper.GetSharedSupporting<MapMultipleShapesReaders>("MapMultipleShapesReaders");

    var sdsPolygons = new ShapeDataSource();
    sdsPolygons.ImportCompleted += (s, e) => readers.ReadPolygons(s, e, this.geoMap);
    sdsPolygons.ShapefileSource = new Uri(root + "WorldCountries.shp");
    sdsPolygons.DatabaseSource = new Uri(root + "WorldCountries.dbf");

    var sdsPolylines = new ShapeDataSource();
    sdsPolylines.ImportCompleted += (s, e) => readers.ReadPolylines(s, e, this.geoMap);
    sdsPolylines.ShapefileSource = new Uri(root + "WorldCableRoutes.shp");
    sdsPolylines.DatabaseSource = new Uri(root + "WorldCableRoutes.dbf");

    var sdsLocations = new ShapeDataSource();
    sdsLocations.ImportCompleted += (s, e) => readers.ReadPoints(s, e, this.geoMap);
    sdsLocations.ShapefileSource = new Uri(root + "WorldCities.shp");
    sdsLocations.DatabaseSource = new Uri(root + "WorldCities.dbf");

}
//end eventHandler
