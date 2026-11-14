//begin imports
using Infragistics.Controls.Maps;
using System;
//end imports

public class ShapeFileOnViewInit
{
    //begin eventHandler

    private ShapefileConverter Data;

    //WPF: System.Action
    public void ShapeFileOnViewInit()
    {
        var geoMap = CodeGenHelper.GetDescription<XamGeographicMap>("content");

        this.Data = new ShapefileConverter()
        {
            ShapefileSource = new Uri("https://static.infragistics.com/xplatform/shapes/world_countries_all.shp"),
            DatabaseSource = new Uri("https://static.infragistics.com/xplatform/shapes/world_countries_all.dbf")
        };

        // On WPF the converter is the record collection itself, so it is the series' items source.
        var shapeSeries = (GeographicShapeSeries)geoMap.Series[0];
        shapeSeries.ItemsSource = this.Data;
        geoMap.BackgroundContent = null;
    }
    //end eventHandler
}
