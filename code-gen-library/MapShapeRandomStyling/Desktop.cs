//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Controls.Maps;
using System;
using System.Collections.Generic;
using System.ComponentModel;
//end imports

//begin eventHandler
public ShapeRandomStyling ShapeRandomStyler;

/// <summary>Random styling: each country keeps the color it is first given.</summary>
//WPF: System.Action
public void MapShapeRandomStyling()
{
    ShapeRandomStyler = new ShapeRandomStyling();
    ShapeRandomStyler.ShapeStrokeColors = new string[] { "Black" };
    ShapeRandomStyler.ShapeFillColors = new string[] { "#8C23D1", "#0E9759", "#B4D336", "#F2A464", "#D74545", "DodgerBlue" };

    var map = CodeGenHelper.GetDescription<XamGeographicMap>("content");

    // loading a shapefile with the geographic polygons of world countries
    var sds = new ShapefileConverter();
    sds.ImportCompleted += (object s, AsyncCompletedEventArgs e) =>
    {
        var geoSeries = new GeographicShapeSeries()
        {
            ItemsSource = s as ShapefileConverter,
            ShapeMemberPath = "Points",
            // the series asks for each shape's style as it draws it, which it only does when it is
            // allowed to take one
            IsCustomShapeStyleAllowed = true
        };
        geoSeries.AssigningShapeStyle += OnStylingShape;
        map.Series.Add(geoSeries);
    };
    sds.ShapefileSource = new Uri("https://static.infragistics.com/xplatform/shapes/world_countries_all.shp");
    sds.DatabaseSource = new Uri("https://static.infragistics.com/xplatform/shapes/world_countries_all.dbf");
}

public void OnStylingShape(object s, AssigningShapeStyleEventArgs args)
{
    // the event covers a range of items rather than one, so the record is asked for by index
    var itemRecord = args.GetItems(args.StartIndex, args.EndIndex)[0];
    var shapeStyle = ShapeRandomStyler.Generate(itemRecord);
    args.Opacity = shapeStyle.Opacity;
    args.Fill = shapeStyle.Fill;
    args.Stroke = shapeStyle.Stroke;
    args.StrokeThickness = shapeStyle.StrokeThickness;
}
//end eventHandler
