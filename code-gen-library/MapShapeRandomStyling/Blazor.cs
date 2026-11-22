//begin imports
using IgniteUI.Blazor.Controls;
//end imports

//begin eventHandler
/// <summary>Random styling: each country keeps the color it is first given.</summary>
public void MapShapeRandomStyling()
{
    var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
    map.Series.Add(new IgbGeographicShapeSeries
    {
        ShapefileDataSource = new IgbShapeDataSource
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/world_countries_all.shp",
            DatabaseSource = "https://static.infragistics.com/xplatform/shapes/world_countries_all.dbf"
        },
        ShapeMemberPath = "points",
        IsCustomShapeStyleAllowed = true,
        AssigningShapeStyleScript = "MapShapeRandomStyle"
    });
}
//end eventHandler
