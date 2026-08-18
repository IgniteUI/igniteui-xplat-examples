//begin imports
using Infragistics.Controls.Maps;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Windows.Media;
//end imports

//begin supportingTypes
/// <summary>
/// Data driven styling for a geographic shape series: four ways of turning a shapefile record into
/// a style, behind one method the series' AssigningShapeStyle handler reads.
///
public class ShapeStyle
{
    public Brush Fill { get; set; }
    public Brush Stroke { get; set; }
    public double Opacity { get; set; } = 1.0;
    public double StrokeThickness { get; set; } = 0.5;
}

public abstract class ShapeStyling
{
    public string DefaultStroke = "Black";
    public string DefaultFill = "Gray";
    public double DefaultThickness = 0.5;
    public double DefaultOpacity = 1.0;

    public ShapeStyle DefaultStyle
    {
        get
        {
            return new ShapeStyle()
            {
                Stroke = ToBrush(DefaultStroke), Fill = ToBrush(DefaultFill),
                Opacity = DefaultOpacity, StrokeThickness = DefaultThickness
            };
        }
    }

    public abstract ShapeStyle Generate(object record);

    /// <summary>The value of one field of a shapefile record, or null when it has no such field.</summary>
    public object GetValue(string itemMemberPath, object item)
    {
        var record = item as ShapefileRecord;
        if (record != null && record.Fields != null && record.Fields.ContainsKey(itemMemberPath))
        {
            return record.Fields[itemMemberPath];
        }
        Console.WriteLine("WARNING: shape data item does not have " + itemMemberPath);
        return null;
    }

    /// <summary>
    /// A named or hexadecimal color as a brush.
    ///
    /// Written out rather than taken from a converter, because the converters differ between the
    /// desktop frameworks this one item is emitted for.
    /// </summary>
    public static Brush ToBrush(string color)
    {
        if (string.IsNullOrEmpty(color))
        {
            return new SolidColorBrush(Colors.Gray);
        }
        if (color[0] == '#')
        {
            var hex = color.Substring(1);
            if (hex.Length == 6)
            {
                return new SolidColorBrush(Color.FromArgb(255,
                    byte.Parse(hex.Substring(0, 2), NumberStyles.HexNumber),
                    byte.Parse(hex.Substring(2, 2), NumberStyles.HexNumber),
                    byte.Parse(hex.Substring(4, 2), NumberStyles.HexNumber)));
            }
            return new SolidColorBrush(Colors.Gray);
        }
        switch (color.ToLower())
        {
            case "black": return new SolidColorBrush(Colors.Black);
            case "white": return new SolidColorBrush(Colors.White);
            case "red": return new SolidColorBrush(Colors.Red);
            case "orange": return new SolidColorBrush(Colors.Orange);
            case "yellow": return new SolidColorBrush(Colors.Yellow);
            case "green": return new SolidColorBrush(Colors.Green);
            case "brown": return new SolidColorBrush(Colors.Brown);
            case "dodgerblue": return new SolidColorBrush(Colors.DodgerBlue);
            default: return new SolidColorBrush(Colors.Gray);
        }
    }
}

public class ShapeRandomStyling : ShapeStyling
{
    public double ShapeThickness = 0.5;
    public double ShapeOpacity = 1.0;
    public string[] ShapeStrokeColors = new string[] { "Black" };
    public string[] ShapeFillColors = new string[] { "red", "orange", "yellow" };

    public Dictionary<string, ShapeStyle> StyleMappings = new Dictionary<string, ShapeStyle>();
    private Random _random = new Random();

    public override ShapeStyle Generate(object record)
    {
        var name = GetValue("Name", record);
        var id = name == null ? _random.Next(0, 1000).ToString() : name.ToString();

        // Kept per record, so a shape keeps the color it was first given rather than picking a new
        // one every time the series restyles.
        if (StyleMappings.ContainsKey(id))
        {
            return StyleMappings[id];
        }

        var shapeStyle = new ShapeStyle()
        {
            Stroke = ToBrush(ShapeStrokeColors[_random.Next(0, ShapeStrokeColors.Length)]),
            Fill = ToBrush(ShapeFillColors[_random.Next(0, ShapeFillColors.Length)]),
            Opacity = ShapeOpacity,
            StrokeThickness = ShapeThickness
        };
        StyleMappings[id] = shapeStyle;
        return shapeStyle;
    }
}

public class ShapeScaleStyling : ShapeStyling
{
    public double ShapeThickness = 0.5;
    public double ShapeOpacity = 1.0;
    public string[] ShapeStrokeColors = new string[] { "Black" };
    public string[] ShapeFillColors = new string[] { "red", "orange", "yellow" };

