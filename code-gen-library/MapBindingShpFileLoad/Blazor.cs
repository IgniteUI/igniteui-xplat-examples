//begin imports
using IgniteUI.Blazor.Controls;
//end imports

//begin eventHandler
/// <summary>
/// A shapefile is fetched and parsed asynchronously, so the source is given the method that turns
/// its records into data when they arrive — a method of the supporting item this one requires.
/// </summary>
public void MapBindingShpFileLoad()
{
    var root = "https://static.infragistics.com/xplatform/shapes/";
    var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
    var lineSeries = map.Series[0] as IgbGeographicPolylineSeries;

    lineSeries.ShapefileDataSource = new IgbShapeDataSource()
    {
        ShapefileSource = root + "WorldCableRoutes.shp",
        DatabaseSource = root + "WorldCableRoutes.dbf"
    };
}
//end eventHandler
