//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Collections.Generic;
//end imports

//begin eventHandler
public ShapeScaleStyling ShapeScaleStyler;

/// <summary>Scale styling: a color taken from a scale across a range of values.</summary>
public void MapShapeScaleStyling()
{
    ShapeScaleStyler = new ShapeScaleStyling();
    ShapeScaleStyler.DefaultFill = "Gray";
    ShapeScaleStyler.ShapeStrokeColors = new string[] { "Black" };
    ShapeScaleStyler.ShapeFillColors = new string[] { "DodgerBlue", "yellow", "#c2f542", "#e8c902", "#e8b602", "#e87902", "brown" };
    ShapeScaleStyler.ItemMemberPath = "Population";
    ShapeScaleStyler.ItemMinimumValue = 5000;
    ShapeScaleStyler.ItemMaximumValue = 2000000000; // 2 Billions
    ShapeScaleStyler.IsLogarithmic = true;

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
    var shapeStyle = ShapeScaleStyler.Generate(itemRecord);
    args.Opacity = shapeStyle.Opacity;
    args.Fill = shapeStyle.Fill;
    args.Stroke = shapeStyle.Stroke;
    args.StrokeThickness = shapeStyle.StrokeThickness;
}
//end eventHandler
