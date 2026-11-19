//begin imports
using Infragistics.Controls.Maps;
using System;
//end imports

//begin eventHandler
/// <summary>
/// A shapefile is fetched and parsed asynchronously, so the source is given the method that turns
/// its records into data when they arrive — a method of the supporting item this one requires.
/// </summary>
//WindowsForms: System.Action
public void MapBindingShpPointsLoad()
{
    var root = "https://static.infragistics.com/xplatform/shapes/";
    var readers = CodeGenHelper.GetSharedSupporting<MapMultipleShapesReaders>("MapMultipleShapesReaders");

    var sds = new ShapefileConverter();
    var work = Infragistics.Portable.GlobalQueuedWorkState.Instance;
    const string channel = "Sample.MapBindingShpPointsLoad.Import";
    work.NotifyWorkQueued(channel);
    sds.ImportCompleted += (sender, args) =>
    {
        try
        {
            if (args.Error != null) throw args.Error;
            readers.ReadPoints(sender, args);
        }
        finally { work.NotifyWorkCompleted(channel); }
    };
    sds.ShapefileSource = new Uri(root + "WorldCities.shp");
    sds.DatabaseSource = new Uri(root + "WorldCities.dbf");
}
//end eventHandler
