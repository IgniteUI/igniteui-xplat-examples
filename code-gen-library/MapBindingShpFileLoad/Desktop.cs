//begin imports
using Infragistics.Controls.Maps;
using System;
//end imports

//begin eventHandler
/// <summary>
/// A shapefile is fetched and parsed asynchronously, so the source is given the method that turns
/// its records into data when they arrive — a method of the supporting item this one requires.
/// </summary>
//WPF: System.Action
public void MapBindingShpFileLoad()
{
    var root = "https://static.infragistics.com/xplatform/shapes/";
    var readers = CodeGenHelper.GetSharedSupporting<MapShpFileReaders>("MapShpFileReaders");

    var sds = new ShapefileConverter();
    sds.ImportCompleted += readers.ReadRoutes;
    sds.ShapefileSource = new Uri(root + "WorldCableRoutes.shp");
    sds.DatabaseSource = new Uri(root + "WorldCableRoutes.dbf");
}
//end eventHandler
