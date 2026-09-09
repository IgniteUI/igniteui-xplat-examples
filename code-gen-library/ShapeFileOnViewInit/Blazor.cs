//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class ShapeFileOnViewInit
{
    //begin eventHandler
    public void ShapeFileOnViewInit()
    {
        var geoMap = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var series = geoMap.Series[0] as IgbGeographicShapeSeries;
        series.ShapefileDataSource = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/world_countries_all.shp",
            DatabaseSource = "https://static.infragistics.com/xplatform/shapes/world_countries_all.dbf"
        };
        geoMap.BackgroundContent = null;
    }
    //end eventHandler
}
