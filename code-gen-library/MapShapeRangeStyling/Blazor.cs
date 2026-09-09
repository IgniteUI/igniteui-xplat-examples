//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Collections.Generic;
//end imports

//begin eventHandler
public ShapeRangeStyling ShapeRangeStyler;

/// <summary>Range styling: a color per band of values.</summary>
public void MapShapeRangeStyling()
{
    ShapeRangeStyler = new ShapeRangeStyling();
    ShapeRangeStyler.DefaultFill = "Gray";
    ShapeRangeStyler.ItemMemberPath = "Population";
    ShapeRangeStyler.Ranges = new List<ShapeRange>()
    {
        new ShapeRange() { Fill = "yellow", Minimum = 5000,      Maximum = 10000000 },   // 5 K - 10 M
        new ShapeRange() { Fill = "orange", Minimum = 10000000,  Maximum = 100000000 },  // 10 M - 100 M
        new ShapeRange() { Fill = "red",    Minimum = 100000000, Maximum = 500000000 },  // 100 M - 500 M
        new ShapeRange() { Fill = "brown",  Minimum = 500000000, Maximum = 2000000000 }, // 500 M - 2 B
    };

    var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");

    // loading a shapefile with the geographic polygons of world countries
    var sds = new IgbShapeDataSource()
    {
        ShapefileSource = "https://static.infragistics.com/xplatform/shapes/world_countries_all.shp",
        DatabaseSource = "https://static.infragistics.com/xplatform/shapes/world_countries_all.dbf"
    };
    sds.ImportCompleted += (object s, EventArgs e) =>
    {
        var geoSeries = new IgbGeographicShapeSeries()
        {
            DataSource = ((IgbShapeDataSource)s).GetPointData(),
            ShapeMemberPath = "points",
            // the series asks for each shape's style as it draws it, which it only does when it is
            // allowed to take one
            IsCustomShapeStyleAllowed = true
        };
        geoSeries.AssigningShapeStyle += OnStylingShape;
        map.Series.Add(geoSeries);
    };
    sds.DataBind();
}

public void OnStylingShape(object s, IgbAssigningShapeStyleEventArgs args)
{
    // the event covers a range of items rather than one, so the record is asked for by index
    var itemRecord = args.GetItems(args.StartIndex, args.EndIndex)[0];
    var shapeStyle = ShapeRangeStyler.Generate(itemRecord);
    args.Opacity = shapeStyle.Opacity;
    args.Fill = shapeStyle.Fill;
    args.Stroke = shapeStyle.Stroke;
    args.StrokeThickness = shapeStyle.StrokeThickness;
}
//end eventHandler
