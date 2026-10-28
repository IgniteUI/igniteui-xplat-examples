//begin imports
using System.ComponentModel;
using System.Windows;
using System.Windows.Media;
using Infragistics.Controls.Description;
//end imports

public class TestsApplyStylingValues
{

    //begin eventHandler
	//WPF: System.Action
    // Styles the component the way an app's style would: each value becomes a setter of a style on the component,
    // based on the style it already has.
    public  void TestsApplyStylingValues(){
		var parser = new JsonDictionaryParser();
        var target = CodeGenHelper.GetDescription<FrameworkElement>("content");
		var jVal = CodeGenHelper.FindByName<JsonDictionaryValue>("StylingValues");
		var values = (JsonDictionaryObject)parser.Parse((string)jVal.Value);
		var type = target.GetType();
		var style = new Style(type, target.Style);
		var converter = new BrushConverter();
		foreach (var propertyName in values.GetKeys())
		{
			var descriptor = DependencyPropertyDescriptor.FromName(propertyName, type, type);
			if (descriptor == null)
			{
				throw new System.InvalidOperationException(type.Name + " has no " + propertyName + " dependency property to style.");
			}
			var value = (string)((JsonDictionaryValue)values[propertyName]).Value;
			style.Setters.Add(new Setter(descriptor.DependencyProperty, converter.ConvertFromString(value)));
		}
		target.Style = style;
    }
    //end eventHandler

}
