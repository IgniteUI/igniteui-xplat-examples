//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

//begin eventHandler
/// <summary>
/// A shapefile is fetched and parsed asynchronously, so the source is given the method that turns
/// its records into data when they arrive — a method of the supporting item this one requires.
/// </summary>
public void MapBindingShpFileLoad()
{
    var root = "https://static.infragistics.com/xplatform/shapes/";
    var readers = CodeGenHelper.GetSharedSupporting<MapShpFileReaders>("MapShpFileReaders");

    var sds = new IgbShapeDataSource()
    {
        ShapefileSource = root + "WorldCableRoutes.shp",
        DatabaseSource = root + "WorldCableRoutes.dbf"
    };
    sds.ImportCompleted += readers.ReadRoutes;
    sds.DataBind();
}
//end eventHandler
