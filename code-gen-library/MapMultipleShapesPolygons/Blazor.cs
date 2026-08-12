//begin imports
using IgniteUI.Blazor.Controls;
//end imports

//begin eventHandler
/// <summary>Country shapes, with the fields the tooltip shows taken from the .DBF file.</summary>
public void MapMultipleShapesPolygons(object sender, EventArgs e)
{
    var sds = sender as IgbShapeDataSource;
    var geoPolygons = new List<object>();
    foreach (var record in sds.GetPointData())
    {
        geoPolygons.Add(new
        {
            points = record.Points,
            name = record.FieldValues["NAME"],
            population = record.FieldValues["POP_2005"]
        });
    }

    var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
    var polygonSeries = map.Series[0] as IgbGeographicShapeSeries;
    polygonSeries.DataSource = geoPolygons;
}
//end eventHandler
