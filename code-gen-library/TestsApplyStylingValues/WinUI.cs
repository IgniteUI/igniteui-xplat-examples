//begin imports
using Microsoft.UI.Xaml;
using Infragistics.Controls;
using Infragistics.Portable.Description;
//end imports

public class TestsApplyStylingValues
{
    //begin eventHandler
    //WinUI: System.Action
    public void TestsApplyStylingValues()
    {
        var target = CodeGenHelper.GetDescription<FrameworkElement>("content");
        var data = CodeGenHelper.FindByName<JsonDictionaryValue>("StylingValues");
        var values = (JsonDictionaryObject)new JsonDictionaryParser().Parse((string)data.Value);
        // The native wrappers derive from Grid. A base target also works for wrappers constructed in code,
        // whose managed type has not been introduced to WinUI through compiled XAML metadata.
        var style = new Style(typeof(FrameworkElement)) { BasedOn = target.Style };
        foreach (var name in values.GetKeys())
        {
            var field = target.GetType().GetField(name + "Property",
                System.Reflection.BindingFlags.Public | System.Reflection.BindingFlags.Static |
                System.Reflection.BindingFlags.FlattenHierarchy);
            if (field == null)
            {
                throw new System.InvalidOperationException(target.GetType().Name + " has no " + name + " dependency property to style.");
            }
            var property = (DependencyProperty)field.GetValue(null);
            var text = (string)((JsonDictionaryValue)values[name]).Value;
            var brush = (Microsoft.UI.Xaml.Media.Brush)Microsoft.UI.Xaml.Markup.XamlBindingHelper.ConvertValue(
                typeof(Microsoft.UI.Xaml.Media.Brush), text);
            style.Setters.Add(new Setter(property, brush));
        }
        target.Style = style;
    }
    //end eventHandler
}
