//begin imports
using System;
using System.Collections.Generic;
using System.Reflection;
using Infragistics.Controls;
using Infragistics.Portable.Description;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Markup;
//end imports

public class TestsApplyStylingValues
{

    //begin eventHandler
	//WinUI: System.Action
    public void TestsApplyStylingValues()
    {
        // Styles the content component the way an app would: through a Style, so the values have a style as
        // their source rather than being set on the component. Runs with every update of the page, so a value
        // the test restyles is picked up by the next update.
        var target = CodeGenHelper.GetDescription<FrameworkElement>("content");
        var raw = CodeGenHelper.FindByName<object>("StylingValues");
        if (target == null || raw == null) return;

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
        if (info == null) return;

        // WinUI resolves a Style's TargetType through XAML type metadata, which these code-only controls do not
        // have, so the style targets the nearest WinUI base type. Its setters still name the component's own
        // properties, and the values take the style as their source, as an app's style would give them.
        var type = target.GetType();
        var styleType = type;
        while (styleType != null && (styleType.Namespace == null || !styleType.Namespace.StartsWith("Microsoft.UI.Xaml")))
        {
            styleType = styleType.BaseType;
        }
        var style = new Style(styleType);
        foreach (var name in info.GetKeys())
        {
            var value = info[name] as JsonDictionaryValue;
            var field = type.GetField(name + "Property", BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy);
            var property = type.GetProperty(name, BindingFlags.Public | BindingFlags.Instance);
            if (value == null || value.Value == null || field == null || property == null) continue;
            var dependencyProperty = field.GetValue(null) as DependencyProperty;
            if (dependencyProperty == null) continue;
            style.Setters.Add(new Setter(dependencyProperty, XamlBindingHelper.ConvertValue(property.PropertyType, value.Value.ToString())));
        }
        target.Style = style;
    }
    //end eventHandler

}
