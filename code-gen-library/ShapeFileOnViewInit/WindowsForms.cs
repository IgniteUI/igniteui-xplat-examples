//begin imports
using System;
using Infragistics.Win.DataVisualization;
//end imports

public class ShapeFileOnViewInit
{
    //begin eventHandler

    private ShapefileConverter Data;

    //WindowsForms: System.Action
    public void ShapeFileOnViewInit()
    {
        var geoMap = CodeGenHelper.GetDescription<UltraGeographicMap>("content");

        // The converter is the record collection itself, as on WPF; it becomes the series' data source once its
        // records are read, as the Windows Forms shapefile samples bind theirs (MapShpFileReaders).
        var shapeSeries = (GeographicShapeSeries)geoMap.Series[0];
        // A record's shape is its Points; the series' default member path here is "points", which a record lacks.
        shapeSeries.ShapeMemberPath = "Points";
        this.Data = new ShapefileConverter();
        this.Data.ImportCompleted += (sender, e) => shapeSeries.DataSource = this.Data;
        this.Data.ShapefileSource = new Uri("https://static.infragistics.com/xplatform/shapes/world_countries_all.shp");
        this.Data.DatabaseSource = new Uri("https://static.infragistics.com/xplatform/shapes/world_countries_all.dbf");

        // The shapes are the whole map: no imagery behind them, as the other platforms clear it.
        geoMap.ResetBackgroundContent();
    }
    //end eventHandler
}
