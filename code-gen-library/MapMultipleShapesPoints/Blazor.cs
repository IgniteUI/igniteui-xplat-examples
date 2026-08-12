//begin imports
using IgniteUI.Blazor.Controls;
//end imports

//begin eventHandler
/// <summary>Capital cities only, one point per record.</summary>
public void MapMultipleShapesPoints(object sender, EventArgs e)
{
    var sds = sender as IgbShapeDataSource;
    var geoLocations = new List<object>();
    foreach (var record in sds.GetPointData())
    {
        if ((string)record.FieldValues["CAPITAL"] == "N") continue;
        // each of these records holds a single point
        geoLocations.Add(new
        {
            latitude = record.Points[0][0].Y,
            longitude = record.Points[0][0].X,
            city = record.FieldValues["NAME"],
            population = record.FieldValues["POPULATION"]
        });
    }

    var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
    var symbolSeries = map.Series[2] as IgbGeographicSymbolSeries;
    symbolSeries.DataSource = geoLocations;
}
//end eventHandler
