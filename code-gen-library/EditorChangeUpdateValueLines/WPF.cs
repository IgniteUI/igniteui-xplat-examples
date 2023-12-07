//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System;
//end imports

public class EditorChangeUpdateValueLines
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeUpdateValueLines(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var item = (PropertyEditorPropertyDescription)sender;
        var value = (string)item.PrimitiveValue;
        var chart = CodeGenHelper.GetDescription<XamCategoryChart>("content");
       
        var valueLineType = (ValueLayerValueMode)Enum.Parse(typeof(ValueLayerValueMode), value);
        chart.ValueLines.Clear();
        chart.ValueLines.Add(valueLineType);
    }
    //end eventHandler
}