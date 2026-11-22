//begin imports
using IgniteUI.Blazor.Controls;
//end imports

//begin eventHandler
/// <summary>Scale styling of shapefile records, handled synchronously in JavaScript.</summary>
public void MapShapeScaleStyling()
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
        AssigningShapeStyleScript = "MapShapeScaleStyle"
    });
}
//end eventHandler
