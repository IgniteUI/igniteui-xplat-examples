//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Collections.Generic;
//end imports

//begin eventHandler
public ShapeComparisonStyling ShapeComparisonStyler;

/// <summary>Comparison styling: a color per named value.</summary>
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
    var shapeStyle = ShapeComparisonStyler.Generate(itemRecord);
    args.Opacity = shapeStyle.Opacity;
    args.Fill = shapeStyle.Fill;
    args.Stroke = shapeStyle.Stroke;
    args.StrokeThickness = shapeStyle.StrokeThickness;
}
//end eventHandler