    public string ItemMemberPath = "";
    public double ItemMinimumValue = 0;
    public double ItemMaximumValue = 1000;
    public bool IsLogarithmic = true;

    public override ShapeStyle Generate(object record)
    {
        var itemValue = GetValue(ItemMemberPath, record);
        if (itemValue == null)
        {
            return DefaultStyle;
        }

        var fillColor = DefaultFill;
        var strokeColor = DefaultStroke;
        var scaleValue = GetScaledValue(Convert.ToDouble(itemValue));

        if (!double.IsNaN(scaleValue))
        {
            fillColor = ShapeFillColors[(int)Math.Round(scaleValue * (ShapeFillColors.Length - 1))];
            strokeColor = ShapeStrokeColors[(int)Math.Round(scaleValue * (ShapeStrokeColors.Length - 1))];
        }

        return new ShapeStyle()
        {
            Fill = ToBrush(fillColor), Stroke = ToBrush(strokeColor),
            StrokeThickness = ShapeThickness, Opacity = ShapeOpacity
        };
    }

    public double GetScaledValue(double value)
    {
        if (double.IsNaN(value) || double.IsInfinity(value)) { return double.NaN; }

        var min = double.IsNaN(ItemMinimumValue) ? 0 : ItemMinimumValue;
        var max = double.IsNaN(ItemMaximumValue) ? 1000 : ItemMaximumValue;
        if (value < min || value > max) { return double.NaN; }

        return IsLogarithmic ? GetLogarithmicValue(min, max, value) : GetLinearValue(min, max, value);
    }

    public double GetLogarithmicValue(double min, double max, double value)
    {
        var newMin = Math.Log10(min);
        var newMax = Math.Log10(max);
        var newVal = Math.Log10(value);

        if (double.IsInfinity(newMin) || double.IsNaN(newMin)) { newMin = 0.0; }
        if (double.IsInfinity(newMax) || double.IsNaN(newMax)) { newMax = 1000; }
        if (newVal < 0) { newVal = 0.0; }

        return GetLinearValue(newMin, newMax, newVal);
    }

    public double GetLinearValue(double min, double max, double value)
    {
        if (value < min || value > max) { return double.NaN; }
        return (value - min) / (max - min);
    }
}

public class ShapeRange
{
    public double Minimum { get; set; }
    public double Maximum { get; set; }
    public double? Opacity { get; set; }
    public string Fill { get; set; }
    public string Stroke { get; set; }
    public double? StrokeThickness { get; set; }
}

public class ShapeRangeStyling : ShapeStyling
{
    public string ItemMemberPath = "";
    public List<ShapeRange> Ranges = new List<ShapeRange>()
    {
        new ShapeRange() { Minimum = 0, Maximum = 50, Fill = "yellow" },
        new ShapeRange() { Minimum = 0, Maximum = 100, Fill = "red" }
    };

    public override ShapeStyle Generate(object record)
    {
        var itemValue = GetValue(ItemMemberPath, record);
        if (itemValue == null)
        {
            return DefaultStyle;
        }

        var value = Convert.ToDouble(itemValue);
        foreach (var range in Ranges)
        {
            if (range.Minimum <= value && value < range.Maximum)
            {
                return new ShapeStyle()
                {
                    Opacity = range.Opacity ?? DefaultOpacity,
                    Fill = ToBrush(range.Fill ?? DefaultFill),
                    Stroke = ToBrush(range.Stroke ?? DefaultStroke),
                    StrokeThickness = range.StrokeThickness ?? DefaultThickness
                };
            }
        }
        return DefaultStyle;
    }
}

public class ShapeComparison
{
    public string ItemValue { get; set; }
    public double? Opacity { get; set; }
    public string Fill { get; set; }
    public string Stroke { get; set; }
    public double? StrokeThickness { get; set; }
}

public class ShapeComparisonStyling : ShapeStyling
{
    public string ItemMemberPath = "";
    public List<ShapeComparison> ItemMappings = new List<ShapeComparison>();

    public override ShapeStyle Generate(object record)
    {
        var itemValue = GetValue(ItemMemberPath, record) as string;
        if (string.IsNullOrEmpty(itemValue))
        {
            return DefaultStyle;
        }

        foreach (var mapping in ItemMappings)
        {
            if (mapping.ItemValue == itemValue)
            {
                return new ShapeStyle()
                {
                    Opacity = mapping.Opacity ?? DefaultOpacity,
                    Fill = ToBrush(mapping.Fill ?? DefaultFill),
                    Stroke = ToBrush(mapping.Stroke ?? DefaultStroke),
                    StrokeThickness = mapping.StrokeThickness ?? DefaultThickness
                };
            }
        }
        return DefaultStyle;
    }
}
//end supportingTypes
