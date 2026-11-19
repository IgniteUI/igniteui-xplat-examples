//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

//begin eventHandler
/// <summary>
/// A shapefile is fetched and parsed asynchronously, so the source is given the method that turns
/// its records into data when they arrive — a method of the supporting item this one requires.
/// </summary>
public void MapBindingShpPointsLoad()
{
    var root = "https://static.infragistics.com/xplatform/shapes/";
    var readers = CodeGenHelper.GetSharedSupporting<MapMultipleShapesReaders>("MapMultipleShapesReaders");

    var sds = new IgbShapeDataSource()
    {
        ShapefileSource = root + "WorldCities.shp",
        DatabaseSource = root + "WorldCities.dbf"
    };
    var work = GlobalQueuedWorkState.Instance;
    const string channel = "Sample.MapBindingShpPointsLoad.Import";
    work.NotifyWorkQueued(channel);
    sds.ImportCompleted += (sender, args) =>
    {
        try { readers.ReadPoints(sender, args); }
        finally { work.NotifyWorkCompleted(channel); }
    };
    sds.DataBind();
}
//end eventHandler
