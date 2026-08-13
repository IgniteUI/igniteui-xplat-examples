//begin imports
using Infragistics.Controls.Charts;
using Infragistics.Controls.Maps;
using System;
using System.Collections.Generic;
using System.ComponentModel;
//end imports

//begin eventHandler
public ShapeComparisonStyling ShapeComparisonStyler;

/// <summary>Comparison styling: a color per named value.</summary>
//WPF: System.Action
public void MapShapeComparisonStyling()
{
    ShapeComparisonStyler = new ShapeComparisonStyling();
    ShapeComparisonStyler.DefaultFill = "Gray";
    ShapeComparisonStyler.ItemMemberPath = "Region";
    ShapeComparisonStyler.ItemMappings = new List<ShapeComparison>()
    {
        new ShapeComparison() { Fill = "Red",        ItemValue = "Eastern Europe" },
        new ShapeComparison() { Fill = "Red",        ItemValue = "Central Asia" },
        new ShapeComparison() { Fill = "Red",        ItemValue = "Eastern Asia" },
        new ShapeComparison() { Fill = "Orange",     ItemValue = "Southern Asia" },
        new ShapeComparison() { Fill = "Orange",     ItemValue = "Middle East" },
        new ShapeComparison() { Fill = "Orange",     ItemValue = "Northern Africa" },
        new ShapeComparison() { Fill = "Yellow",     ItemValue = "Eastern Africa" },
        new ShapeComparison() { Fill = "Yellow",     ItemValue = "Western Africa" },
        new ShapeComparison() { Fill = "Yellow",     ItemValue = "Middle Africa" },
        new ShapeComparison() { Fill = "Yellow",     ItemValue = "Southern Africa" },
        new ShapeComparison() { Fill = "DodgerBlue", ItemValue = "Central America" },
        new ShapeComparison() { Fill = "DodgerBlue", ItemValue = "Northern America" },
        new ShapeComparison() { Fill = "DodgerBlue", ItemValue = "Western Europe" },
        new ShapeComparison() { Fill = "DodgerBlue", ItemValue = "Southern Europe" },
        new ShapeComparison() { Fill = "DodgerBlue", ItemValue = "Northern Europe" },
        new ShapeComparison() { Fill = "#22c928",    ItemValue = "South America" },
        new ShapeComparison() { Fill = "#b64fff",    ItemValue = "Melanesia" },
        new ShapeComparison() { Fill = "#b64fff",    ItemValue = "Micronesia" },
        new ShapeComparison() { Fill = "#b64fff",    ItemValue = "Polynesia" },
        new ShapeComparison() { Fill = "#b64fff",    ItemValue = "Australia" },
    };

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
    var shapeStyle = ShapeComparisonStyler.Generate(itemRecord);
    args.Opacity = shapeStyle.Opacity;
    args.Fill = shapeStyle.Fill;
    args.Stroke = shapeStyle.Stroke;
    args.StrokeThickness = shapeStyle.StrokeThickness;
}
//end eventHandler
