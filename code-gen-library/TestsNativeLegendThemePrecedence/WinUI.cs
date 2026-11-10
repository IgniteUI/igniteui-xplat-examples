//begin imports
using System;
using System.Collections.Generic;
using System.Reflection;
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using Infragistics.Portable.Description;
using Microsoft.UI;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Markup;
using Microsoft.UI.Xaml.Media;
//end imports

public class TestsNativeLegendThemePrecedence
{

    //begin eventHandler
	//WinUI: System.Action
    public void TestsNativeLegendThemePrecedence()
    {
        // Records the text color a native legend resolves at each step of the theme precedence, and shows the
        // sequence in the chart title: styling, then a chosen theme over it, styling again at Default, styling
        // applied after a chosen theme giving way to it, and a value set on the legend over all of them.
        var chart = CodeGenHelper.GetDescription<XamDataChart>("content");
        var raw = CodeGenHelper.FindByName<object>("NativeLegendThemeTest");
        if (chart == null || raw == null) return;

        JsonDictionaryObject info = raw as JsonDictionaryObject;
        if (info == null)
        {
            string jsonText = null;
            if (raw is JsonDictionaryValue jdv && jdv.Type == JsonDictionaryValueType.StringValue)
            {
                jsonText = jdv.Value as string;
            }
            else if (raw is string s)
            {
                jsonText = s;
            }
            if (jsonText != null)
            {
                info = new JsonDictionaryParser().Parse(jsonText) as JsonDictionaryObject;
            }
        }
        var kindValue = info == null ? null : info["Kind"] as JsonDictionaryValue;
        var kind = kindValue == null ? "Legend" : kindValue.Value as string;

        LegendBase legend;
        switch (kind)
        {
            case "ItemLegend":
                legend = new ItemLegend();
                break;
            case "ScaleLegend":
                legend = new ScaleLegend();
                break;
            default:
                legend = new Legend();
                break;
        }

        // The color the legend draws its text with, which it keeps in its settings.
        var settingsProperty = typeof(LegendBase).GetProperty("Settings", BindingFlags.Instance | BindingFlags.NonPublic | BindingFlags.Public);
        var recorded = new List<string>();
        Action record = () =>
        {
            var settings = settingsProperty == null ? null : settingsProperty.GetValue(legend);
            var textColorProperty = settings == null ? null : settings.GetType().GetProperty("TextColor");
            var brush = textColorProperty == null ? null : textColorProperty.GetValue(settings) as SolidColorBrush;
            if (brush == null)
            {
                recorded.Add("null");
                return;
            }
            var c = brush.Color;
            recorded.Add("#" + c.A.ToString("X2") + c.R.ToString("X2") + c.G.ToString("X2") + c.B.ToString("X2"));
        };
        // WinUI resolves a Style's TargetType through XAML type metadata, which these code-only controls do not
        // have, so the style targets the nearest WinUI base type and sets the legend's own property.
        var styleType = legend.GetType();
        while (styleType != null && (styleType.Namespace == null || !styleType.Namespace.StartsWith("Microsoft.UI.Xaml")))
        {
            styleType = styleType.BaseType;
        }
        Func<Style> redStyle = () =>
        {
            var style = new Style(styleType);
            style.Setters.Add(new Setter(LegendBase.TextColorProperty, new SolidColorBrush(Colors.Red)));
            return style;
        };

        legend.Style = redStyle();
        record();
        legend.BaseTheme = BaseControlTheme.FluentDark;
        record();
        legend.BaseTheme = BaseControlTheme.Default;
        record();
        legend.BaseTheme = BaseControlTheme.FluentDark;
        legend.Style = redStyle();
        record();
        legend.TextColor = new SolidColorBrush(Colors.Blue);
        record();

        chart.Title = string.Join("|", recorded);
    }
    //end eventHandler

}
