//begin imports
using IgniteUI.Blazor.Controls;
//end imports

//begin eventHandler
/// <summary>Connections between places, each record one path.</summary>
public void MapMultipleShapesPolylines(object sender, EventArgs e)
{
    var sds = sender as IgbShapeDataSource;
    var geoPolylines = new List<object>();
    foreach (var record in sds.GetPointData())
    {
        geoPolylines.Add(new
        {
            points = record.Points,
            name = record.FieldValues["Name"],
            capacity = record.FieldValues["CAPACITY"],
            distance = record.FieldValues["DISTANCE"]
        });
    }

    var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
    var lineSeries = map.Series[1] as IgbGeographicPolylineSeries;
    lineSeries.DataSource = geoPolylines;
}
//end eventHandler
