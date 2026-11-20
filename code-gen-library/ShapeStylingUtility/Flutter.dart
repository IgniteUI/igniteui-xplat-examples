//begin imports
import 'dart:math' as math;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfBrush, IgfSolidColorBrush;
import 'package:igniteui_flutter_core/src/igf-shapefile-record.dart' show IgfShapefileRecordState;
//end imports

//begin supportingTypes
/// Data driven styling for a geographic shape series: four ways of turning a shapefile record into
/// a style, behind one method the series' assigningShapeStyle handler reads.
class ShapeStyle
{
    IgfBrush? fill;
    IgfBrush? stroke;
    double opacity = 1.0;
    double strokeThickness = 0.5;
}

abstract class ShapeStyling
{
    String defaultStroke = "Black";
    String defaultFill = "Gray";
    double defaultThickness = 0.5;
    double defaultOpacity = 1.0;

    ShapeStyle get defaultStyle {
        var style = ShapeStyle();
        style.stroke = IgfSolidColorBrush.fromString(defaultStroke);
        style.fill = IgfSolidColorBrush.fromString(defaultFill);
        style.opacity = defaultOpacity;
        style.strokeThickness = defaultThickness;
        return style;
    }

    ShapeStyle generate(Object? record);

    /// The value of one field of a shapefile record, or null when it has no such field.
    Object? getValue(String itemMemberPath, Object? item) {
        if (item is IgfShapefileRecordState) {
            var fields = item.fieldValues;
            if (fields.containsKey(itemMemberPath)) {
                return fields[itemMemberPath];
            }
        }
        print("WARNING: shape data item does not have " + itemMemberPath);
        return null;
    }
}

class ShapeRandomStyling extends ShapeStyling
{
    double shapeThickness = 0.5;
    double shapeOpacity = 1.0;
    List<String> shapeStrokeColors = <String>["Black"];
    List<String> shapeFillColors = <String>["red", "orange", "yellow"];

    Map<String, ShapeStyle> styleMappings = <String, ShapeStyle>{};
    final math.Random _random = math.Random();

    ShapeStyle generate(Object? record) {
        var name = getValue("Name", record);
        var id = name == null ? _random.nextInt(1000).toString() : name.toString();

        // Kept per record, so a shape keeps the color it was first given rather than picking a new
        // one every time the series restyles.
        var existing = styleMappings[id];
        if (existing != null) {
            return existing;
        }

        var shapeStyle = ShapeStyle();
        shapeStyle.stroke = IgfSolidColorBrush.fromString(shapeStrokeColors[_random.nextInt(shapeStrokeColors.length)]);
        shapeStyle.fill = IgfSolidColorBrush.fromString(shapeFillColors[_random.nextInt(shapeFillColors.length)]);
        shapeStyle.opacity = shapeOpacity;
        shapeStyle.strokeThickness = shapeThickness;
        styleMappings[id] = shapeStyle;
        return shapeStyle;
    }
}

class ShapeScaleStyling extends ShapeStyling
{
    double shapeThickness = 0.5;
    double shapeOpacity = 1.0;
    List<String> shapeStrokeColors = <String>["Black"];
    List<String> shapeFillColors = <String>["red", "orange", "yellow"];

    String itemMemberPath = "";
    double itemMinimumValue = 0;
    double itemMaximumValue = 1000;

    bool isLogarithmic = true;

    ShapeStyle generate(Object? record) {
        var itemValue = getValue(itemMemberPath, record);
        if (itemValue == null) {
            return defaultStyle;
        }

        var fillColor = defaultFill;
        var strokeColor = defaultStroke;
        var scaleValue = getScaledValue((itemValue as num).toDouble());

        if (!scaleValue.isNaN) {
            var fillIndex = (scaleValue * (shapeFillColors.length - 1)).round();
            var strokeIndex = (scaleValue * (shapeStrokeColors.length - 1)).round();
            fillColor = shapeFillColors[fillIndex];
            strokeColor = shapeStrokeColors[strokeIndex];
        }

        var shapeStyle = ShapeStyle();
        shapeStyle.fill = IgfSolidColorBrush.fromString(fillColor);
        shapeStyle.stroke = IgfSolidColorBrush.fromString(strokeColor);
        shapeStyle.strokeThickness = shapeThickness;
        shapeStyle.opacity = shapeOpacity;
        return shapeStyle;
    }

