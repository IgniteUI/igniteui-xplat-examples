//begin imports
using System;
using System.Collections.Generic;
using Microsoft.UI;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Media;
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using Infragistics.Portable.Description;
//end imports

public class TestsNativeLegendThemePrecedence
{
    //begin eventHandler
    //WinUI: System.Action
    public void TestsNativeLegendThemePrecedence()
    {
        var data = CodeGenHelper.FindByName<JsonDictionaryValue>("NativeLegendThemeTest");
        var input = (JsonDictionaryObject)new JsonDictionaryParser().Parse((string)data.Value);
        var kind = (string)((JsonDictionaryValue)input["Kind"]).Value;
        LegendBase legend;
        switch (kind)
        {
            case "Legend": legend = new Legend(); break;
            case "ItemLegend": legend = new ItemLegend(); break;
            case "ScaleLegend": legend = new ScaleLegend(); break;
            default: throw new InvalidOperationException("Unknown legend kind: " + kind);
        }

        // Native legend labels use these view settings rather than a canvas text brush.
        var settings = (LegendSettings)typeof(LegendBase).GetProperty("Settings",
            System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.NonPublic).GetValue(legend);
        var colors = new List<string>();
        Action record = () =>
        {
            if (settings.TextColor == null)
            {
                colors.Add("null");
            }
            else
            {
                var color = settings.TextColor.Color;
                colors.Add(string.Format("#{0:X2}{1:X2}{2:X2}{3:X2}", color.A, color.R, color.G, color.B));
            }
        };
        Func<Style> redStyle = () =>
        {
            var style = new Style(typeof(FrameworkElement));
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
        legend.BaseTheme = BaseControlTheme.FluentLight;
        legend.BaseTheme = BaseControlTheme.FluentDark;
        record();

        // Use normal exported chart visual data to return observations to the assertion step.
        CodeGenHelper.GetDescription<XamDataChart>("content").Title = string.Join("|", colors);
    }
    //end eventHandler
}