    double getScaledValue(double value) {
        if (!value.isFinite) { return double.nan; }

        var min = !itemMinimumValue.isFinite ? 0.0 : itemMinimumValue;
        var max = !itemMaximumValue.isFinite ? 1000.0 : itemMaximumValue;

        if (value < min || value > max) { return double.nan; }

        if (isLogarithmic) {
            return getLogarithmicValue(min, max, value);
        } else {
            return getLinearValue(min, max, value);
        }
    }

    double getLogarithmicValue(double min, double max, double value) {
        if (!value.isFinite) { return double.nan; }

        var newMin = math.log(min) / math.ln10;
        var newMax = math.log(max) / math.ln10;
        var newVal = math.log(value) / math.ln10;

        if (!newMin.isFinite) { newMin = 0.0; }
        if (!newMax.isFinite) { newMax = 1000; }

        if (newVal < 0) { newVal = 0.0; }

        return getLinearValue(newMin, newMax, newVal);
    }

    double getLinearValue(double min, double max, double value) {
        if (!value.isFinite) { return double.nan; }

        // if the value is outside the range
        if (value < min || value > max) { return double.nan; }

        return (value - min) / (max - min);
    }
}

class ShapeRange
{
    double minimum;
    double maximum;
    String fill;
    double? opacity;
    String? stroke;
    double? strokeThickness;

    ShapeRange(this.minimum, this.maximum, this.fill, { this.opacity, this.stroke, this.strokeThickness });
}

class ShapeRangeStyling extends ShapeStyling
{
    String itemMemberPath = "";
    List<ShapeRange> ranges = <ShapeRange>[
        ShapeRange(0, 50, "yellow"),
        ShapeRange(0, 100, "red")
    ];

    ShapeStyle generate(Object? record) {
        var itemValue = getValue(itemMemberPath, record);
        if (itemValue == null) {
            return defaultStyle;
        }
        var value = (itemValue as num).toDouble();

        for (var range in ranges) {
            if (range.minimum <= value && value < range.maximum) {
                var shapeStyle = ShapeStyle();
                shapeStyle.opacity = range.opacity ?? defaultOpacity;
                shapeStyle.fill = IgfSolidColorBrush.fromString(range.fill);
                shapeStyle.stroke = IgfSolidColorBrush.fromString(range.stroke ?? defaultStroke);
                shapeStyle.strokeThickness = range.strokeThickness ?? defaultThickness;
                return shapeStyle;
            }
        }
        return defaultStyle;
    }
}

class ShapeComparison
{
    String itemValue;
    String fill;
    double? opacity;
    String? stroke;
    double? strokeThickness;

    ShapeComparison(this.itemValue, this.fill, { this.opacity, this.stroke, this.strokeThickness });
}

class ShapeComparisonStyling extends ShapeStyling
{
    String itemMemberPath = "";
    List<ShapeComparison> itemMappings = <ShapeComparison>[];

    ShapeStyle generate(Object? record) {
        var itemValue = getValue(itemMemberPath, record);
        if (itemValue == null || itemValue == "") {
            return defaultStyle;
        }

        for (var mapping in itemMappings) {
            if (mapping.itemValue == itemValue) {
                var shapeStyle = ShapeStyle();
                shapeStyle.opacity = mapping.opacity ?? defaultOpacity;
                shapeStyle.fill = IgfSolidColorBrush.fromString(mapping.fill);
                shapeStyle.stroke = IgfSolidColorBrush.fromString(mapping.stroke ?? defaultStroke);
                shapeStyle.strokeThickness = mapping.strokeThickness ?? defaultThickness;
                return shapeStyle;
            }
        }

        return defaultStyle;
    }
}
//end supportingTypes
